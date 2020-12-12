import styled from 'styled-components';

export const Footer = styled.footer`

    width: 100%;
    min-height: 200px;
    height: auto;
    background-color: #000;
    padding: 25px 0;

    .container-footer{
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        padding: 0 20px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

        h2{
            color: #fff;
            font-weight: bold;
            margin-top: 0;
        }

        .linha{
            width: 50px;
            border: 3px solid #FFFFFF;
            margin-bottom:30px;
        }

        p{
            color:#fff;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 12px;
            
        }

        p + p{
            margin-top: 15px;
        }

        .grid-footer{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
    }

`

export const Button = styled.button`

    width: 200px;
    height: 45px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 20% 80%;
    align-items:center;
    justify-content:center;
    outline: none;
    cursor: pointer;
    border:none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    margin: 15px 0;

    div{
        display:flex;
        align-items:center;
        justify-content:center;
    }

`

export const LogosFooter = styled.div`

    width: 200px;
    height: 150px;
    display: grid;

`