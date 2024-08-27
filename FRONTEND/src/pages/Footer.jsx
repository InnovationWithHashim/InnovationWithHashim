
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./footer.css"

export const Footer = () => {
  return (
    <footer>
      <section className='footer-container'>
    <div class="footerContainer">
        <div class="socialIcons">
            <a href="https://www.facebook.com/profile.php?id=100009739935499" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/hashim__tanoli/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/hashim-khan-030122324/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>

            <a href="https://github.com/InnovationWithHashim" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
  
    <div class="footerBottom">
      <p>Email: innovationwithhashim@gmail.com</p>
        <p>Copyright &copy;2024; Designed by <span class="designer">Hashim khan</span></p>
    </div>
    </div>

      </section>
    </footer>
  );
};


