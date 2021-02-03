
import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`


    display: flex;
    max-width: 1400px;
    margin: 60px auto 0px auto;
    font-family: 'Helvetica';
    flex-direction: column;


    div {

        strong {
            font-size: 28px;
            color: #FFF;

        }

    }

`;

export const SubmitButton = styled.button`
    display: flex;
    width: 100%;
    margin: 0 0 60px 0;
    background-color: #292D36;
    font-family: 'Helvetica';
    justify-content: center;
    border: 1px solid #292D36;
    border-radius: 20px;
    padding: 20px 0 20px 0px;
    transition: background-color 0.2s;
    text-decoration: none;
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    

    &:hover {
        background-color: ${shade(0.1, '#292d36')};
        border: 1px solid ${shade(0.1, '#292d36')};
    }     
        
    

`;

export const BackToHomeButton = styled(Link)`

    display: flex;
    align-items: center;
    text-decoration: none;

    margin-bottom: 60px;

    transition: opacity 0.2s;

    &:hover {
        opacity: 0.6;
    }


    svg {
        color: #fff;
    }

    strong {
        color: #fff;
        font-size: 16px;
        margin-left: 12px;
    }


`;

