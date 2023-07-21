import React from 'react';
import "./Header.css"
import logo from "./tracker-logo.png"

 const Header: React.FC = () => {


    
  return (
    <div className="header">
        <img src={logo} alt='logo'/>
        <div className='header-text'>
          <h1>Made by Nurettin Demirhan</h1>
          <a href='#contact' >Contact me</a>
          <section>
                    
                    <div className="one-link">
                        
                           
                            
                        
                        <a href="https://www.linkedin.com/in/nurettin-demirhan">LinkedIn</a>
                    </div>
                    <div className="one-link">
                        
                           
                            
                        
                        <a href="https://www.github.com/NurettinDemirhan">Github</a>
                    </div>
                    <div className="one-link">
                        
                            
                            
                        
                        <a href="mailto:nurettindemirhan1998@gmail.com">Email</a>
                    </div>
                </section>
        </div>
        
    </div>
  );
}
export default Header;
