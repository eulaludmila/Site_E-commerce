import styled from 'styled-components';
import imgHeader from '../../assets/header.png'
import imgHeaderMobile from '../../assets/header-foto.png'

export const FundoHeader = styled.header`

    width: 100%;
    background-size: 100% 100%;
    background-repeat:no-repeat;

    @media(min-width:1000px){
        height: 500px;
        background-image: url(${imgHeader});
    }

    @media(min-width:800px) and (max-width: 1000px){
        height: 400px;
        background-image: url(${imgHeaderMobile});
        .container-header{
            background-color: rgba(0,0,0,0.5);
        }
    }

    @media(max-width:800px){
        height: 300px;
        background-image: url(${imgHeaderMobile});
        .container-header{

            background-color: rgba(0,0,0,0.5);
        }
    }

    .container-header{
        max-width: 1200px;
        height: inherit;
        margin: 0 auto;
        color:#fff;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding: 0 15px;
        box-sizing:border-box;
       

        p, h1{
            max-width: 600px;
            margin: 0 0 5px;
            
        }

        p{
            font-size: 24px;
            font-weight:700;
        }

        h1{
            font-size: 40px;
            font-weight:900;
            line-height: 40px;;
        }

    }

`