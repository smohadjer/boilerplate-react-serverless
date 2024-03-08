import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import './home.css';

interface Item {
 id: string;
 name: string;
}

interface Cache {
    data?: [];
}

const cache: Cache = {};

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (cache.data) {
            setData(cache.data);
        } else {
            fetch('/api/json-server')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json);
                cache.data = json;
            });
        }
    }, []);

    return (
        <>
            <h1>Boilerplate for building SPAs with React and Vercel's serverless API</h1>
            <p><Link to="/contacts">Link to Contacts</Link></p>
            <ul className="items">
            {
                data.map((item: Item) => {
                    return <li key={item.id}>{item.id} {item.name}</li>
                })
            }
            </ul>
        </>
    )
}
