const Confirm = ({formData, nextStep, prevStep}) => {
    return (
        <div className="confirm">
            <h1>Confirmation page</h1>
            <ul>
                <li>
                    <div>firstName:</div> {formData.firstName}
                </li>
                <li>
                    <div>lastName:</div> {formData.lastName}
                </li>
                <li>
                    <div>email:</div> {formData.email}
                </li>
                <li>
                    <div>occupation:</div> {formData.occupation}
                </li>
                <li>
                    <div>city:</div> {formData.city}
                </li>
                <li>
                    <div>bio:</div> {formData.bio}
                </li>
            </ul>
            <div className="buttonContainer">
                <button onClick={() => prevStep()}>Go back</button>
                <button onClick={() => nextStep()}>Continue</button>
            </div>
        </div>
    )
}

export default Confirm;