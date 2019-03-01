import ReactDOM from "react-dom"
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import KandyKorner from "./components/KandyKorner"

import './index.css'

ReactDOM.render(
    <Router>
        <KandyKorner />
    </Router>
    , document.getElementById('root'))

document.getElementById("coolButton").addEventListener("click", event => {
    new Audio('https://dl.dropbox.com/s/bjys9xln30r5kn1/motley.mp3?dl=0').play()
    document.body.classList.toggle("fire")
    document.getElementById("kandyKorner").classList.toggle("sunglasses")
    document.getElementById("title").classList.toggle("spin")
    document.getElementById("fall").classList.toggle("fallingLeaves")
})