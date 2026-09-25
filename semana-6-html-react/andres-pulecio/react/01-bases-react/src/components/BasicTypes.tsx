import React from 'react'

export const BasicTypes = () => {
    const name: string = "Juan Andres Pulecio";
    const age: number = 19;
    const isActive: boolean = true;
    return (
        <>
            <h3>Basic Types</h3>
            <ul>
                <li>Nombre: {name}</li>
                <li>Edad: {age}</li>
            </ul>
        </>
    )
}