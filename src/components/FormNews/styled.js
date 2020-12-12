import styled from 'styled-components';

export const ContainerNews = styled.div`

    width: 100%;
    min-height: 140px;
    height: auto;
    background: #F2F2F2;
    padding-bottom: 20px;

    @media(min-width:780px){

        h2{
            text-align:center;
        }
    }
    @media(max-width:780px){

        h2{
            text-align:justify;
            padding: 0 20px;
        }
    }


`

export const Form = styled.form`

    max-width: 1000px;
    padding: 25px 20px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    justify-content:center;
    align-items:center;
    column-gap: 10px;
    row-gap: 10px;
    

    input{
        width: 100%;
        height: 50px;
        background: #FFFFFF;
        border-radius: 5px;
        border:none;
        outline:none;
        padding: 0 15px;
        box-sizing:border-box;
        font-weight:700;

        &::placeholder{
        color:#000

        }
    }

    @media(min-width:530px){

        button{
            width: 140px;
        }
    }
    @media(max-width:530px){

        button{
            width:100%;
        }
    }

    button{
       
        height: 48px;
        color:#fff;
        background-color:#000;
        border:none;
        border-radius: 5px;
        cursor:pointer;
        font-weight:700;
        line-height: 14px;
    }


`

export const NovoCadastro = styled.div`

    max-width:1200px;
    margin: 0 auto;
    padding: 0 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h3{
        text-align:center;
        font-size:16px;
        margin: 0;
        /* font-weight:400; */
    }

    p{
        margin: 0 0 20px;
        text-align:center;
        font-size:14px;
        color:#585858;
        font-weight:400;
    }

    @media(min-width:530px){

        button{
            width: 300px;
        }
    }
    @media(max-width:530px){

        button{
            width:100%;
        }
    }

    button{

        height: 48px;
        color:#fff;
        background-color:#000;
        border:none;
        border-radius: 5px;
        cursor:pointer;
        font-weight:700;
    }

`