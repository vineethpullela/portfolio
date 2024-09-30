import "./index.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import Services_Data from "../../assets/services_data"

import { GoArrowRight } from "react-icons/go";

const Services=()=>{
    return(<div id="services" className="services">
        <div className="services-title">
            <h1 className="services-name">My services</h1>
            <img src={theme_pattern} alt="" className="services-img"/>
        </div>
        <div className="services-container">
{Services_Data.map((service,index)=>{
    return <div key={index} className="service-format">
        <h3>{service.id}</h3>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <div className="services-readmore">
            <p>Read More</p>
            <GoArrowRight size={40}/>
         </div>   
        </div>
})}
        </div>

    </div>
    
)
}


export default Services