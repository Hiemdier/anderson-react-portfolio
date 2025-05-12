import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import Home from './pages/home';
import Work from './pages/work';
import Contact from './pages/contact-form';
import Resume from './pages/information';
import Footer from './components/footer'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    useEffect(() => {
        document.title = "Shane Anderson Portfolio";
    }, []);
    return (
        <>
            <div id="root">
                <Navbar>
                    <Container>
                        <Navbar.Brand>Shane Anderson</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/work">Work</Nav.Link>
                                <Nav.Link as={Link} to="/contact-form">Contact-Form</Nav.Link>
                                <Nav.Link as={Link} to="/information">Resume </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="main-content">
                    <Container className="mt-4">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/work" element={<Work />} />
                            <Route path="/contact-form" element={<Contact />} />
                            <Route path="/information" element={<Resume />} />
                        </Routes>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;