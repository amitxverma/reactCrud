import React from 'react'

export const increaseNumber = (number) => {
    return (output) => {
        output({
            type: "increase",
            payload: number
        })
    }
}

export const decreaseNumber = (number) => {
    return (output) => {
        output({
            type: "decrease",
            payload: number
        })
    }
}
