import React, { Component } from 'react';


export default class Spanone extends Component {
    render () {
        return (
            <div id = "about" className = "pad-section">
                <div className = "container">
                    <div className = "row">
                        <h1 className = "text-center">About Me</h1>
                        <div className = "text-center">
                        <img id = "me" src = {require("../img/Aaron.jpg")} alt = "JavaScript" height="440px" width="300px"/>
                        </div>
                        <br/>
                        <br/>
                        I am an imaginative web developer and a graduate of UNCC's Coding Bootcamp. As a dedicated coder 
                        and a lifetime learner, I am educated in several front-end and back-end languages. These include HTML, CSS,
                        JavaScript, MongoDB, SQL, Node, Express, and Git. My strongest language is JavaScript, and my favorite libraries 
                        are React, Redux, and Axios, with an emerging interest in Angular and Socket.io.
                    </div>
                    <h3 className = "text-center" id = "lang">Languages</h3>
                    <div className = "image text-center" id = "img-lang">
                        <img src = {require("../img/JS.jpg")} alt = "JavaScript" height="110px" width="100px"/> &nbsp; &nbsp;
                        <img src = {require("../img/css.png")} alt = "JavaScript" height="120px" width="120px"/> &nbsp; &nbsp;
                        <img src = {require("../img/html.png")} alt = "JavaScript" height="120px" width="120px"/> &nbsp; &nbsp;
                        <br/>
                        <br/>
                        <img src = {require("../img/react.png")} alt = "JavaScript" height="120px" width="120px"/> &nbsp; &nbsp;                      
                        <img src = {require("../img/mongodb.png")} alt = "JavaScript" height="120px" width="120px"/> &nbsp; &nbsp;
                        <img src = {require("../img/sql.jpg")} alt = "JavaScript" height="120px" width="120px"/> &nbsp; &nbsp;
                        <img src = {require("../img/node.png")} alt = "JavaScript" height="120px" width="120px"/> &nbsp; &nbsp;
                    </div>
                </div>
            </div>
        );
    }
}