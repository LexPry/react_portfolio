import React from "react";

import './app.css';
import Header from "./Components/Header";

import twitterLogo from "./images/Twitter.png";
import githubLogo from "./images/github.png";
import developerPhoto from "./images/me.jpg";

function App() {
    return (
        <>
            <div id="page">
                <div className="top-bar">
                    <img id='developerPhoto' src={developerPhoto} alt="Developer's selfie"/>
                    <Header/>
                    <a href="https://twitter.com/NatureBoundKing">
                        <img id='twitter-logo' src={twitterLogo} alt="Twitter Logo"/>
                    </a>
                    <a href="https://github.com/lightingWolf">
                        <img id='github-logo' src={githubLogo} alt="github-link"/>
                    </a>
                </div>

                <div className='body-content'>
                <div className="aboutMe">
                    <h1>About me</h1>
                    <p>
                        Hi, <br/> My name is Alex, I am a fullstack java developer!
                        <br/> I started programming with a C++ class on udemy and fell in
                        love with software development. <br/> Thanks for checking out my page!
                    </p>
                </div>


                    <h1>Take a look at these projects I'm proud of: </h1>
                    <ul>
                        <p>Github Links:</p>
                        <li>
                            <a href="https://github.com/LightingWolf/Boarding-Pass-Project">
                                Boarding Pass Project(CLI)
                            </a>
                            <p className="description">A group project for work that takes in user information, <br/>
                                and outputs a boarding pass for the trip.</p>
                        </li>
                        <li>
                            <a href="https://github.com/LightingWolf/Genspark-Projects/tree/master/src/java/hangman_reimplementation">
                                Functional Hangman
                            </a>
                            <p className="description">Hangman, but in the functional programming style</p>
                        </li>
                        <li>
                            <a href="https://github.com/LightingWolf/Genspark-Projects/tree/master/src/java/goblins">
                                Goblins Vs Humans(CLI)
                            </a>
                            <p className="description">A command line game</p>
                        </li>
                        <li>
                            <a href="https://github.com/LightingWolf/TacoStand">
                                Taco Stand
                            </a>
                            <p className="description">A project where I practiced working on Spring, Spring Boot, and
                                hibernate</p>
                        </li>
                    </ul>
                </div>

                <div id='bottom-bar'>
                    <p>Created using React</p>
                </div>
            </div>
        </>
    );
}

export default App;
