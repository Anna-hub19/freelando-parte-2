import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import cliente from "../cadastro/assets/cliente.png"
import freela from "../cadastro/assets/freela.png"
import { Link } from "../../componentes/Link/Link"
import { Link as RouterLink } from 'react-router-dom'



const SelecaoCliente = () => {

 return(
   <div style={{ textAlign: 'center' }}>
    <Tipografia variante="h1" componente="h1">
            Crie seu cadastro
    </Tipografia>
    <Tipografia variante="h3" componente="h2">
           Como podemos te ajudar?
    </Tipografia>
    <Row>
        <Col md={6} sm={12}>
            <RouterLink to="interesses">
            <img src={cliente} alt="cliente"/>
            <Tipografia variante="body" componente="body">
                    Sou cliente e preciso de um freela!
                </Tipografia>
            </RouterLink>
        </Col>
        <Col md={6} sm={12}>
            <img src={freela} alt="freelancer"/>
            <Tipografia variante="body" componente="body">
                    Sou um freela e preciso de clientes!
                </Tipografia>
        </Col>
    </Row>
    <div >
            <Tipografia variante="body2" componente="body2">
                Já tem conta?
            </Tipografia>
            <p>
                <Link variante="secundaria">Faça login!</Link>
            </p>
        </div>
        </div>
 )
}

export default SelecaoCliente;