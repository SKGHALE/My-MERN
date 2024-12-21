import React from 'react'

const cardTwo = (props) => {

    return (
        <>
            <div>
                <p> Name is inside the cardTwo {props.title}: {props.name}</p>
            </div>

            {/* {props.children} */}
        </>
    )
}

export default cardTwo
