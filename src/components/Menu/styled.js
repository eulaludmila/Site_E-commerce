import styled from 'styled-components';


export const NavMenu = styled.nav`

    width: 100%;
    height:80px;

    .logo{
        display:flex;
        align-items:center;
    }

    .pesquisa{
        height: 30px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-bottom: 1px solid #7A7A7A;


        input{
            border:none;
            width:100%;
            padding: 0 15px 0 0 ;
        }

        input::placeholder{
            color: #7A7A7A;
        }
    }

    .container-menu{
        max-width:1200px;
        height: inherit;
        margin: 0 auto;
        display:grid;
        grid-template-columns: 30% 50% 20% 10%; 
        align-items:center
    }

    .minha-conta{
        display:flex;
        justify-content:center;
        align-items:center;

        div{
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 18px;
            margin-left: 5px;

            color: #7A7A7A;
        }
    }

    .carrinho{
        display:flex;
        justify-content:center;
        align-items:center;
        
        div{
            width: 20px;
            height: 20px;
            background: #F8475F;
            color:#fff;
            border-radius: 50%;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-left: 2px;
            font-size: 14px;
            font-weight:700;
        }
    }
`