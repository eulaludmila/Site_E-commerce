import { Item } from './styled'
import imgDesconto from '../../assets/desconto.svg'
import ReactStars from 'react-rating-stars-component';

const ItensProduto = (props) => {

    function numberToReal(numero) {

        numero = String(numero);
        let centavo = numero.substr(numero.length - 2);
        let real = numero.substr(0,numero.length - 2);
        let numeroFloat = Number(`${real}.${centavo}`).toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })

        return numeroFloat;
    }

    function enviarCarrinho(item){
        let carrinhoStorage = [];

        if(JSON.parse(sessionStorage.getItem('carrinho')) !== null){
            
            carrinhoStorage = JSON.parse(sessionStorage.getItem('carrinho'));
        }
        carrinhoStorage.push(item);
        sessionStorage.setItem('carrinho', JSON.stringify(carrinhoStorage))

        let qauntidadeItens = carrinhoStorage.length;

        props.carrinho(qauntidadeItens);
      
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

                {
                    props.item.listPrice !== null &&

                    <p className="preco-antigo">
                        de R$ {numberToReal(props.item.listPrice)}</p>

                }
                <p className="preco-atual">por R$ {numberToReal(props.item.price)}</p>
                {
                    props.item.installments.length !== 0 && <p className="parcela">ou em {props.item.installments[0].quantity}x de R$ {numberToReal(props.item.installments[0].value)}</p>
                }

                <button type="button" onClick={() => enviarCarrinho(props.item)}>COMPRAR</button>
            </div>

        </Item>
    )
}

export default ItensProduto;