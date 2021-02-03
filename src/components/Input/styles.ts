
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 1400px;
    margin: 40px 0px 40px 0px;
    background-color: #292D36;
    font-family: 'Helvetica';
    justify-content: center;
    border: 1px solid #292D36;
    border-radius: 20px;
    padding: 20px 0 20px 0px;
    



    input {
        background-color: transparent;
        color: #FFF;
        font-size: 18px;
        border: 0;
        width: 100%;
        text-align: center;

        &::placeholder {
            color: #FFF;
            font-size: 14px;
            font-family: 'Helvetica';
        }
    }



`;