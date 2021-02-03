import React, { useCallback, useEffect, useState } from 'react';

import { Container, AddMoreBooksButton, BooksSection, BooksList } from './styles'

import { FiBook } from 'react-icons/fi'
import BookComponent from '../../components/BookComponent';
import api from '../../services/api';

interface Book {
    id: string;
    titulo: string;
    editora: string;
    foto: string;
    autores: [];
}

const Home: React.FC = () => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {

        api.get('/obras').then(response => {
            console.log(response.data)
            setBooks(response.data)
        })

    }, [])




    return (
        <Container>
            <div>
                <h1>Hello!</h1>
                <strong>Henrique Pires</strong>
            </div>



            <AddMoreBooksButton to='/book'>
                <FiBook size='20' color='#FFF' />
                <strong>Add book</strong>
            </AddMoreBooksButton>



            <BooksSection>

                <strong>My books</strong>

                <BooksList>

                    {books.map(book => {
                        return <BookComponent key={book.id} href={book.foto} src={book.foto} />
                    })}




                </BooksList>

            </BooksSection>


        </Container>
    )

}

export default Home;