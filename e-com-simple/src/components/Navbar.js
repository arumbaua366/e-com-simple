import { Button, Container, Navbar, Modal, Nav } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">We-Comm</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
