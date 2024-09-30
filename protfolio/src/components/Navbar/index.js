
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import "./index.css"
import { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg"

const Navbar=()=>{
    const [menu,setMenu]=useState("home");
const menuRef=useRef();


const openMenu=()=>{
    menuRef.current.style.right="0";
}
const closeMenu=()=>{
    menuRef.current.style.right="-350px";
}

    return(
        <div className="navbar">
            <h1 className="logo">Vineeth</h1>
            <p className="sub">MERN DEVELOPER</p>
            <p></p>
            <RiMenu3Fill size={40} onClick={openMenu} className="nav-mob-open"/>
           
            <ul ref={menuRef} className="nav-menu">
                <IoIosClose onClick={closeMenu} className="nav-mob-close" size={35}/>
                <li><a className="link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></a>{menu==="home"?<img src={underline} alt=""/>:<></>}</li>
                <li><a className="link" href="#about"><p onClick={()=>setMenu("about")}>About me</p></a>{menu==="about"?<img src={underline} alt=""/>:<></>}</li>
                <li><a className="link" href="#work"><p onClick={()=>setMenu("work")}>Protfolio</p></a>{menu==="work"?<img src={underline} alt=""/>:<></>}</li>
                <li><a className="link" href="#certification"><p onClick={()=>setMenu("certification")}>My Certification</p></a>{menu==="certification"?<img src={underline} alt=""/>:<></>}</li>
                <li><a className="link" href="#contact"><p onClick={()=>setMenu("contact")}>contact</p></a>{menu==="contact"?<img src={underline} alt=""/>:<></>}</li>
             
            </ul>
            <div className="nav-connect"><a className="link" href="#contact">Connect With Me</a></div>
        </div>

    )
}


export default Navbar


/*<img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
<img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>



*/