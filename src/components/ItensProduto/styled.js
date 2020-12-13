import styled from 'styled-components';

export const Item = styled.div`

    width: 100%;
    min-height: 400px;
    height: auto;
    position: relative;
    cursor: pointer;

    .img-desconto{
        position: absolute;
        top: 0;
        right:0;
    }
    .img-produto{
        width: 100%;
        object-fit:100% 100%;
        object-position:center;
    }

    .detalhes{
        background-color:#fff;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding-bottom:20px;
    }

    .stars{
        pointer-events: none;
    }

    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        margin-bottom:0;
        color: #7A7A7A;
    }

    .preco-antigo{
        text-align:center;
        color: #7A7A7A;
        font-size:14px;
        margin:0;
        font-weight: 400;
    }
    .preco-atual{
        text-align:center;
        color: #000;
        font-size:22px;
        font-weight: 700;
        margin:0;
    }
    .parcela{
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        text-align: center;
        color: #7A7A7A;
        margin:0;
    }

    button{
        height: 45px;
        background: #000000;
        border-radius: 5px;
        border:none;
        color:#fff;
        margin-top: 15px;
        font-weight:700;
    }

    &:hover button{
        visibility: visible;
        display:block;
        cursor: pointer;
    }

    @media(min-width: 1000px){

        &:hover{
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.1)
        }

        &:hover .detalhes{
        
        background-color:#E6E8EA;
        transition: background-color 0.1s linear;
        }

        button{
            width: 140px;
            visibility: hidden;
        }

        .img-produto{
            height:  250px;
        }
    }

    @media(max-width: 1000px){
        button{
            visibility: visible;
        }
    }

    @media(min-width: 750px) and (max-width:1000px){

        button{
            width: 140px;
        }
      
        .img-produto{
            height:  180px;
        }
       
    }
    @media(max-width: 750px){
        button{
            width: 100%;
        }
        .img-produto{
            height:  180px;
        }
    }

`