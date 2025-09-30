import Input from "../../components/Input"
import RadioInput from "../../components/RadioInput"
import type { nextStepProps } from "../../types/form.types/nextStep.Props"
import { personalDataForm1, personalDataForm1Radio } from '../PersonalForm/Data/DataSteps'



const PersonalDataFormStep1 = ({next}:nextStepProps) => {
    return (
        <form>
           <div className="mb-2">
             <Input key={personalDataForm1[0].id} label={personalDataForm1[0].label}
                placeholder={personalDataForm1[0].placeholder} inputType={personalDataForm1[0].inputType} />
            <Input key={personalDataForm1[1].id} label={personalDataForm1[1].label}
                placeholder={personalDataForm1[1].placeholder} inputType={personalDataForm1[1].inputType} />
            <Input key={personalDataForm1[2].id} label={personalDataForm1[2].label}
                placeholder={personalDataForm1[2].placeholder} inputType={personalDataForm1[2].inputType} />
            <Input key={personalDataForm1[3].id} label={personalDataForm1[3].label}
                placeholder={personalDataForm1[3].placeholder} inputType={personalDataForm1[3].inputType} />
            <Input key={personalDataForm1[4].id} label={personalDataForm1[4].label}
                placeholder={personalDataForm1[4].placeholder} inputType={personalDataForm1[4].inputType} />
            <fieldset className='fieldset'>
                <legend className='fieldset-legend'>Estado civil</legend>
                 {
                  personalDataForm1Radio.map((radio) => 
                     <RadioInput key={radio.id} name={radio.name} title={radio.title} />
                 )
                 }
            </fieldset>
           </div>
            <div className='my-4'>
                <button type="button" onClick={next} className="btn btn-accent w-[150px] ">Next</button>
            </div>
        </form>
    )
}

export default PersonalDataFormStep1 