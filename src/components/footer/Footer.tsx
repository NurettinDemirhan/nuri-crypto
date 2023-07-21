import React from 'react';
import "./Footer.css"

 const Footer: React.FC = () => {
    const contactSection = document.getElementById('contact');
    
    
    
  return (
    <div className="contact-container" id='contact'>
        
        <section>
                    <h1>CONTACT LINKS</h1>
                    <div className="one-link">
                        <div>
                            <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" 
                            alt="linkedin logo"
                            />
                            <label>LinkedIn</label>
                        </div>
                        <a href="https://www.linkedin.com/in/nurettin-demirhan"></a>
                    </div>
                    <div className="one-link">
                        <div>
                            <img 
                            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" 
                            alt="linkedin logo"
                            />
                            <label>Github</label>
                        </div>
                        <a href="https://www.github.com/NurettinDemirhan"></a>
                    </div>
                    <div className="one-link">
                        <div>
                            <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/2560px-Gmail_Icon_%282013-2020%29.svg.png" 
                            alt="linkedin logo"
                            />
                            <label>Email</label>
                        </div>
                        <a href="mailto:nurettindemirhan1998@gmail.com"></a>
                    </div>
                </section>
        
    </div>
  );
}
export default Footer;
