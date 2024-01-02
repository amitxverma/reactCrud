import React from 'react'

const managenumber = (state = 0, action) => {
    if (action.type == "increase") {
        return state + action.payload;
    }
    else if (action.type == "decrease") {
        return state + action.payload;
    }
    else {
        return state;
    }
}

export default managenumber
