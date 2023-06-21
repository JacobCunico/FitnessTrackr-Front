import React, { Fragment } from "react";

function Routines({ routines }) {

    return (
    <>
    {
        routines && routines.map((routine) => {
            return (
                <Fragment key={routine._id}>
                {
                (
                        <>
                        <p style={{padding: "1px 40px", fontSize: "20px", flexFlow: "row wrap", border: "solid black" }}>
                            <span style={{ fontWeight: "bold"}}> Title:</span> {routine.name}
                            <span style={{ fontWeight: "bold"}}> Description:</span> {routine.description}</p>
                        </>
                    )

                }
                </Fragment>
            )
        })  
    }
    </>
    );
}

export default Routines