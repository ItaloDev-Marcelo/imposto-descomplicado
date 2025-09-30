import Input from '../../components/Input';
import {RedimentosTributarios} from '../IncomeForm/Data/IncomeData';
const IncomeDataFormStep1 = () => {

  return (
    <form>
          <Input key={RedimentosTributarios[0].id} label={RedimentosTributarios[0].label}
          placeholder={RedimentosTributarios[0].placeholder} inputType={RedimentosTributarios[0].inputType} />
           <Input key={RedimentosTributarios[1].id} label={RedimentosTributarios[1].label}
          placeholder={RedimentosTributarios[1].placeholder} inputType={RedimentosTributarios[1].inputType} />
           <Input key={RedimentosTributarios[2].id} label={RedimentosTributarios[2].label}
          placeholder={RedimentosTributarios[2].placeholder} inputType={RedimentosTributarios[2].inputType} />
           <Input key={RedimentosTributarios[3].id} label={RedimentosTributarios[3].label}
          placeholder={RedimentosTributarios[3].placeholder} inputType={RedimentosTributarios[3].inputType} />
           <Input key={RedimentosTributarios[4].id} label={RedimentosTributarios[4].label}
          placeholder={RedimentosTributarios[4].placeholder} inputType={RedimentosTributarios[4].inputType} />
    </form>
  )
}

export default IncomeDataFormStep1