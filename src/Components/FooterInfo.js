import React from "react";

import "../styles/main.css";

export default function FooterInfo() {
  return (
    <footer className="footer-container">
      <div className="footer-section-header">
        <div className="rectangle"></div>
        <h2>Contact us</h2>
      </div>

      <div className="contact-section">
        <div className="footer-question">
          <p>Have a project in mind?</p>
          <p>Let's make it happen</p>
        </div>
        <div className="footer-address">
          <p>22 Street Name, Suburb, 8000,</p>
          <p>Cape Town, South Africa</p>
          <p>+27 21 431 0001</p>
          <p id="footer-mail">
            <a
              href="mailto:
            enquiries@website.co.za"
              target="_blank"
              rel="noopener noreferrer">
              enquires@website.com
            </a>
          </p>
        </div>
      </div>

      <div className="links-section">
        <div className="service-links">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/impressum">Impressum</a>
        </div>

        <div className="social-media-links">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.twitter.com">Twitter</a>
        </div>

        <div className="work-related-links">
          <a href="https://www.github.com">Github</a>
          <a href="https://www.linkedin.com">Linkedin</a>
          <a href="https://www.microsoft.com/teams">Teams</a>
        </div>

        <div className="creative-links">
          <a href="https://www.youtube.com">Youtube</a>
          <a href="https://www.behance.net">Behance</a>
          <a href="https://www.dribbble.com">Dribbble</a>
        </div>

        <div>
          <div className="explore-jobs">
            <a href="/open-jobs">Explore Open Jobs</a>
          </div>

          <div className="copyright">
            <p>©2000—2023 Company Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
