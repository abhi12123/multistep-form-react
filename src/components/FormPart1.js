import React from 'react';

const FormPart1 = (props) => {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    return (
        <div class='form-part-1'>
            <h1>Form Part 1</h1>
            <label>First name</label>
            <input value={props.firstName} onChange={(e)=>props.setFirstName(e.target.value)}></input>
            <label>Last name</label>
            <input value={props.lastName} onChange={(e)=>props.setLastName(e.target.value)}></input>
            <label>email</label>
            <input value={props.email} onChange={(e)=>props.setEmail(e.target.value)}></input>
            <button onClick={next} >Next</button>
        </div>
    )
}

export default FormPart1;