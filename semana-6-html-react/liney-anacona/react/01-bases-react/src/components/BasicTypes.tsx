import React from 'react'

export const BasicTypes = () => {
    return (
        <div>BasicTypes</div>
    )
}

export const BasicTypes1 = () => {
    const name: string = "liney";
    const age: number = 28;
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
