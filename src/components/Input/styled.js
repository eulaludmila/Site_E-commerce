import styled from 'styled-components';

export const GroupInput = styled.div`

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

    @media(max-width:600px){
        
        padding: 0 20px;

    }
    span{
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 12px;
        margin-top: 10px;
        display: flex;
        align-items: center;

        /* color-second */

        color: #D7182A;
    }


`