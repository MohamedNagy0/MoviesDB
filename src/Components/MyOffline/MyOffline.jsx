import { MdOutlineWifiOff } from "react-icons/md";

export default function MyOffline() {
    return (
        <>
            <section>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <MdOutlineWifiOff className="text-9xl text-primary-bg-card2" />
                    </div>
                    <footer className="text-center mt-4">
                        <h2 className="font-bold text-xl text-primary-bg-card3">
                            Whoopps!
                        </h2>
                        <p className="mt-4">
                            No internet connection found. <br /> Please check
                            your connection or try again
                        </p>
                        <h3 className="mt-6">
                            <button
                                onClick={() => {
                                    location.reload();
                                }}
                                className="border-2 px-8 font-bold  border-primary-bg-card3 py-1 text-primary-bg-card3 rounded-3xl "
                            >
                                Refresh
                            </button>
                        </h3>
                    </footer>
                </div>
            </section>
        </>
    );
}
