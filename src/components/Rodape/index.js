import {Footer, Button} from './styled'
import imgMensagem from '../../assets/message.svg'
import imgContato from '../../assets/fale-conosco.svg'
import logosFooter from '../../assets/Logos-Footer.svg'

function Rodape(){

    return(
        <Footer>
            <div className="container-footer">
                <div>
                    <h2>Localização</h2>
                    <div className="linha"></div>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </div>
                <div className="grid-footer">
                    <Button>
                        <div>
                            <img  src={imgMensagem} alt="Enviar Mensagem"/>
                        </div>
                        <span>ENTRE EM CONTATO</span>
                    </Button>
                    <Button>
                        <div>
                        <img src={imgContato} alt="Fale Conosco" />

                        </div>
                        <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                    </Button>
                </div>
                <div className="grid-footer">
                    {/* <LogosFooter>
                        <img/>
                    </LogosFooter> */}
                    <img src={logosFooter} alt="Corebiz e VTEX"/>
                </div>
            </div>
        </Footer>
    )
}

export default Rodape;