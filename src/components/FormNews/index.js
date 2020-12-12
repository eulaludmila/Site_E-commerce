import {ContainerNews, Form, NovoCadastro} from './styled'
const FormNews = () => {

        return(
            <ContainerNews>
                    <h2>Participe de nossas news com promoções e novidades!</h2>
                    <Form>
                        <div className="form-group">
                            <input placeholder="Digite seu nome"/>
                        </div>
                        <div className="form-group">
                            <input placeholder="Digite seu email"/>
                        </div>
                        <div className="form-group">
                            <button type="submit">Eu quero!</button>
                        </div>
                    </Form>
                    <NovoCadastro>
                        <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                        <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                        <button>Cadastrar novo e-mail</button>
                    </NovoCadastro>
            </ContainerNews>
        )

}

export default FormNews;