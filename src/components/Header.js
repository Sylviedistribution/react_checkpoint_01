import { Navbar, Nav } from "react-bootstrap";

const Header = ({ firstname }) => {
  return (
    <Navbar bg="dark" variant="dark" className="shadow-sm px-4 py-3">
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center">
          <p className="text-white mb-0 me-3">{firstname || "Guest"}</p>
          <img
            src={ firstname ? "/avatar.png" : "https://cdn-icons-png.flaticon.com/512/847/847969.png" } 
            alt="avatar"
            width="50"
            height="50"
            className="rounded-circle border border-light"
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
