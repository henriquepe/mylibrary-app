import React, { AudioHTMLAttributes } from 'react';

import { Container } from './styles';

interface BookComponentProps extends AudioHTMLAttributes<HTMLAnchorElement> {
    src: string;
    href: string;

}


const BookComponent: React.FC<BookComponentProps> = ({ src, href }) => {


    return (
        <Container href={href}>
            <img src={src} alt="Senhor dos aneis" />
        </Container>
    )
}

export default BookComponent;