import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";

function Footer(){
    return (
      <>
        <Container fluid>
          <Row>
            <Col md={12}>
              <div className={`${style.content} text-center `}>
                <h1 className="fw-bold">Enjoy Your time</h1>
                <p>Share Your Best experience with our product here!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }


export default Footer;
