import React         from 'react';
import { Content }   from './components/Content/index';
import { Header }    from './components/Header/index';
import { Menu }      from './components/Menu/index';
import { Preloader } from './components/Preloader/index';
import { Sidebar }   from './components/Sidebar/index';
import './App.css';


function App() {
    return (
        <div className="l-wrapper">
            <Menu className="l-menu"/>
            <div className="l-center">
                <Header className="l-header"/>
                <Content className="l-content"/>
            </div>
            <Sidebar className="l-sidebar"/>
        </div>
    );
}

export default App;
