import React from "react";
import "./footer.css";
import { FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';


export default function Footers() {
 
  return (
    <React.Fragment>
       <footer class="footer text-center">
    <div class="container">
      <ul class="list-inline mb-5">
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white mr-3" href="#!">
          <FaGithub />
          </a>
        </li>
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white mr-3" href="#!">
          <FaLinkedin />
          </a>
        </li>
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white" href="#!">
          <FaTwitter/>
          </a>
        </li>
      </ul>
      <p class="text-muted small mb-0">RAFIN KHAN &copy;2020</p>
    </div>
  </footer>
 
    </React.Fragment>
  );
}
