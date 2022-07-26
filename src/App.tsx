import React from 'react';
import Todos from "./components/Todos/Todos";

const App = () => {
    return (
        <section style={{display: "flex", justifyContent: 'center'}}>
            <Todos />
        </section>
    );
};

export default App;