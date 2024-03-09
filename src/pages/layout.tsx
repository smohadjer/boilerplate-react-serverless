import React from "react";
import { Outlet } from "react-router-dom";
import Nav from './../components/Nav';
import './layout.css';

export default function Layout() {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>&copy; Saeid Mohadjer</footer>
    </>
  )
}
