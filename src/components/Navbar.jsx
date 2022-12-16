import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar className='bgNavbar' variant='dark'>
                <Container className='justify-content-between'>
                    <div>
                        <Link
                            to='/home'
                            className='text-white text-decoration-none'
                        >
                            <span className='icon'>🏠</span> Home
                        </Link>
                        <Link
                            to='/contacto'
                            className='text-white ms-5 text-decoration-none'
                        >
                            <span className='icon'>📧</span> Contacto
                        </Link>
                    </div>

                    <Navbar.Brand as={Link} to='/home'>
                        Happy Cake <span className='icon'>🍰</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
