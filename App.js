import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/App.css';
import imgJson from './data/img.json';

/* 头部的图片展示 */
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
        return(<i>this is a Bowen</i>);
    }
}

// 第一种方式是默认暴露 可赋值给任意变量
// 第二种方式可暴露多个变量，名称要一致
// export default App;
export {Hello};
export {App};
