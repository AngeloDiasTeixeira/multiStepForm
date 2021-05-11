const FormUserDetails = ({formData, nextStep, handleInputChange, onBlur, errors}) => {
    return (
        <div className="FormUserDetails">
            <h1>FormUserDetails</h1>
            <form>
                <div className="formEntry">
                    <label htmlFor="firstName">FirstName:</label>
                    <input id="firstName"
                           value={formData.firstName} 
                           onChange={handleInputChange("firstName")}
                           onBlur={onBlur}>
                    </input>
                    <span>
                        {formData.touched.firstName && errors.firstName}
                    </span>
                </div>

                <div className="formEntry">
                    <label htmlFor="lastName">LastName:</label>
                    <input id="lastName"
                           value={formData.lastName} 
                           onChange={handleInputChange("lastName")}
                           onBlur={onBlur}>
                    </input>
                    <span>
                        {formData.touched.lastName && errors.lastName}
                    </span>
                </div>

                <div className="formEntry">
                    <label htmlFor="email">Email:</label>
                    <input id="email"
                           value={formData.email} 
                           onChange={handleInputChange("email")}
                           onBlur={onBlur}>
                    </input>
                    <span>
                        {formData.touched.email && errors.email}
                    </span>
                </div>
            </form>
            <div className={"buttonContainer " + ((errors.firstName || errors.lastName || errors.email) ? "disabled" : "")}>
                <button className={((errors.firstName || errors.lastName || errors.email) ? "disabled" : "")}
                        onClick={() => nextStep()} 
                        disabled={errors.firstName || errors.lastName || errors.email}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default FormUserDetails;