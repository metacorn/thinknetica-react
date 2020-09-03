import React from 'react';
import { authorInfoWidth, authorInfoPadding } from './settings';

const styles = {
    container: {
        padding: authorInfoPadding,
        width: authorInfoWidth
    },
    avatar: {
        width: authorInfoWidth
    }
};

class AuthorInfo extends React.Component {
    render() {
        const { avatarUrl, fullName, about } = this.props.author;

        return (
            <div style={styles.container}>
                <img src={avatarUrl} style={styles.avatar} />
                <p><strong>{fullName}</strong></p>
                <p>{about}</p>
            </div>
        );
    }
};

export default AuthorInfo;
