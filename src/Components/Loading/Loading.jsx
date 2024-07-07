import TVLight from "../../assets/TVLight.gif";
import TVDark from "../../assets/TVDark.gif";

export default function Loading() {
    return (
        <>
            <section className="flex bg-primary-bg-card1 fixed top-0 right-0 bottom-0 left-0 justify-center z-50 items-center">
                <img
                    src={
                        localStorage.getItem("them") == "light"
                            ? TVLight
                            : TVDark
                    }
                />
            </section>
        </>
    );
}
