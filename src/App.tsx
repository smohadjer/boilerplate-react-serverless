import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import Contact from "./pages/contact";
import Test from "./pages/test";
import NotFound from "./pages/notfound";
import Layout from "./pages/layout";
import './app.css';

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contacts">
                    <Route index element={<Contacts />} />
                    <Route path=":id" element={<Test />} />
                    <Route path="saeid" element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
