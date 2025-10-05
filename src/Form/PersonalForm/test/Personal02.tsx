import Input from "../../../components/Input"
import RadioInput from "../../../components/RadioInput"
import { personalDataForm1, personalDataForm1Radio } from '../Data/DataSteps'



const Personal02 = () => {
    return (
        <form>
           <div className="mb-2">
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
                <button type="button"  className="btn btn-info w-[150px] ">Next</button>
            </div>
        </form>
    )
}

export default Personal02 