import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (  
    <> 
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};
 
const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Portfolio.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:jyotiprakashjjj@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;










// import React from 'react'

// const Header = () => {
//   return (
//     <nav>
//       <NavContent/>
//     </nav>
//   );
// };

// const NavContent = () =>(
//   <>
//   <h2>Jyotiprakash.</h2>
//   <div>
//     <a href="#home">Home</a>
//     <a href="#work">Work</a>
//     <a href="#timeline">Experience</a>
//     <a href="#services">Services</a>
//     <a href="#testimonial">Testimonial</a>
//     <a href="#contact">Contact</a> 
//   </div>

//   <a href="mailto:jyotiprakashjjj@gmail.com">
//     <button>Email</button>
//   </a>
//   </>
// )

// export default Header