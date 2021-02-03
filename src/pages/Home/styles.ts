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


        h1 {
            font-weight: 400;
            font-size: 24px;
            color: #9e9ea7;
            
        }

        strong {
            font-size: 28px;
            color: #FFF;

        }

    }

    

`;

export const AddMoreBooksButton = styled(Link)`
    display: flex;
    width: 100%;
    margin: 40px 0 70px 0;
    background-color: #292D36;
    font-family: 'Helvetica';
    justify-content: center;
    border: 1px solid #292D36;
    border-radius: 20px;
    padding: 20px 0 20px 0px;
    transition: background-color 0.2s;
    text-decoration: none;

    &:hover {
        background-color: ${shade(0.1, '#292d36')};
        border: 1px solid ${shade(0.1, '#292d36')};
    }

    strong {
        
        color: #FFF;
        font-size: 18px;
        font-weight: bold;
        margin-left: 10px;
    }

`;

export const BooksSection = styled.div`
    
    width: 100%;


`;

export const BooksList = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
    

`;

// export const FindBookInput = styled.input`
//     display: flex;
//     width: 100%;
//     margin: 0 0 60px 0;
//     background-color: #292D36;
//     font-family: 'Helvetica';
//     justify-content: center;
//     border: 1px solid #292D36;
//     border-radius: 20px;
//     padding: 20px 0 20px 0px;
//     transition: background-color 0.2s;
//     color: #FFF;
//     text-align: center;

//     &:hover {
//         background-color: ${shade(0.1, '#292d36')};
//         border: 1px solid ${shade(0.1, '#292d36')};
//     }


// `;