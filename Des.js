import React from 'react'

export default function Desc(props) {
return (
    <div>
        <h3>{props.acıklama}</h3>
    </div>
)
}

// {props.acıklama[0].toUpperCase() + props.acıklama.substring(1)} = when you add this between "h3" tag .it covers the description's first latter to upper case.


