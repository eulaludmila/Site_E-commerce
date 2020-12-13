import styled from 'styled-components';

export const SectionProdutos = styled.section`

    max-width: 1200px;
    margin: 0 auto 50px;
    padding: 0 15px;
    box-sizing:border-box;

    h2{
        font-weight: 900;
        margin-bottom: 8px;
    }

    .linha{
        width: 80px;
        height: 5px;
        background-color: #C0C0C0;
        border: 1px solid #C0C0C0;
        margin-bottom:30px;
    }
    
    div.produtos{
        width: 100%;
        display: grid;
        row-gap: 10px;
    }

    @media(min-width:1200px){
        div.produtos{
            grid-template-columns: repeat(4, 1fr);
            column-gap: 50px;
        }
    }

    @media(min-width: 750px) and (max-width:1200px){
        div.produtos{
            grid-template-columns: repeat(3, 1fr);
            column-gap: 50px;
        }
    }
   
    @media(max-width: 750px){
        div.produtos{
            place-items:center;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
        }
    }

`