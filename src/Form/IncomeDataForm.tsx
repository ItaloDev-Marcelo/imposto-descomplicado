import IncomeDataFormStep1 from './IncomeForm/IncomeFormStep1'
import IncomeDataFormStep2 from './IncomeForm/IncomeFormStep2'
import IncomeDataFormStep3 from './IncomeForm/IncomeFormStep3'
import CommunStepContainer from '../utils/CommumStepContainer'
import { useState } from 'react'

const IncomeDataForm = () => {

    const [steps, setSteps] = useState(1)
  
  
    const next = () => setSteps(steps + 1)
  

  return (
    <div className='flex flex-col items-center gap-2 p-2 my-5'>
       <ul className="steps">
        <li  data-content={steps >= 1  ? '✓' : 'X' } className={`step ${steps > 0 ? 'step-success' : 'step' } "`}>Step 1</li>
        <li  data-content={steps >= 2 ? '✓' : 'X' } className={`step ${steps >= 2 ? 'step-success' : 'step' } "`}>Step 2</li>
        <li  data-content={steps >= 3 ? '✓' : 'X' } className={`step ${steps >= 3 ? 'step-success' : 'step' } "`}>Step 3</li>
    
      </ul>
    
         {
          steps == 1 ?
          <CommunStepContainer>
        <IncomeDataFormStep1 next={next} />
         </CommunStepContainer> : steps == 2 ?
          <CommunStepContainer>
        <IncomeDataFormStep2 next={next} />
         </CommunStepContainer> : steps == 3 ?
          <CommunStepContainer>
        <IncomeDataFormStep3 next={next} />
         </CommunStepContainer> : null
         }
    </div>
  )
}

export default IncomeDataForm