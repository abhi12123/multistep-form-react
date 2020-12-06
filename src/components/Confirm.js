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
        <div class='confirm'>
            <h1>Confirm</h1>
            <ul>
                <li>
                    <p>First Name : {props.firstName}</p>
                </li>
                <li>
                    <p>Last Name : {props.lastName}</p>
                </li>
                <li>
                    <p>Email : {props.email}</p>
                </li>
                <li>
                    <p>Occupation : {props.occupation}</p>
                </li>
                <li>
                    <p>City : {props.city}</p>
                </li>
                <li>
                    <p>Bio : {props.bio}</p>
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