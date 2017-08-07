import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/App.css';
import imgJson from './data/img.json';

class App extends Component{
    render(){
        return (
            <div className="imgList">
                {imgJson.map(function (img) {
                return <img className="App-logo" src={img.src} alt={img.src}/>
            })}
            </div>
        )
    }
}

class Hello extends Component{
    render(){
        return(<i>this is a I</i>);
    }
}

// export default App;
export {Hello};
export {App};
