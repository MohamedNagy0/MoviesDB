import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section>
                <header className={`${styles.homeHeader} min-h-[500px]`}>
                    <Container className="pt-[60px] lg:pt-[70px]">
                        <Row>
                            <Col></Col>
                        </Row>
                    </Container>
                </header>
            </section>
        </>
    );
}
