import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import { useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesTrending } from "../../app/trending.slice";

export default function Home() {
    const dispatch = useDispatch();

    const { allMoviesTrendingData, allMoviesTrendingPending, isError } =
        useSelector((store) => {
            return store.trendingReducer;
        });

    useEffect(() => {
        dispatch(getAllMoviesTrending());
    }, []);

    if (allMoviesTrendingPending) {
        return <Loading />;
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section>
                <header className={`${styles.homeHeader} h-[500px]`}>
                    <Container className="pt-[60px]  lg:pt-[70px] h-full">
                        <Row className="h-full">
                            <Col className=" flex flex-col gap-8 justify-center">
                                <p
                                    style={{ lineHeight: "1.1" }}
                                    className="text-[32px] font-medium text-white flex flex-col"
                                >
                                    <span className="font-bold text-[48px]">
                                        Welcome.
                                    </span>
                                    <span className="ml-1">
                                        Millions of movies, TV shows and people
                                        to discover. Explore now
                                    </span>
                                </p>
                                <div>
                                    <input
                                        type="search"
                                        placeholder="Search for a movie, tv show, person...."
                                        className="w-full py-[10px] rounded-3xl pl-6 placeholder:text-sm focus:outline-none"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </header>
                {isError ? (
                    <p className="text-white bg-red-600 text-xl text-center p-8">
                        {isError ? isError : ""}
                    </p>
                ) : (
                    ""
                )}
            </section>
        </>
    );
}
