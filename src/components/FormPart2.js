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
        <div className='form-part-2'>
            <h1>Form Part 2</h1>
            <label>occupation</label>
            <input value={props.values.occupation} onChange={(e)=>props.setValues({...props.values,occupation : e.target.value})}></input>
            <label>City</label>
            <input value={props.values.city} onChange={(e)=>props.setValues({...props.values,city : e.target.value})}></input>
            <label>Bio</label>
            <input value={props.values.bio} onChange={(e)=>props.setValues({...props.values,bio : e.target.value})}></input>
            <div>
                <button onClick={next}>Next</button>
                <button onClick={prev}>Back</button>
            </div>
        </div>
    )
}

export default FormPart2;