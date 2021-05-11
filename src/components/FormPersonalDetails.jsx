const FormPersonalDetails = ({formData, nextStep, prevStep, handleInputChange, onBlur, errors}) => {
    return (
        <div className="FormPersonalDetails">
            <h1>FormPersonalDetails</h1>
            <form>
                <div className="formEntry">
                    <label htmlFor="occupation">Occupation:</label>
                    <input id="occupation"
                           value={formData.occupation} 
                           onChange={handleInputChange("occupation")}
                           onBlur={onBlur}>
                    </input>
                    <span>
                        {formData.touched.occupation && errors.occupation}
                    </span>
                </div>

                <div className="formEntry">
                    <label htmlFor="city">city:</label>
                    <input id="city"
                           value={formData.city} 
                           onChange={handleInputChange("city")}
                           onBlur={onBlur}>
                    </input>
                    <span>
                        {formData.touched.city && errors.city}
                    </span>
                </div>

                <div className="formEntry">
                    <label htmlFor="bio">Bio:</label>
                    <input id="bio"
                           value={formData.bio} 
                           onChange={handleInputChange("bio")}
                           onBlur={onBlur}>
                    </input>
                    <span>
                        {formData.touched.bio && errors.bio}
                    </span>
                </div>
            </form>
            <div className="buttonContainer ">
                <button onClick={() => prevStep()}>
                    Go back
                </button>
                <button className={((errors.occupation || errors.city || errors.bio) ? "disabled" : "")}
                        onClick={() => nextStep()} 
                        disabled={errors.occupation || errors.city || errors.bio}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default FormPersonalDetails;