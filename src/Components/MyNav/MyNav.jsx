import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMenu3Line } from "react-icons/ri";

export default function MyNav() {
    const [openThem, setOpenThem] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    localStorage.getItem("them")
        ? document.body.classList.add(localStorage.getItem("them"))
        : document.body.classList.add("light");

    return (
        <>
            <Navbar
                expand="lg"
                className="bg-primary-bg-card1 text-primary-color2 border-b border-primary-border pl-3 lg:py-4 fixed top-0 z-50 w-full"
            >
                <Container>
                    <Link
                        className="text-2xl font-bold flex items-center gap-1"
                        to="/"
                    >
                        <span>
                            Movies
                            <span className="text-primary-active">DB</span>
                        </span>
                        <span>
                            <RiMovie2Fill size="2rem" />
                        </span>
                    </Link>

                    <div className="relative flex items-center max-lg:ms-auto lg:order-last">
                        {localStorage.getItem("them") == "dark" ? (
                            <span
                                onClick={() => {
                                    setOpenThem(!openThem);
                                }}
                                className="inline-block cursor-pointer hover:bg-slate-800 duration-300  p-[7px] rounded-lg"
                            >
                                <LuMoonStar size="1.3rem" />
                            </span>
                        ) : (
                            <span
                                onClick={() => {
                                    setOpenThem(!openThem);
                                }}
                                className="inline-block cursor-pointer hover:bg-slate-700 duration-300   p-[7px] rounded-lg"
                            >
                                <IoSunnyOutline size="1.3rem" />
                            </span>
                        )}

                        {openThem ? (
                            <ul className="absolute text-primary-color bottom-[-80px] right-1/2 py-2 translate-x-1/2 w-[100px] rounded-xl border border-primary-border bg-primary-bg flex flex-col justify-center items-center gap-2">
                                <li
                                    className="hover:bg-primary-hover cursor-pointer w-full flex items-center justify-center gap-2"
                                    onClick={() => {
                                        localStorage.setItem("them", "dark");
                                        document.body.classList.replace(
                                            "light",
                                            "dark"
                                        );
                                        setOpenThem(false);
                                    }}
                                >
                                    <span>
                                        <LuMoonStar />
                                    </span>
                                    <span>Dark</span>
                                </li>
                                <li
                                    className="hover:bg-primary-hover cursor-pointer w-full flex items-center justify-center gap-2"
                                    onClick={() => {
                                        localStorage.setItem("them", "light");
                                        document.body.classList.replace(
                                            "dark",
                                            "light"
                                        );
                                        setOpenThem(false);
                                    }}
                                >
                                    <span>
                                        <IoSunnyOutline />
                                    </span>
                                    <span>Light</span>
                                </li>
                            </ul>
                        ) : (
                            ""
                        )}
                    </div>

                    <Navbar.Toggle
                        onClick={handleShow}
                        aria-controls="basic-navbar-nav"
                        className="focus:shadow-none border-none active:scale-75 flex items-center justify-center text-primary-color"
                    >
                        <RiMenu3Line className="text-primary-color2 text-2xl" />
                    </Navbar.Toggle>

                    <Offcanvas
                        show={show}
                        onHide={handleClose}
                        responsive="lg"
                        className="bg-primary-bg-card1 text-primary-color2 lg:me-auto lg:ml-10"
                    >
                        <div className="flex justify-end px-3 py-2 lg:hidden mt-1">
                            <span
                                onClick={handleClose}
                                className="size-1 cursor-pointer p-[12px] rounded-full active:scale-75 border-[2px] border-primary-bg-card1 hover:border-primary-active flex justify-center items-center"
                            >
                                <i className="fa-solid fa-xmark text-md "></i>
                            </span>
                        </div>
                        <Offcanvas.Body>
                            <Nav className=" flex items-center gap-8 lg:ms-auto text-primary-color2">
                                <NavLink
                                    className={({ isActive }) =>
                                        ` active relative lg:after:h-1/2 lg:after:translate-y-1/2 lg:after:mr-5 lg:after:bg-slate-400 lg:after:w-[1px] lg:after:absolute lg:after:right-full ${
                                            isActive ? "before:w-full" : ""
                                        }`
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        `active relative ${
                                            isActive ? "before:w-full" : ""
                                        }`
                                    }
                                    to="tv"
                                >
                                    TV
                                </NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
