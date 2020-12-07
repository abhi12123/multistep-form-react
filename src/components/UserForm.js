import React,{useState} from 'react';
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
    const [step,setStep] = useState(1);
    const [values,setValues] = useState({firstName : '',lastName : '',email : '',occupation: '',city: '', bio: ''})
    const nextStep = () => {
        setStep(step+1);
    }
    const prevStep = () => {
        setStep(step-1);
    }

    switch(step){
        case 1: return <FormPart1 nextStep={nextStep} setValues={setValues} values={values} />;
        case 2: return <FormPart2 nextStep={nextStep} prevStep={prevStep} setValues={setValues} values={values} />;
        case 3: return <Confirm nextStep={nextStep} prevStep={prevStep} setValues={setValues} values={values} />;
        case 4: return <Success/>;
        default : return true;
    }
}

export default UserForm;