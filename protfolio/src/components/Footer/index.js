import "./index.css"
import footer_log from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"


const Footer=()=>{
    return(<div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
            <h1 className="footer-logo">Vineeth</h1>
                <p>I am a frontend developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""/>
                    <input type="email" placeholder="Enter your email" />

                </div>
                <div className="footer-subscribe">Subscribe</div>

            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footerr-bottom-left">© 2022 Vineeth pullela . All rights</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>s
    </div>)
}



export default Footer