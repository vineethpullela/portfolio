import "./index.css"
import  theme_pattern from "../../assets/theme_pattern.svg"


const About=()=>{

    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1 className="about-heading">About me</h1>
                <img src={theme_pattern} alt="" className="about-img"/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                <img src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1727704336/hava%20havi/WhatsApp_Image_2024-09-30_at_19.21.38_02afc6df_l8puzr.jpg" className="about-dp" alt="" hidden/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Enthusiastic and dedicated front-end developer with a strong foundation in HTML, CSS, and JavaScript. Eager to apply my technical skills and problem-solving abilities to create innovative and user-friendly web applications. Seeking a challenging role to contribute to a dynamic team and grow my professional skills.</p>
                        <p>I am passionate about technology and innovation, and I love the challenge of creating beautiful and functional web applications. I enjoy learning new skills and solving complex problems, and I believe that collaboration is key to achieving great results</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"30%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>    
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF HANDS-ON EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>50+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
        </div>
    )
}


export default About