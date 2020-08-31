import React from 'react';

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

const blockWidth = 300;
const styles = {
    container: {
        padding: 10,
        width: blockWidth
    },
    cover: {
        width: blockWidth
    }
};
