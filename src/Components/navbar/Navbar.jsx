import './navbar.css'
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";



const Navbar = (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [toggleMenu, setToggleMenu] = useState(false);

    const signUserOut = () => {
    
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/login";
        });
      };

    return (
        <div className='navbarContainer'>
            <div className="navLogo">
                <img src={logo2} alt="logo" width={120} />
            </div>
            <ul className="navLinks">
                <li><Link to="/" className={props.type === 'home' ? 'active' : null} >HOME</Link></li>
                <li><Link to="/recording" className={props.type === 'recording' ? 'active' : null}>RECORDING</Link></li>
                <li><Link to="/calls" className={props.type === 'calls' ? 'active' : null}>CALLS</Link></li>
              
            </ul>
           
            <ul className='navLinks'>
                <li><Link to="/account">MY ACCOUNT</Link></li>
                <button onClick={signUserOut}> Log Out</button>
            </ul>
            
            <div className="navSmallScreen">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png" alt="" onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='navSmall'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/macos-close.png" alt="" onClick={()=> setToggleMenu(false)} />
                        <ul className='navlinks'>
                            <li><Link to="/" className={props.type === 'home' ? 'active' : null} >HOME</Link></li>
                            <li><Link to="/recording" className={props.type === 'recording' ? 'active' : null}>RECORDING</Link></li>
                            <li><Link to="/calls" className={props.type === 'calls' ? 'active' : null}>CALLS</Link></li>
                           
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;