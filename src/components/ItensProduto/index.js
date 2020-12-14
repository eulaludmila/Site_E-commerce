import { Item } from './styled'
import imgDesconto from '../../assets/desconto.svg'
import ReactStars from 'react-rating-stars-component';

const ItensProduto = (props) => {

    //Função para trasnformar número para moeda Real"
    function numberToReal(numero) {

        numero = String(numero);
        let centavo = numero.substr(numero.length - 2);
        let real = numero.substr(0,numero.length - 2);

        //Transformando o numero em real e obrigando a ter digitos na moeda
        let numeroFloat = Number(`${real}.${centavo}`).toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })

        return numeroFloat;
    }

    //Enviando o produto para o carrinho
    function enviarCarrinho(item){
        let carrinhoStorage = [];

        if(JSON.parse(sessionStorage.getItem('carrinho')) !== null){
            
            carrinhoStorage = JSON.parse(sessionStorage.getItem('carrinho'));
        }

        //Adicionando o produto no array
        carrinhoStorage.push(item);

        //Adicionando os produtos na sessão
        sessionStorage.setItem('carrinho', JSON.stringify(carrinhoStorage))

        //Quantidade de produtos no carrinho
        let quantidadeItens = carrinhoStorage.length;

        //Passando para a props da página Home a quantidade de itens no carrinho
        props.carrinho(quantidadeItens);
      
    }
    

    return (
        <Item>
            {
                props.item.listPrice !== null &&
                <img src={imgDesconto} alt="Desconto" className="img-desconto" />

            }

            <img alt={props.item.productName} src={props.item.imageUrl} className="img-produto" />
            <div className="detalhes">
                <h3>{props.item.productName}</h3>
                <ReactStars
                    count={5}
                    value={props.item.stars}
                    color="#ffa1ad"
                    size={18}
                    activeColor="#F8475F"
                    classNames="stars"
                />
                <p className="preco-antigo" style={{visibility: props.item.listPrice !== null ? 'visible' : 'hidden'}}>
                        de R$ {numberToReal(props.item.listPrice)}
                </p>

                <p className="preco-atual">
                    por R$ {numberToReal(props.item.price)}
                </p>
               
                <p className="parcela"  style={{visibility: props.item.installments.length !== 0 ? 'visible' : 'hidden'}}>
                    ou em {props.item.installments.length !== 0 && props.item.installments[0].quantity}x de R$ {props.item.installments.length !== 0 && numberToReal(props.item.installments[0].value)}
                </p>

                <button type="button" onClick={() => enviarCarrinho(props.item)}>COMPRAR</button>
            </div>

        </Item>
    )
}

export default ItensProduto;