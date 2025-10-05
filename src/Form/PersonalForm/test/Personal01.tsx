import Input from "../../../components/Input"
// import type { nextStepProps } from "../../../types/form.types/nextStep.Props"
import { personalDataForm1 } from '../../PersonalForm/Data/DataSteps'



const Personal01 = () => {
    return (
        <form>
           <div className="mb-2">
             <Input key={personalDataForm1[0].id} label={personalDataForm1[0].label}
                placeholder={personalDataForm1[0].placeholder} inputType={personalDataForm1[0].inputType} />
            <Input key={personalDataForm1[1].id} label={personalDataForm1[1].label}
                placeholder={personalDataForm1[1].placeholder} inputType={personalDataForm1[1].inputType} />
            <Input key={personalDataForm1[2].id} label={personalDataForm1[2].label}
                placeholder={personalDataForm1[2].placeholder} inputType={personalDataForm1[2].inputType} />
           </div>
            <div className='my-4'>
                <button type="button" className="btn btn-info w-[150px] ">Next</button>
            </div>
        </form>
    )
}

export default Personal01 