import React from 'react';

const FormPart1 = (props) => {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    return (
        <div className='form-part-1'>
            <h1>Form Part 1</h1>
            <label>First name</label>
            <input value={props.values.firstName} onChange={(e)=>props.setValues({...props.values,firstName: e.target.value})}></input>
            <label>Last name</label>
            <input value={props.values.lastName} onChange={(e)=>props.setValues({...props.values,lastName: e.target.value})}></input>
            <label>email</label>
            <input value={props.values.email} onChange={(e)=>props.setValues({...props.values,email: e.target.value})}></input>
            <button onClick={next} >Next</button>
        </div>
    )
}

export default FormPart1;