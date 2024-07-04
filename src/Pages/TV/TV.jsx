import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function TV() {
    return (
        <>
            <Helmet>
                <title>TV</title>
            </Helmet>
            <section>
                <Container className="pt-[60px] lg:pt-[70px]">
                    <Row>
                        <Col>TV</Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
