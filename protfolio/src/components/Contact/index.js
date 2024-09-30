import "./index.css"

import theme_pattern from "../../assets/theme_pattern.svg"

import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";


const Contact=()=>{
    const onSubmit = async (event) => {
        event.preventDefault();
       
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e07e6b09-ed04-4878-bb99-14f36e8aeebc");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
         alert(data.message)
        } else {
          console.log("Error", data);
        }
      };

    return(
            <div id="contact" className="contact">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt=""/>
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p>Have a project in mind or want to discuss your digital needs? I'd love to hear from you. Feel free to reach out using the email me directly. Let's create something amazing together!</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <IoIosMail size={40}/>
                               <p>vineethpullela@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <BiSolidPhoneCall size={40}/>
                           <p>+91 955-017-4358</p>
                            </div>
                            <div className="contact-detail">
                                <FaLocationDot size={40}/>
                                <p>Hyderabad India</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name" name="name"/>
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder="Enter your email" name="email"/>
                        <label htmlFor="">Write your message here</label>
                        <textarea rows="8" name="message" placeholder="Enter your message" ></textarea>
                        <button type="submit" className="contact-submit">Submit now</button>
                        
                    </form>
                </div>
            </div>

    )
}


export default Contact