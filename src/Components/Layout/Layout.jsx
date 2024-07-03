import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import MyNav from "../MyNav/MyNav";

export default function Layout() {
    return (
        <>
            <MyNav />
            <Outlet />
            <Footer />
        </>
    );
}
