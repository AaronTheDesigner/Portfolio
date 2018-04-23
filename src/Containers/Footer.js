import React, { Component } from 'react';

export default class Footer extends Component {
    render () {
        return (
            <div id = "footer" className = "pad-section">
                <div className = "container-fluid text-cventer">
                    <h1 className = "text-center">Contact</h1>
                    <br/>
                    <br/>
                    <div className = "row">
                        <div className = "col-md-3">
                        </div>
                        <div className = "col-md-6">                          
                            <div className = "text-center">
                                <img src = {require("../img/google.png")} height = "80px" width = "80px" alt = "email"/>
                                <a href = {"mailto:aaronaugustine85@gmail.com"}>aaronaugustine85@gmail.com</a>
                            </div>
                            <div className = "text-center">
                                <img src = {require("../img/linkedin.png")} height = "80px" width = "80px" alt = "email"/>
                                <a href = {"https://www.linkedin.com/in/aaron-toliver-14820262/"}>Linkedin Profile</a>
                            </div>
                            <div className = "text-center">
                                <img src = {require("../img/github.png")} height = "80px" width = "80px" alt = "email"/>
                                <a href = {"https://github.com/aaronthedesigner"}>Github Profile</a>                                
                            </div>
                            <br/>
                            <hr/>
                            <div className = "text-center">
                                <a href = "#home">Home</a> &nbsp; &nbsp; &nbsp;
                                <a href = "#about">About</a> &nbsp; &nbsp; &nbsp;
                                <a href = "#projects">Projects</a> &nbsp; &nbsp; &nbsp;
                                <a href = "#contact">Contact</a>
                            </div>
                        </div>
                        <div className = "col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}