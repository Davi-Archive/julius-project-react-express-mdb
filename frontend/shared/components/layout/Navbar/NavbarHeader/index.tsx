import Nav from "react-bootstrap/Nav";

function NavbarHeader() {
  return (
    <>
      <hr className="navbarHeaderLine" />
      <Nav
        className="navbarHeaderContainer"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr className="navbarHeaderLine" />
    </>
  );
}

export default NavbarHeader;
