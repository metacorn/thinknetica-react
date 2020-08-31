import React from 'react';

import BookCard from './BookCard';

const book = {
    title: 'Slaughterhouse-Five',
    description: 'A science fiction-infused anti-war novel by Kurt Vonnegut. It follows the life and experiences of Billy Pilgrim, from his early years to his time as an American soldier and chaplain\'s assistant during World War II, to the postwar years, with Billy occasionally traveling through time itself.',
    pages: 275,
    language: 'English',
    progress: 60,
    coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440319389l/4981.jpg',
    author: {
        fullName: 'Kurt Vonnegut',
        email: 'kurt@vonnegut.com',
        avatarUrl: 'https://images.gr-assets.com/authors/1433582280p5/2778055.jpg',
        about: 'American novelist, satirist, and most recently, graphic artist.'
    },
    minimalPrice: 10,
    desirablePrice: 15
};

class App extends React.Component {
    render() {
        return (
            <BookCard book={book} />
        );
    }
};

export default App;
