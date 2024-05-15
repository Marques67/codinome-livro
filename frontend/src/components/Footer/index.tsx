import { ReactComponent as FooterImage } from 'assets/images/cg-logo.svg';
import { ReactComponent as InstagramImage } from 'assets/images/instagram-logo.svg';
import './styles.css';
import 'bootstrap/js/src/collapse';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container-footer">
        <div className="logo-container">
          <FooterImage />
          <p className="copyright">&copy; Codinome Geek - 2024</p>
        </div>
        <div className="instagram-container">
          <a
            href="https://www.instagram.com/codinome.geek/"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-insta-image"
          >
            <InstagramImage />
          </a>
          <p className="instagram-name">@codinome.geek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
