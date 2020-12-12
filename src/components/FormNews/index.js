import { useState } from 'react';
import {ContainerNews, Form, NovoCadastro} from './styled'
import api from '../../config/index';
const FormNews = () => {

    const valoresInicias = {nome:'', email:''};

    const [isCadastro, setIsCadastro] = useState(false);
    const [form, setForm] = useState(valoresInicias);
    const [erro, setErro] = useState({nome:false, email:false});

    async function handleCadastroPromocao(e) {
        e.preventDefault();

        const verificaCampos = handleValidaCampos();

        if(verificaCampos === 0){

            const req = {
                name: form.nome,
                email: form.email
            }
            
            await api.post('newsletter', req)
            .then(res => {

                handleLimparCampos();
                setIsCadastro(true);
            })

        }

    }

    function handleChange(e) {
        const {name, value} = e.target;
        setForm({...form,[name]: value})
    }

    function handleValidaCampos() {
        let contadorVazio = 0;
        let camposVazios = {};

        for (const key in form) {
            
            if (form[key] === '') {
                camposVazios = {...camposVazios, [key]:true};
                contadorVazio++;
            }else{
                camposVazios = {...camposVazios, [key]:false};
            }
      
        }
        
        setErro(camposVazios);

        return contadorVazio;
    }

    function handleLimparCampos() {
        setForm(valoresInicias);
    }

    return(
        <ContainerNews>
            {
                !isCadastro ?
                <>
                    <h2>Participe de nossas news com promoções e novidades!</h2>
                    <Form onSubmit={handleCadastroPromocao}>
                        <div className="form-group">
                            <input placeholder="Digite seu nome" name="nome" value={form.nome} onChange={(e) => handleChange(e)}/>
                            {erro.nome && <span>Preencha com seu nome completo</span>}
                        </div>
                        <div className="form-group">
                            <input placeholder="Digite seu email" name="email" value={form.email} onChange={(e) => handleChange(e)}/>
                            {erro.email && <span>Preencha com um e-mail válido</span>}
                            
                        </div>
                        <div className="form-group">
                            <button type="submit">Eu quero!</button>
                        </div>
                    </Form>
                    
                </> :

                <NovoCadastro>
                    <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <button type="button" onClick={() => {setIsCadastro(false)}}>Cadastrar novo e-mail</button>
                </NovoCadastro>
            }
        </ContainerNews>
    )

}

export default FormNews;