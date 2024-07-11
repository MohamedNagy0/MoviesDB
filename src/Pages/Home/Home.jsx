import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTrending } from "../../app/trending.slice";
import Loading from "../../Components/Loading/Loading";

export default function Home() {
    const dispatch = useDispatch();

    const { allTrendingData, allTrendingIsPending, isError, error } =
        useSelector((store) => {
            return store.trendingSlice;
        });

    useEffect(() => {
        dispatch(getAllTrending());
    }, []);

    if (allTrendingIsPending) {
        return <Loading />;
    }
    console.log(allTrendingData);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            {!isError ? (
                <section>
                    <header className={`${styles.homeHeader} h-[500px]`}>
                        <div className="container handelPaddingTop flexCenter h-full">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <div className="flexCenter flex-col gap-8 ">
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
                                        <div className="w-full">
                                            <input
                                                type="search"
                                                placeholder="Search for a movie, tv show, person...."
                                                className="w-full py-[10px] rounded-3xl pl-6 placeholder:text-sm focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </section>
            ) : (
                <div className="flexCenter min-h-screen bg-black ">
                    <p className="text-xl text-white rounded-full bg-red-600 p-8 text-center">
                        {isError ? error : ""}
                    </p>
                </div>
            )}
        </>
    );
}
