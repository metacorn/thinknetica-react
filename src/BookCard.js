import React from 'react';
import BookInfo from './BookInfo';
import AuthorsList from './AuthorsList';

const styles = {
    container: {
        display: 'flex'
    }
};

class BookCard extends React.Component {
    render() {
        const { authors, ...book } = this.props.book

        return (
            <div style={styles.container}>
                <BookInfo book={book} />
                <AuthorsList authors={authors} />
            </div>
        );
    }
};

export default BookCard;
