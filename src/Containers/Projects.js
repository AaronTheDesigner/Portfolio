import React, { Component } from 'react';

export default class Projects extends Component {
    render () {
        return (
            <div id = "projects">
                <div className = "text-vcenter">
                    <br/>
                    <br/>
                    <div className = "panel panel-default container" style = {{ opacity: .95 }}>
                        <br/>
                        <br/>
                        <h1>Projects</h1>
                        <br/>
                        <div className = "panel-body">
                            <div className = "row">
                                <div className = "col-md-1"></div>
                                <div className = "col-md-3 text-left">
                                    <div className = "panel-header">
                                        <h2>Youtube</h2>
                                    </div>
                                    <div>
                                        <img 
                                            src= {require("../img/Youtube.png")} 
                                            className="img-responsive img-rounded" 
                                            height="220px" 
                                            width="220px" 
                                            alt="Responsive image"
                                            style = {{ opacity: 1 }}
                                            />
                                    </div>
                                </div>
                                <div className = "col-md-7 text-left">
                                    <div className = "panel-header">
                                        <h3>Basic React App</h3>
                                    </div>
                                    <div>
                                        <p>A Youtube component made for an author’s website. 
                                            The application uses Google JavaScript API and React 
                                            states to feature the top video for the author’s 
                                            search criteria, and the next five videos. Bootstrap 
                                            and CSS3 are used to create a simple responsive design, 
                                            that can be fit into any website. Note: Search Bar was 
                                            removed for website purposes but is featured in the 
                                            Github repository, <a href = {""}>here</a></p>
                                        <a href = {"https://youtube-jay.herokuapp.com/"}>Link</a>
                                    </div>
                                </div>   
                                <div className = "col-md-1"></div>                         
                            </div>
                        </div>
                        <br/>
                        <div className = "panel-body">
                            <div className = "row">
                                <div className = "col-md-1"></div>
                                <div className = "col-md-3 text-left">
                                    <div className = "panel-header">
                                        <h2>RollPG</h2>
                                    </div>
                                    <div>
                                        <img 
                                            src= {require("../img/Roll.png")} 
                                            className="img-responsive img-rounded" 
                                            height="220px" 
                                            width="220px" 
                                            alt="Responsive image"
                                            />
                                    </div>
                                </div>
                                <div className = "col-md-7 text-left">
                                    <div className = "panel-header">
                                        <h3>Team Project</h3>
                                    </div>
                                    <div>
                                        <p>RollPG is a gaming companion application meant to streamline 
                                            the complex mathematical processes that drive tabletop role 
                                            playing games. The application allows users to create characters, 
                                            dungeon masters to create enemies, and for all the math behind 
                                            the battle and encounter mechanics to be calculated online, 
                                            instantly. This allows a session to move faster, and for the focus 
                                            to be on the storytelling aspect of the activity. Also by using 
                                            Socket IO, a gaming session can be facilitated over vast distances.  <br/>
                                             Developer in a team of five.</p>
                                        <a href = {"https://evening-dawn-72143.herokuapp.com/"}>Link</a>
                                    </div>
                                </div>   
                                <div className = "col-md-1"></div>                         
                            </div>
                        </div>                        
                        <br/>
                        <div className = "panel-body">
                            <div className = "row">
                                <div className = "col-md-1"></div>
                                <div className = "col-md-3 text-left">
                                    <div className = "panel-header">
                                        <h2>Sous</h2>
                                    </div>
                                    <div>
                                        <img 
                                            src= {require("../img/Sous1.png")} 
                                            className="img-responsive img-rounded" 
                                            height="220px" 
                                            width="220px" 
                                            alt="Responsive image"
                                            />
                                    </div>
                                </div>
                                <div className = "col-md-7 text-left">
                                    <div className = "panel-header">
                                        <h3>Team Project</h3>
                                    </div>
                                    <div>
                                        <p>A culinary assistant application that uses location, 
                                            weather conditions, time of year, and a responsive 
                                            shopping list to curate recipe suggestions. The app 
                                            uses Google Maps, OpenWeather, and several instances 
                                            of the Yummly API to curate suggestions on conscious 
                                            and subconscious levels, and uses Bootstrap, Materialize,
                                             Javascript, and JQuery for elegant and mobile 
                                             responsive functionality. Uses of Amazon Fresh and 
                                             other APIs for shopping suggestions coming soon. 
                                             <br/>
                                             Developer in a group of three.</p>
                                        <a href = {"https://aarontoliver.github.io/Sous/ingredients.html"}>Link</a>
                                    </div>
                                </div>   
                                <div className = "col-md-1"></div>                         
                            </div>
                        </div>                        
                        <br/>
                        <div className = "panel-body">
                            <div className = "row">
                                <div className = "col-md-1"></div>
                                <div className = "col-md-3 text-left">
                                    <div className = "panel-header">
                                        <h2>Blog</h2>
                                    </div>
                                    <div>
                                        <img 
                                            src= {require("../img/Blog.png")} 
                                            className="img-responsive img-rounded" 
                                            height="220px" 
                                            width="220px" 
                                            alt="Responsive image"
                                            />
                                    </div>
                                </div>
                                <div className = "col-md-7 text-left">
                                    <div className = "panel-header">
                                        <h3>Solo feat. API and Postman</h3>
                                    </div>
                                    <div>
                                        <p>A simple blog application using JavaScript, ReactJs,
                                             and Redux. Languages used are HTML, CSS, React, Redux. 
                                             Dependencies used are Webpack, Babel, Axios, and Mocha-Chai.</p>
                                        <a href = {"https://blog-jay.herokuapp.com/"}>Link</a>
                                    </div>
                                </div>   
                                <div className = "col-md-1"></div>                         
                            </div>
                        </div>
                        <br/>
                        <div className = "panel-body">
                            <div className = "row">
                                <div className = "col-md-1"></div>
                                <div className = "col-md-3 text-left">
                                    <div className = "panel-header">
                                        <h2>Weather Checker</h2>
                                    </div>
                                    <div>
                                        <img 
                                            src= {require("../img/Weather.png")} 
                                            className="img-responsive img-rounded" 
                                            height="220px" 
                                            width="220px" 
                                            alt="Responsive image"
                                            />
                                    </div>
                                </div>
                                <div className = "col-md-7 text-left">
                                    <div className = "panel-header">
                                        <h3>Solo ft. OpenWeather and Sparklines</h3>
                                    </div>
                                    <div>
                                        <p>A simple weather application that provides the temperature, 
                                            pressure, and humidity of a city. The app uses GoogleMaps 
                                            and OpenWeather to search for a major city and provide the 
                                            aforementioned information. Languages used are Javascript, 
                                            HTML, Bootstrap, CSS, React, Axios, Webpack, Babel, Redux, 
                                            and Mocha-Chai.</p>
                                        <a href = {"https://reactweather9069.herokuapp.com/"}>Link</a>
                                    </div>
                                </div>   
                                <div className = "col-md-1"></div>                         
                            </div>
                            <br/>
                            <br/>
                        </div>
                                                
                    </div>
                   

                </div>
            </div>
        )
    }
}