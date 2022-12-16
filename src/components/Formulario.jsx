import { Container, Form, Button } from "react-bootstrap";

const Formulario = () => {
    return (
        <div>
            <Container className="my-5">
                <Form className="max-width">
                    <Form.Group
                        className='mb-3'
                    >
                        <Form.Label>Dirección de Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='juan@correo.com'
                        />
                    </Form.Group>
                    <Form.Group
                        className='mb-3'
                    >
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as='textarea' rows={3} placeholder='Escribe aquí el texto' />
                    </Form.Group>
                    
                    <Button variant="danger">Enviar</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Formulario;
