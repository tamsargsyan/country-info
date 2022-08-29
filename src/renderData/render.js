import React from "react"
import "./render.css"
import { useState, useEffect } from "react"
import axios from "axios"

const RenderData = (props) => {

    const [flag, setFlag] = useState("")
    const [name, setName] = useState("")
    const [capital, setCapital] = useState("")
    const [population, setPopulation] = useState("")
    const [language, setLanguage] = useState("")
    useEffect(() => {
        axios.get(`https://restcountries.com/v2/name/${props.data}`).then(resp => {
            setFlag(resp.data[0].flag)
            setName(resp.data[0].name)
            setCapital(resp.data[0].capital)
            setPopulation((Number(resp.data[0].population) / 1000000).toFixed(1))
            setLanguage(resp.data[0].languages[0].name)
    }).catch((err) => console.log(err))
    }, [])

    return (
        <div className="container">
            <div className="wrapper">
                <div className="flag">
                    <img src={flag} /> 
                </div>
                <div className="infos">
                    <h2 className="info">📍 {name}</h2>
                    <h3 className="info">🏙️ {capital}</h3>
                    <h3 className="info">👪 {population} million</h3>
                    <h3 className="info">🗣️ {language}</h3>
                </div>
            </div>
        </div>
    )
}

export default RenderData