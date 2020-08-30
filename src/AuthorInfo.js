import React from 'react';

class AuthorInfo extends React.Component {
    render() {
        const {
            author: { avatarUrl, fullName, about }
        } = this.props;

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

const blockWidth = 150;
const styles = {
    container: {
        padding: 10,
        width: blockWidth
    },
    avatar: {
        width: blockWidth
    }
};
