import { Container, Card } from "react-bootstrap";
import happycake from "../../src/img/happy-cake.png";

const Home = () => {
    return (
        <>
            <Container
                className='d-flex flex-column align-items-center justify-content-center my-3'
                style={{ height: "80vh" }}
            >
                <Card style={{ maxWidth: "22rem" }}>
                    <Card.Body>
                        <Card.Title>
                            <h3>
                                Bienvenido a <br />
                                <span className='texto-resaltado'>
                                    <span className='icon'>🍰</span>Happy Cake
                                    <span className='icon'>🍰</span>
                                </span>
                            </h3>
                        </Card.Title>
                        <Card.Text>
                            <h5>El lugar de los pasteles felices</h5>
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant='bottom' src={happycake} />
                </Card>
            </Container>
        </>
    );
};

export default Home;
