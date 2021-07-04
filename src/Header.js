import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header style={styles.header}>
                BOOK CROUDFUNDING
            </header>
        );
    }
};

export default Header;

const styles = {
    header: {
        padding: "0 10%",
        minHeight: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "bold"
    }
}
