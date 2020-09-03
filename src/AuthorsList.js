import React from 'react';
import { defaultAuthorsCount } from './settings';
import AuthorInfo from './AuthorInfo';
import authorsListWidth from './settings';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: authorsListWidth
    },
    authorsList: {
        display: 'flex',
        flexWrap: 'wrap'
    }
};

class AuthorsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { authorsListUnfolded: false };
        this.authorsList = this.props.authors;
        console.log(this.authorsList);
    }

    unfoldAuthorsList() {
        this.setState({ authorsListUnfolded: true });
    }

    preparedAuthorsList() {
        return ((this.state.authorsListUnfolded) || (this.authorsList.length <= defaultAuthorsCount)) ?
               this.authorsList :
               this.authorsList.slice(0, defaultAuthorsCount)
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.authorsList}>
                    {this.preparedAuthorsList().map(author => (
                        <div key={author.id}>
                            <AuthorInfo author={author} />
                        </div>
                    ))}
                </div>
                {((this.authorsList.length > defaultAuthorsCount) && !this.state.authorsListUnfolded) &&
                    <button onClick={() => this.unfoldAuthorsList()}>Show all authors ({this.authorsList.length})</button>
                }
            </div>
        );
    }
};

export default AuthorsList;
