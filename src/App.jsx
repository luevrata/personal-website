import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import {Helmet} from "react-helmet";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Activities from "./components/activities/Activities";

const App =() => {

    return(
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Elizaveta Firsova</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content="Elizaveta Firsova Website" />
        </Helmet>

        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Projects/>
        <Activities/>
        <Contacts/>
        <Footer/>
    </div>
    )

}

export default App