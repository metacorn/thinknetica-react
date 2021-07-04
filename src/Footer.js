import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer style={styles.footer}>
                <a href="https://github.com/metacorn" target="_blank">@metacorn</a> &copy; {new Date().getFullYear()}
            </footer>
        );
    }
};

export default Footer;

const styles = {
    footer: {
        padding: "0 10%",
        minHeight: "20px",
    }
}
