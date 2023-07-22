import React from 'react';
import "./Header.css"
import logo from "./tracker-logo.png"





 const Header: React.FC = () => {


    
  return (
    <div className="header">
        <img src={logo} alt='logo'/>
        <div className='header-text'>
            <h1>Made by Nurettin Demirhan</h1>
            <p>Contact me</p>
            <section>    
                <a href="https://www.linkedin.com/in/nurettin-demirhan">LinkedIn</a>
                <a href="https://www.github.com/NurettinDemirhan">Github</a>
                <a href="mailto:nurettindemirhan1998@gmail.com">Email</a>
            </section>
        </div>
        
    </div>
  );
}
export default Header;
