import styled from 'styled-components';


export const NavMenu = styled.nav`

    width: 100%;
    min-height:80px;
    height:auto;
    padding: 0 15px;
    box-sizing:border-box;

    .logo{
        
        display:flex;
        align-items:center;

        img{
            height: 35px;
        }
    }

    .container-menu{
        max-width:1200px;
        height:80px;
        margin: 0 auto;
        
        align-items:center
    }

    @media(min-width: 800px){

        .menu-mobile{
            display:none;
        }

        .container-menu{
            display:grid;
            grid-template-columns: 20% 50% 20% 10%; 
        }

        .pesquisa-mobile{
            display:none;
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
    }
    @media(max-width: 800px){

        .menu-mobile{
            display:block;
            margin-top: 15px;
        }
        .container-menu{
            display: flex;
            justify-content:space-between;
            align-items:center;

            /* grid-template-columns: repeat(3, 1fr);*/ 
        } 
        .minha-conta{
            display:none;
        }

        .pesquisa{
            display:none;
        }

        .pesquisa-mobile{
            height: 30px;
            display:flex;
            justify-content:center;
            align-items:center;
            border-bottom: 1px solid #7A7A7A;
            margin-bottom: 15px;


            input{
                border:none;
                width:100%;
                padding: 0 15px 0 0 ;
            }

            input::placeholder{
                color: #7A7A7A;
            }
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