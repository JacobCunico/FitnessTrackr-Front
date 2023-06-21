import React, { Fragment } from "react";

function Routines({ routines }) {

    return (
        <>
        {
            routines.map((routines) => {
                return(
                        <p>
                        <span>hello: {routines.name}</span>
                        </p>
            )
            })
        }
        </>
    )
}

export default Routines