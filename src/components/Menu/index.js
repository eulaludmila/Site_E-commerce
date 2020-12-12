import {NavMenu} from './styled'
import logo from '../../assets/logo-preto.svg'
import imgPesquisa from '../../assets/pesquisa.svg'
import imgConta from '../../assets/minha-conta.svg'
import imgCarrinho from '../../assets/carrinho.svg'
import imgMenu from '../../assets/menu.svg'


function Menu(){

    return(
        <NavMenu>
            <div className="container-menu">
                <div className="menu-mobile">
                    <img src={imgMenu} alt="Menu"/>
                </div>
                <div className="logo">
                    <img src={logo} alt="Corebiz"/>
                </div>
                <div className="pesquisa">
                    <input placeholder="O que está procurando?"/>
                    <img src={imgPesquisa} alt="Pesquisar"/>
                </div>
                <div className="minha-conta">
                    <img src={imgConta} alt="Conta"/>
                    <div>Minha Conta</div>
                </div>
                <div className="carrinho">
                    <img src={imgCarrinho} alt="Carrinho"/>
                    <div>1</div>
                </div>
            </div>
            <div className="pesquisa-mobile">
                <input placeholder="O que está procurando?"/>
                <img src={imgPesquisa} alt="Pesquisar"/>
            </div>
        </NavMenu>
    )

}

export default Menu;