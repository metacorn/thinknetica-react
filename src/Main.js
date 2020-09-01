import React from 'react';
import BookCard from './BookCard';
import book from './book.json';

class Main extends React.Component {
    render() {
        return (
            <main style={styles.main}>
                <BookCard book={book} />
            </main>
        );
    }
};

export default Main;

const styles = {
    main: {
        padding: "0 10%",
    }
}
