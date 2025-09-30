import PersonalDataFormStep1 from "./PersonalForm/PersonalFormStep-1"
import PersonalDataFormStep2 from "./PersonalForm/PersonalFormStep-2"

const PersonalDataForm = () => {
    return (
         <>
           <h2>dados Pessoas</h2>
           <PersonalDataFormStep1 />
           <PersonalDataFormStep2 />
         </>
    )
}

export default PersonalDataForm