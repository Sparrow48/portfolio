import classes from "./Footer.module.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.footer} data-subject={`#contact`}>
      <a href='mailto:abu.nasib@northsouth.edu' className={classes.footerLink}>
        abu.nasib@northsouth.edu
      </a>

      <ul className={classes.socialList}>
        <li className={classes.socialListItem}>
          <a
            rel='noopener noreferrer'
            href='https://www.facebook.com/abu.nasib.92'
            target='_blank'>
            <FaFacebook className={classes.icon} />
          </a>
        </li>
        <li className={classes.socialListItem}>
          <a
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/abu-nasib-87223618b/'
            target='_blank'>
            <FaLinkedin className={classes.icon} />
          </a>
        </li>
        <li className={classes.socialListItem}>
          <a
            rel='noopener noreferrer'
            href='https://github.com/Sparrow48'
            target='_blank'>
            <FaGithub className={classes.icon} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
