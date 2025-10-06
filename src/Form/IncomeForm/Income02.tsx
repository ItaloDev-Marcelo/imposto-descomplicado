import Input from '../../components/Input';
import type { nextStepProps } from '../../types/form.types/nextStep.Props';
import {RedimentosIsentos, RedimentosTributarios} from '../IncomeForm/Data/IncomeData';
const Income02 = ({next}:nextStepProps ) => {

  return (
    <form>
      
          <Input key={ RedimentosIsentos[0].id} label={ RedimentosIsentos[0].label}
          placeholder={ RedimentosIsentos[0].placeholder} inputType={ RedimentosIsentos[0].inputType} />

           <Input key={ RedimentosIsentos[1].id} label={ RedimentosIsentos[1].label}
          placeholder={ RedimentosIsentos[1].placeholder} inputType={ RedimentosIsentos[1].inputType} />

           <Input key={ RedimentosIsentos[2].id} label={ RedimentosIsentos[2].label}
          placeholder={ RedimentosIsentos[2].placeholder} inputType={ RedimentosIsentos[2].inputType} />
          
           <Input key={RedimentosTributarios[4].id} label={RedimentosTributarios[4].label}
          placeholder={RedimentosTributarios[4].placeholder} inputType={RedimentosTributarios[4].inputType} />


              <div className='my-4'>
                <button type="button" onClick={next} className="btn btn-accent w-[150px] ">Next</button>
            </div>
    </form>
  )
}

export default Income02