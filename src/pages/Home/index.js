
import { useState, useEffect } from 'react';
import ItensProduto from '../../components/ItensProduto';
import api from '../../config/index'
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import {SectionProdutos} from './styled'

const Home = () => {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    
    
    useEffect(() => {

        api.get('products')
            .then(res => {
                setProdutos(res.data)

            })

    }, [setProdutos])

    function chamar(produto){
        setCarrinho(produto);
    }

    return (
        <>
        <Menu/>
        <Header/>
            <SectionProdutos>
                <h2>Mais Vendidos</h2>
                <div className="linha"></div>
                <div className="produtos">
                    {
                    
                    produtos.map(dados => (
                        
                            <ItensProduto key={dados.productId} item={dados} click={(produto) => chamar(produto)} />
                        
                    ))

                }
                </div>
            </SectionProdutos>
        </>
    );
}

export default Home;