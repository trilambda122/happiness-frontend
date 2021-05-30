import React from 'react'

export default function HappyCard(props) {
    console.log('THIS is a Prop ',props)
    return (
        <div>
            <p>CARD 1 {props.happyRecord.kindnessNote}</p>
        </div>
    )
}

