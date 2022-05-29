import React from 'react';

export function FeatureButton(props) {
    return <button onClick={props.onClick} className="pure-js-button">{ props.title }</button>;
} 