import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container className="pt-[60px] lg:pt-[70px]">
                <Row>
                    <Col>Home</Col>
                </Row>
            </Container>
        </>
    );
}
