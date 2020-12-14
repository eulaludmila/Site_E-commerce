import { useState } from 'react';
import { ContainerNews, Form, SucessoCadastro } from './styled'
import Input from '../../components/Input'
import api from '../../config/index';

const FormNews = () => {

    const valoresInicias = {nome:'', email:''};

    const [isCadastro, setIsCadastro] = useState(false);
    const [form, setForm] = useState(valoresInicias);

    //Inicia erro com false. Caso houver um erro, mudará para true
    const [erro, setErro] = useState({nome:false, email:false});

    async function handleCadastroPromocao(e) {
        e.preventDefault();

        const verificaCampos = handleValidaCampos();

        //Verifica se teve retorno de nenhum erro
        if(verificaCampos === 0){

            const req = {
                name: form.nome,
                email: form.email
            }
            
            await api.post('newsletter', req)
            .then(res => {

                //Limpar campos
                handleLimparCampos();
                //Validação verdadeira para cadastro realizado
                setIsCadastro(true);
            })

        }

    }

    //Função para realizar a mundança dos valores
    function handleChange(e) {
        const {name, value} = e.target;
        setForm({...form,[name]: value})
    }

    //Validar campos vazios
    function handleValidaCampos() {
        let contadorVazio = 0;
        let camposVazios = {};

        for (const key in form) {
            
            //Verifica campos vazios
            if (form[key] === '' || (key === 'nome' && form['nome'].length < 10)) {
                camposVazios = {...camposVazios, [key]:true};
                contadorVazio++;
            
            //Verifica se o email é inválido
            }else if(key === 'email' && !handleIsEmail(form[key])){
                camposVazios = {...camposVazios, [key]:true};
                contadorVazio++;
            
            //Retorno de campos validados com sucesso
            }else{
                camposVazios = {...camposVazios, [key]:false};
            }
        }
        
        //Adicionando ao estado Erro os campos de vazios ou não
        setErro(camposVazios);

        return contadorVazio;
    }

    //Limpar campos do formulário
    function handleLimparCampos() {
        setForm(valoresInicias);
    }

    //Validar Email
    function handleIsEmail(email){
        let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //Email inválido
        if(!regEmail.test(email)){
            return false;

        //Email válido
        }else{
            return true;
        }
    }

    return(
        <ContainerNews>
            {
                !isCadastro ?
                <>
                    <h2>Participe de nossas news com promoções e novidades!</h2>
                    <Form onSubmit={handleCadastroPromocao}>

                        <Input placeholder="Digite seu nome" name="nome" value={form.nome} onChange={(e) => handleChange(e)} erro={erro.nome} textoErro="Preencha com seu nome completo"/>

                        <Input placeholder="Digite seu email" name="email" value={form.email} onChange={(e) => handleChange(e)} erro={erro.email} textoErro="Preencha com um e-mail válido"/>

                        <div className="form-group">
                            <button type="submit">Eu quero!</button>
                        </div>
                    </Form>
                    
                </> :
                
                <SucessoCadastro>
                    <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <button type="button" onClick={() => {setIsCadastro(false)}}>Cadastrar novo e-mail</button>
                </SucessoCadastro>
            }
        </ContainerNews>
    )

}

export default FormNews;