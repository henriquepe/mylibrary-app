import React, { useRef } from 'react';
import { Form } from '@unform/web';

import { Container, SubmitButton, BackToHomeButton } from './styles';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';

import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

interface BookProps {
    titulo: string;
    editora: string;
    foto: string;
    autores: string;
}


const BookPage: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleFormSubmit = async (data: BookProps) => {

        const authorsRightFormat = data.autores.split(', ');



        await api.post('/obras', {
            titulo: data.titulo,
            editora: data.editora,
            foto: data.foto,
            autores: authorsRightFormat
        })

    };

    return (
        <Container>

            <BackToHomeButton to='/'>
                <FiArrowLeft size='25' />
                <strong>Voltar</strong>
            </BackToHomeButton>

            <div>
                <strong>It's time to add a book...</strong>
            </div>

            <Form ref={formRef} onSubmit={handleFormSubmit}>

                <Input name="titulo" placeholder="Type the title of book" />
                <Input name="editora" placeholder="Type the publishing company" />
                <Input name="foto" placeholder="Type an url to book photo" />
                <Input name="autores" placeholder="Type the authors" />
                <SubmitButton type='submit'>Save book</SubmitButton>

            </Form>


        </Container>
    )


}

export default BookPage;