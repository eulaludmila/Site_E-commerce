import {NavMenu} from './styled'
import logo from '../../assets/logo-preto.svg'
import imgPesquisa from '../../assets/pesquisa.svg'
import imgConta from '../../assets/minha-conta.svg'
import imgCarrinho from '../../assets/carrinho.svg'


function Menu(){

    return(
        <NavMenu>
            <div className="container-menu">
                <div className="logo">
                    <img src={logo} alt="Corebiz"/>
                </div>
                <div className="pesquisa">
                    <input placeholder="O que está procurando?"/>
                    <img src={imgPesquisa} alt="Pesquisar"/>
                </div>
                <div className="minha-conta">
                    <img src={imgConta}/>
                    <div>Minha Conta</div>
                </div>
                <div className="carrinho">
                    <img src={imgCarrinho}/>
                    <div>1</div>
                </div>
            </div>
        </NavMenu>
    )

}

export default Menu;