import React from 'react'

export default function Note(props) {
    return (
        <div className="note">
            <p>{props.title}</p>
            <div>
            <h1>{props.content}</h1>
            </div>
        </div>
    )
}
