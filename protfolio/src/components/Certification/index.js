import "./index.css"
import theme_pattern from "../../assets/theme_pattern.svg"

import mywork_data from "../../assets/mywork_data"
import { GoArrowRight } from "react-icons/go";
import Certificate from "../../assets/mycertificate";


const Certification=()=>{
    return(
        <div id="certification" className="certify">
            <div className="certify-title">
                <h1>My Certification</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="certify-container">
                {Certificate.map((work,index)=>{
                    return <img key={work.id} src={work.cimage} alt=""/>
                })}
            </div>
            <div className="certify-showmore">
                <p>Show More</p>
                <GoArrowRight size={25}/>
            </div>
        </div>
    )
}


export default Certification