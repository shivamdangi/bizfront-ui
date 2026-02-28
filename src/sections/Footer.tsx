const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <p>© {new Date().getFullYear()} LeanFront Studio</p>
      <nav aria-label="social links">
        <a href="#" aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href="#" aria-label="X">
          X
        </a>
        <a href="#" aria-label="Dribbble">
          Dribbble
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
