import React from 'react';
import Main from '../Main.js';

function Index(props) {
    return (
        <Main {...props}>
            <h1>My Site</h1>
            <p>Welcome to my website.</p>
        </Main>
    );
};

export default Index;
