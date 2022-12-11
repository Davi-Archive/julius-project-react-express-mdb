import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface INavbarItem {
  link: string;
  text: string;
}

interface INavbar {
  expand: string | boolean;
  fixed?: "top" | "bottom";
  list?: Array<INavbarItem>;
}

const NavbarTop = ({ expand, fixed, list }: INavbar) => {
  const getNavbarListArray = () => {
    if (!list) {
      return [];
    }
    return list;
  };

  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand={expand}
      fixed={fixed}
      className="navbarTopContainer"
    >
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {getNavbarListArray().map((list: any, index: any) => (
              <Nav.Link href={list.link} key={index}>
                {list.text}
              </Nav.Link>
            ))}

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
