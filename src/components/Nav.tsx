import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink style={
                    ({isActive}) => { return isActive ? { color: "red" } : {} }
                } to="/">Home</NavLink></li>
                {/* remove attribute end if you want that item to display with active sytle
                when any of its children is active */}
                <li><NavLink end to="/contacts">Contacts</NavLink>
                    <ul>
                        <li><NavLink to="/contacts/saeid">Contact subpage (nested route)</NavLink></li>
                        <li><NavLink to="/contacts/123">Contact with id</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

