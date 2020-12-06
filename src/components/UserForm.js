import React,{useState} from 'react';
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
    const [step,setStep] = useState(1);
    // const [values,setValues] = useState({firstName : '',lastName : '',email : '',occupation: '',city: '', bio: ''})
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');
    const nextStep = () => {
        setStep(step+1);
    }
    const prevStep = () => {
        setStep(step-1);
    }

    switch(step){
        case 1: return <FormPart1 nextStep={nextStep} setFirstName={setFirstName} firstName={firstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail}/>;
        case 2: return <FormPart2 nextStep={nextStep} prevStep={prevStep} occupation={occupation} setOccupation={setOccupation} city={city} setCity={setCity} bio={bio} setBio={setBio}/>;
        case 3: return <Confirm nextStep={nextStep} prevStep={prevStep} firstName={firstName} lastName={lastName} email={email} occupation={occupation} city={city} bio={bio}/>;
        case 4: return <Success/>;
    }
}

export default UserForm;