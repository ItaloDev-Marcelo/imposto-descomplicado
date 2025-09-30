import PersonalDataFormStep1 from "./PersonalForm/PersonalFormStep-1"
import PersonalDataFormStep2 from "./PersonalForm/PersonalFormStep-2"
import CommunStepContainer from '../utils/CommumStepContainer'
import { useState } from "react"
const PersonalDataForm = () => {

  const [steps, setSteps] = useState(0)


  const next = () => setSteps(steps + 1)


  return (
    <div className="flex flex-col items-center gap-2">
      <ul className="steps">
        <li  data-content={steps > 0  ? '✓' : 'X' } className={`step ${steps > 0 ? 'step-success' : 'step' } "`}>Step 1</li>
        <li  data-content={steps >= 2 ? '✓' : 'X' } className={`step ${steps >= 2 ? 'step-success' : 'step' } "`}>Step 2</li>
      </ul>
      {
        steps > 0 ?
        <CommunStepContainer>
         <PersonalDataFormStep1 next={next} />
      </CommunStepContainer>
      :
      <CommunStepContainer>
         <PersonalDataFormStep2 next={next} />
      </CommunStepContainer>
      }
    </div>
  )
}

export default PersonalDataForm