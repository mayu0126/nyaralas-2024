import React from 'react';
import Landing from '../../components/Landing';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import Education from '../../components/Education';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';
import PackingList from '../../components/PackingList';
import Bonusz from '../../components/Bonusz';


function Main () {
    return (
        <div>
            <Landing id='landing'/>
            <AboutMe id='informaciok'/>
            <Projects id='szallasok'/>
            <Education id='ettermek'/>
            <Skills id='programok'/>
            <Experience id='termeszet'/>
            <Contact id='koltsegek'/>
            <PackingList id='mitpakoljakbe'/>
            <Bonusz id='bonusz'/>
        </div>
    );
}

export default Main;