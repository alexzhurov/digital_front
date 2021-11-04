import React         from 'react';
import logo          from './logo.svg';
import { Content }   from './components/Content/index';
import { Header }    from './components/Header/index';
import { Menu }      from './components/Menu/index';
import { Preloader } from './components/Preloader/index';
import { Sidebar }   from './components/Sidebar/index';
import './App.css';


function App() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
    );
}

export default App;

/*
* menu
* header
* sidebar
*
* content
* preloader
* */
