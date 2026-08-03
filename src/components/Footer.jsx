import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';

const Footer = () => {
  const { t, profile } = useLanguage();

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {profile.shortName}. {t.footer.rights}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
