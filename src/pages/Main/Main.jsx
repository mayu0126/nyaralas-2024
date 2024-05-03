import React from 'react';
import Landing from '../../components/Landing';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import Education from '../../components/Education';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';


function Main () {
    return (
        <div>
            <Landing id='landing'/>
            <AboutMe id='informaciok'/>
            <Projects id='szallasok'/>
            <Education id='ettermek'/>
            <Skills id='latnivalok'/>
            <Experience id='termeszet'/>
            <Contact id='koltsegek'/>
        </div>
    );
}

export default Main;