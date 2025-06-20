import React from 'react';
import '../styles/Problemsolution.css';
import Problem from '../assets/Problem.jpg';
import Solution from '../assets/Solution.jpg';

function Problemsolution(){
    return(
        <section>
            <div className="images">
                <img src={ Problem } className="image-left" alt=""/>
                <img src={ Solution } className="image-right" alt=""/>
            </div>
            <div className="problem-solution">
                <h2>Legacy tools weren’t built for speed. Or sanity.</h2>
                <p>We’ve all been there — bloated dashboards, dozens of toggles, five-step workflows for one simple task. <br/>The Polyglot Lab cuts through the noise. </p>
            </div>
        </section>
    );
}

export default Problemsolution;