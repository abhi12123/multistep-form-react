import React from 'react';

const Confirm = (props) => {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    const prev = (e) => {
        e.preventDefault();
        props.prevStep();
    }
    return (
        <div className='confirm'>
            <h1>Confirm</h1>
            <ul>
                <li>
                    <p>First Name : {props.values.firstName}</p>
                </li>
                <li>
                    <p>Last Name : {props.values.lastName}</p>
                </li>
                <li>
                    <p>Email : {props.values.email}</p>
                </li>
                <li>
                    <p>Occupation : {props.values.occupation}</p>
                </li>
                <li>
                    <p>City : {props.values.city}</p>
                </li>
                <li>
                    <p>Bio : {props.values.bio}</p>
                </li>
            </ul>
            <div>
                <button onClick={next}>Next</button>
                <button onClick={prev}>Back</button>
            </div>
        </div>
    )
}

export default Confirm;