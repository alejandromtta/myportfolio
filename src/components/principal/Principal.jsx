import github from "../img/githubIcon.svg"
import linkedin from "../img/linkedinIcon.svg"
import twitter from "../img/twitter.svg"
import "../principal/Principal.css"
export default function principal(){
    return(
        <div id="home" className="containers">
            <h1>
                Alejandro Motta
            </h1>
            <h1 className="accessibility-animation">
                <span className="end-letters">Full Stack Js Dev </span><span className="middle-letters"> , Do you see 
                    problems? </span><span className="alternate-middle-letters">, I see  solutions.</span>
            </h1>
            <div>
            <a href="https://github.com/alejandromtta" target="_blank"  rel="noreferrer" ><img src={github} alt="github" className="logo"/></a>
            <a href="https://www.linkedin.com/in/alejandro-mtta/" target="_blank"   rel="noreferrer" ><img src={linkedin} alt="linkedin" className="logo"/></a>
            <a href="https://github.com/alejandromtta" target="_blank"  rel="noreferrer"  ><img src={twitter} alt="twitter" className="logo"/></a>
            </div>
                
        </div>
    )
}