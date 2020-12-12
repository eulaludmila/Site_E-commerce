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
        column-gap: 50px;
        row-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

`