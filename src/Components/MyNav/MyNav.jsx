import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import { CiCloudMoon } from "react-icons/ci";

export default function MyNav() {
    const [openThem, setOpenThem] = useState(false);
    localStorage.getItem("them")
        ? document.body.classList.add(localStorage.getItem("them"))
        : document.body.classList.add("light");

    return (
        <>
            <Navbar
                expand="lg"
                className="bg-primary-bg-card1 text-primary-color2 border-b border-primary-border lg:py-4 fixed top-0  z-50 w-full"
            >
                <Container>
                    <Link
                        className="text-2xl font-bold flex items-center gap-1"
                        to="/"
                    >
                        <span>MoviesDB</span>
                        <span>
                            <RiMovie2Fill
                                size="2rem"
                                className="text-primary-active"
                            />
                        </span>
                    </Link>

                    <div className="relative max-lg:ms-auto lg:order-last lg:ml-10">
                        <CiCloudMoon
                            className="cursor-pointer"
                            onClick={() => {
                                setOpenThem(!openThem);
                            }}
                            size="1.6rem"
                        />
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
                        aria-controls="basic-navbar-nav"
                        className="focus:shadow-none border-none flex items-center justify-center text-primary-color"
                    >
                        <i className="fa-solid fa-bars text-2xl text-primary-color2"></i>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" flex items-center gap-3 lg:ms-auto text-primary-color2">
                            <NavLink
                                className={({ isActive }) =>
                                    ` active relative ${
                                        isActive ? "before:w-full" : ""
                                    }`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `active relative lg:after:h-1/2 lg:after:translate-y-1/2 lg:after:ml-5 lg:after:bg-slate-400 lg:after:w-[1px] lg:after:absolute lg:after:left-full ${
                                        isActive ? "before:w-full" : ""
                                    }`
                                }
                                to="tv"
                            >
                                TV
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
