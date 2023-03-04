import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    // {`Copyright © enview.ai ${year}`}
    return (
        <footer>
            <p>{` Copyright © ${year} `}
                <a href='https://enview.in/'> enview.ai </a>
            </p>
            <p>Made with 💙 by
                <a href='https://kaveriraut.github.io/'> Kaveri Raut </a>
            </p>
        </footer>
    )
};

export default Footer