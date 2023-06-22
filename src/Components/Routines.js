import React from "react";


function Routines({ routines }) {
console.log("LOG FROM ROUTINE", routines);
    return (
        <>
        {
            <p>
                <p>HELLO WORLD</p>
                {
            routines.map((routine) => {
                return(
                        <p>
                        <span>hello: {routine.name}</span>
                        </p>
                )
            })
        }
            </p>
        }
        </>
    )
};

export default Routines