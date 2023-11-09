import React from "react";
import myphoto from "../assets/logo.png"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={myphoto}
          alt="Founder"
        />

        <h2>Jyoti Prakash</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/jyotiprakash-mohanta-447573199/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/jyotiprakash524/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.github.com/Jyotiprakash312" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;