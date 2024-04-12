import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="social">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div class="text">
        <p>Copyright 2022 By Pikachu</p>
      </div>
    </footer>
  );
}
export default Footer;
