import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MenuComponent() {
    return (
        <div>
            <h1>Hola</h1>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Uluru Design</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Hooks" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Use State</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Use Ref</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Aspectos Generales" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Carruseles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Formularios</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Apis</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Modal</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MenuComponent;