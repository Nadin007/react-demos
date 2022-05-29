import React, { useEffect, useState } from "react";
import { FeatureButton } from "./button.jsx";
import { FeatureResult } from "./result.jsx";

export const CalculateResult = () => {
    let [current_number, setCurrentNumber] = useState(parseInt(localStorage.getItem('number') || 0));

    useEffect(() => {
        localStorage.setItem('number', current_number)
    }, [current_number]);

    return <>
        <div>
            <FeatureButton onClick = {() => { setCurrentNumber(Math.max(-100, current_number - 1)) }} title = 'MINUS' />
            <FeatureResult result = { current_number } />
            <FeatureButton onClick = {() => { setCurrentNumber(Math.min(100, current_number + 1)) }} title = 'PLUS' />
        </div>
        <div className="reset-button">
            <FeatureButton onClick = {() => {setCurrentNumber(0)}} title = 'RESET' />
        </div>
    </>
};
