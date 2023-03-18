import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>{` Copyright © ${year} `}
                <p>Made with 💙 by
                    <a href='https://kaveriraut.github.io/'> Kaveri Raut </a>
                </p>
            </p>
        </footer>
    )
};

export default Footer