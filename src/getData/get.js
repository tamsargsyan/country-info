import axios from "axios";
import React from "react";
import { useState } from "react";
import RenderData from "../renderData/render.js";
import "./get.css"

const GetData = () => {
    const [value, setValue] = useState("")
    const [val, setVal] = useState("")
    return (
        <div className="main">
            <form>
                <input type="text" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={(e) => {
                    e.preventDefault()
                    setVal(value)
                }}>Click</button>
            </form>
            {val && <RenderData data = {val}/>}

        </div>
    )
}

export default GetData