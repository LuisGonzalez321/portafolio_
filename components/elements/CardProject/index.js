import React, {useState, useEffect} from "react";

const index = ({ item }) => {

    const { name, html_url } = item;

    return (
        <div className='box mx-2'>
            <h2>{name}</h2>
            <a href={html_url} target='_blank' >{html_url}</a>
        </div>
    )
}

export default index;