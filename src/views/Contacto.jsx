import { Container } from "react-bootstrap";
import Formulario from "../components/Formulario";

const Contacto = () => {
    return (
        <div>
            <Container className="my-3">
                <h2>Cuéntanos, ¿en qué podemos ayudarte?</h2>
                <Formulario />
            </Container>
        </div>
    );
};

export default Contacto;
