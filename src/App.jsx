import React from 'react';
import Board from './Components/Board';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Board size={3} />
            <Footer />
        </div>
    );
}

export default App;