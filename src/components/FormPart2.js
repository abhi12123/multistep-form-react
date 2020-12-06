import React from 'react';

const FormPart2 = (props) => {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    const prev = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    return (
        <div class='form-part-2'>
            <h1>Form Part 2</h1>
            <label>occupation</label>
            <input value={props.occupation} onChange={(e)=>props.setOccupation(e.target.value)}></input>
            <label>City</label>
            <input value={props.city} onChange={(e)=>props.setCity(e.target.value)}></input>
            <label>Bio</label>
            <input value={props.bio} onChange={(e)=>props.setBio(e.target.value)}></input>
            <div>
                <button onClick={next}>Next</button>
                <button onClick={prev}>Back</button>
            </div>
        </div>
    )
}

export default FormPart2;