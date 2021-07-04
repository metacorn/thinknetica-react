import React from 'react';
import { bookInfoWidth, bookInfoPadding } from './settings';

const styles = {
    container: {
        padding: bookInfoPadding,
        width: bookInfoWidth
    },
    cover: {
        width: bookInfoWidth
    }
};

class BookInfo extends React.Component {
    render() {
        const {
            book: { title, description, pages, language, progress, coverUrl, minimalPrice, desirablePrice }
        } = this.props;

        return (
            <div style={styles.container}>
                <img src={coverUrl} style={styles.cover} />
                <p><strong>{title}</strong></p>
                <p><i>{description}</i></p>
                <p>Progress: {progress}%</p>
                <p>Subscription minimal price: {minimalPrice}$</p>
                <p>Desirable by author price: {desirablePrice}$</p>
            </div>
        );
    }
};

export default BookInfo;
