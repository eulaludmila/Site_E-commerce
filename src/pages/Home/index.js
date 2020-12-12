
import { useState, useEffect } from 'react';
import ItensProduto from '../../components/ItensProduto';
import api from '../../config/index'
import Menu from '../../components/Menu'

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
            <section className="container-produtos">
                {
                   
                    produtos.map(dados => (
                      
                            <ItensProduto key={dados.productId} item={dados} click={(produto) => chamar(produto)} />
                       
                    ))

                }
            </section>
        </>
    );
}

export default Home;