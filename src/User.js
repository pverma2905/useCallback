import React, { memo } from 'react'

function User({ props }) {
    console.log("child")
    return (
        <div>
            <h1>Child Component</h1>
            {props}
        </div>
    )
}

export default memo(User);
