import React from 'react';

import BookInfo from './BookInfo';
import AuthorInfo from './AuthorInfo';

class BookCard extends React.Component {
    render() {
        const book = (({ title, description, pages, language, progress, coverUrl, minimalPrice, desirablePrice }) => ({ title, description, pages, language, progress, coverUrl, minimalPrice, desirablePrice }))(this.props.book);
        const author = this.props.book.author;

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
