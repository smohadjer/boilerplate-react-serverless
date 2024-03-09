import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import './home.css';

interface Item {
 id: string;
 name: string;
}

interface Cache {
    data?: [];
    dbData?: [];
}

const cache: Cache = {};

export default function Home() {
    const [data, setData] = useState([]);
    const [dbData, setDbData] = useState([]);

    useEffect(() => {
        if (cache.data) {
            setData(cache.data);
        } else {
            fetch('/api/json-server')
            .then(res => res.json())
            .then(json => {
                setData(json);
                cache.data = json;
            });
        }

        if (cache.dbData) {
            setDbData(cache.dbData);
        } else {
            fetch('/api/index')
            .then(res => res.json())
            .then(json => {
                setDbData(json);
                cache.dbData = json;
            });
        }
    }, []);

    const getList = (data) => {
        return (
            <ul className="items">
            {
                data.map((item: Item) => {
                    return <li key={item.id}>{item.id} {item.name}</li>
                })
            }
            </ul>
        )
    }

    return (
        <>
            <h1>Boilerplate for building SPAs with React and Vercel's serverless</h1>
            <p><Link to="/contacts">Link to Contacts</Link></p>
            <div className="flex">
                <div>
                    <h2>Fruits from static JSON file</h2>
                    {data.length ? getList(data) : 'Loading...'}
                </div>
                <div>
                    <h2>Fruits from MongoDB database</h2>
                    {dbData.length ? getList(dbData) : 'Loading...'}
                </div>
            </div>
        </>
    )
}
