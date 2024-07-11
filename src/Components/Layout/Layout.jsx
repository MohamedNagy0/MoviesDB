import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import MyNav from "../MyNav/MyNav";
import { Offline, Online } from "react-detect-offline";
import MyOffline from "../MyOffline/MyOffline";

export default function Layout() {
    return (
        <>
            <MyNav />
            <Online>
                <Outlet />
            </Online>
            <Offline>
                <div className="container relative pt-[80px] pb-[320px] max-md:pb-[380px]">
                    <MyOffline />
                </div>
            </Offline>
            <Footer />
        </>
    );
}
