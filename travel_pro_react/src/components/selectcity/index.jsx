import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectCity(props) {
    let { cityName } = props
    return (
        <>
            <Link
                to="/city">
                <span>{cityName ? cityName : '城市'} </span>
            </Link>
        </>
    )
}
