import { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
    let [formData, setFormData] = useState({
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: "",
        touched: {}
    });

    const errors = getErrors();
    function getErrors() {
        const result = {};
        if(!formData.firstName) result.firstName = "First name is required";
        if(!formData.lastName) result.lastName = "Last name is required";
        if(!formData.email) result.email = "Email is required";
        if(!formData.occupation) result.occupation = "Occupation is required";
        if(!formData.city) result.city = "City is required";
        if(!formData.bio) result.bio = "Bio is required";
        return result;
    }

    const handleBlur = e => {
        setFormData(prevState => ({
            ...prevState,
            touched:{
                ...prevState.touched,
                [e.target.id]:true
            }
        }))
    }

    const nextStep = () => {
        let { step } = formData;
        setFormData({...formData,step: step + 1})
    }

    const prevStep = () => {
        let { step } = formData;
        setFormData({...formData,step: step - 1})
    }

    const handleInputChange = input => e => {
        setFormData(() => (
            {...formData, [input] : e.target.value})
        );
    }

    switch(formData.step){
        case 1 :
            return <FormUserDetails formData={formData}
                                    nextStep={nextStep}
                                    handleInputChange={handleInputChange}
                                    onBlur={handleBlur}
                                    errors={errors}/>;
        case 2 :
            return <FormPersonalDetails formData={formData}
                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                        handleInputChange={handleInputChange}
                                        onBlur={handleBlur}
                                        errors={errors}/>;
        case 3 :
            return <Confirm formData={formData}
                            nextStep={nextStep}
                            prevStep={prevStep}/>;
        case 4 :
            return <Success />;
    }
}

export default UserForm;