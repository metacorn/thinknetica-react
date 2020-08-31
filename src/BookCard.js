import React from 'react';

import BookInfo from './BookInfo';
import AuthorInfo from './AuthorInfo';

class BookCard extends React.Component {
    render() {
        const { author, ...book } = this.props.book

        return (
            <div style={styles.container}>
                <BookInfo book={book} />
                <AuthorInfo author={author} />
            </div>
        );
    }
};

export default BookCard;

const styles = {
    container: {
        display: 'flex'
    }
};
