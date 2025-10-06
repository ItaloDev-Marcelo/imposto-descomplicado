import Input from "../../components/Input"
import {personalDataForm1Step2 } from './Data/DataSteps'
import type { nextStepProps } from "../../types/form.types/nextStep.Props"

const Personal03 = ({next}:nextStepProps) => {


  //  const dependenteDados = [
  //   {
  //     id: 11,
  //     label: 'Nome do dependente',
  //     inputType: 'text',
  //     placeholder: 'ex.: João da Silva'
  //   },
  //   {
  //     id: 12,
  //     label: 'CPF do dependente',
  //     inputType: 'text',
  //     placeholder: 'ex.: 123.456.789-00'
  //   },
  //   {
  //     id: 13,
  //     label: 'Valor da dedução',
  //     inputType: 'number',
  //     placeholder: 'ex.: 2275.08 (teto anual)'
  //   }
  // ];

    return (
        <form>
            <fieldset className='fieldset'>
                    <Input key={personalDataForm1Step2[3].id} label={personalDataForm1Step2[3].label}
                placeholder={personalDataForm1Step2[3].placeholder} inputType={personalDataForm1Step2[3].inputType} />

                  <Input key={personalDataForm1Step2[4].id} label={personalDataForm1Step2[4].label}
                placeholder={personalDataForm1Step2[4].placeholder} inputType={personalDataForm1Step2[4].inputType} />
                
                  <Input key={personalDataForm1Step2[5].id} label={personalDataForm1Step2[5].label}
                placeholder={personalDataForm1Step2[5].placeholder} inputType={personalDataForm1Step2[5].inputType} />
            </fieldset>
                <button type="button"   className="btn btn-info w-[150px]" onClick={next}>Next</button>
        </form>
    )
}

export default Personal03