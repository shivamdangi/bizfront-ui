export const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <p>© {new Date().getFullYear()} LeanFront Studio</p>
      <nav aria-label="Social links">
        <a href="#" aria-label="Visit LeanFront on X">X</a>
        <a href="#" aria-label="Visit LeanFront on LinkedIn">LinkedIn</a>
        <a href="#" aria-label="Visit LeanFront on Behance">Behance</a>
      </nav>
    </div>
  </footer>
);
