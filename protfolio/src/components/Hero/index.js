import "./index.css"

import resume from "../../assets/vineethD.pdf"
import { useRef } from "react";

const Hero=()=>{

    
        const resumeRef = useRef(null);
      
        const handleDownload = () => {
          resumeRef.current.click();
        };

    return(
        <div id="home" className="hero">
            <img src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1723794287/hava%20havi/_DSC1178_copy_z2ceci.jpg" alt="profile-img" className="profile-img"/>
            <h1 className="hero-name"><span className="hero-span">I'm Vineeth Pullela,</span> Frontend Developer</h1>
            <p className="hero-desc"> I am actively seeking an entry-level role where I can leverage my skills and contribute to a dynamic team. I am skilled in front-end and back-end.</p>
            <div className="hero-action">
                <div className="hero-connect"><a className="link" href="#contact">Connect with me</a></div>
                <div className="hero-resume" onClick={handleDownload}>                    
                   My resume</div>
            </div>
            <a className="link" href={resume} download="VineethResume"  ref={resumeRef} hidden ></a>
        </div>
    )
}


export default Hero