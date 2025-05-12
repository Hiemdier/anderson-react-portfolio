import { Link, useLocation } from 'react-router-dom';

// The useLocation hook returns the location object that represents the current URL.
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // Check to see if the currentPage is `/`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/work"
          // Check to see if the currentPage is 'work', and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact-form"
          // Check to see if the currentPage is `contact-form`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/contact-form' ? 'nav-link active' : 'nav-link'}
        >
          Contact Form
        </Link>
      </li>
    </ul>
  );
}

export default Nav;