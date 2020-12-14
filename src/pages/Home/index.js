import { useState, useEffect } from 'react';
import ItensProduto from '../../components/ItensProduto';
import api from '../../config/index';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import { SectionProdutos } from './styled';

const Home = () => {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState(0);

    useEffect(() => {
        api.get('products')
            .then(res => {
                setProdutos(res.data);
            });

        // Verifica se existe a sessão de carrinho e adiciona a quantidade no state do Carrinho
        if (JSON.parse(sessionStorage.getItem('carrinho')) !== null) {
            setCarrinho(JSON.parse(sessionStorage.getItem('carrinho')).length);
        }
    }, [setProdutos, setCarrinho]);

    // Pegando o valor da quantidade de produtos no carrinho que foi passado pelas props e adicionando na state
    function enviarQuantidadeProduto(quantidade) {
        setCarrinho(quantidade);
    }

    return (
        <>
            <Menu carrinho={carrinho} />
            <Header />
            
            <SectionProdutos>
                <h2> Mais Vendidos </h2>
                <div className="linha"></div>
                <div className="produtos">
                    {produtos.map(dados => (

                        <ItensProduto key={dados.productId} item={dados} carrinho={(quantidade) => enviarQuantidadeProduto(quantidade)} />

                    ))}
                </div>
            </SectionProdutos>
        </>
    );
};

export default Home;