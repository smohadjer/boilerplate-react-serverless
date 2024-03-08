import React from "react";
import { useParams } from 'react-router-dom';

export default function Test() {
    const { id } = useParams();

    return (
        <p>page with id: {id}</p>
    )
}
