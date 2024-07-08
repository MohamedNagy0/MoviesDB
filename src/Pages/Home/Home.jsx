import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState(null);

    const getTrendingMovies = () => {
        const options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/trending/all/day",
            params: { language: "en-US" },
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGU1MThmNzIxMTYzYTU2ZDVkNjg5ZTA2MTM2ZmMwMyIsIm5iZiI6MTcyMDM1NjQxNC42OTE2MTgsInN1YiI6IjY2ODU5ZTJjYTlkNWMyZTkyZjgxOTQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VrhmFM7KuZvOkWfj74GG8bIf-AU_BbQMpU8p6mfqW_U",
            },
        };

        axios
            .request(options)
            .then((response) => {
                setTrendingMovies(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getTrendingMovies();
    }, []);
    console.log(trendingMovies);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {trendingMovies ? (
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
                                            Millions of movies, TV shows and
                                            people to discover. Explore now
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
                </section>
            ) : (
                <Loading />
            )}
        </>
    );
}
