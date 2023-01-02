import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"; 

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 600) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (screenWidth < 600) {
          setOpen(false);
        }
      };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return <nav className="navbar">
    <div className="nav-wrapper">
    <div className="logo">
    </div>
        <div className="list-wrapper">
        <img
            src={`${process.env.PUBLIC_URL}/bars.png`}
            alt="Open"
            style={{opacity: !open ? 1 : 0 }}
            onClick={() => {
                setOpen(!open);
            }}
            />

            <img
            src={`${process.env.PUBLIC_URL}/x.png`}
            alt="Close"
            style={{opacity: open ? 1 : 0 }}
            onClick={() => {
                setOpen(!open);
            }}
            />

     <ul style={{ left: open ? "0" : "-100vw" }}>
         <li>
             <Link to="/" > Home </Link>
         </li>
         <li>
             <Link to="/about" > About </Link>
         </li>
         <li>
             <Link to="/education"> Education</Link>
         </li>
         <li>
             <Link to="/tennis"> Tennis</Link>
         </li>
         <li>
             <Link to="/resume" > Resume </Link>
         </li>
         <li>
             <Link to="/skills" > Skills </Link>
         </li>
         <li>
             <Link to="/contact" > Contact </Link>
         </li>
        </ul>
    </div>
</div>
</nav>; 
};

export default NavBar; 