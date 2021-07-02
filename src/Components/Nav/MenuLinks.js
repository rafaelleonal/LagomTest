import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

function MenuLinks() {
  return (
    <nav className="nav list__hamburger">
      <ul className="list-unstyled">
        <li className="my-3 px-3">
          <a className="text-white text-decoration-none" href="Lagggom.com">
            <img src="../assets/Home.png" className="img-fluid" alt="Home"/>
          </a>
        </li>
        <li className="my-3 px-3">
          <a className="text-white text-decoration-none" href="Lagggom.com">About</a>
        </li>
        <li className="my-3 px-3">
          <a className="text-white text-decoration-none" href="Lagggom.com">Work</a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuLinks;