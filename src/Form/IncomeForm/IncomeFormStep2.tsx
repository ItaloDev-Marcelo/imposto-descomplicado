import Input from '../../components/Input';
import {RedimentosIsentos } from '../IncomeForm/Data/IncomeData';
const IncomeDataFormStep2 = () => {

  return (
    <form>
          <Input key={ RedimentosIsentos[0].id} label={ RedimentosIsentos[0].label}
          placeholder={ RedimentosIsentos[0].placeholder} inputType={ RedimentosIsentos[0].inputType} />

           <Input key={ RedimentosIsentos[1].id} label={ RedimentosIsentos[1].label}
          placeholder={ RedimentosIsentos[1].placeholder} inputType={ RedimentosIsentos[1].inputType} />

           <Input key={ RedimentosIsentos[2].id} label={ RedimentosIsentos[2].label}
          placeholder={ RedimentosIsentos[2].placeholder} inputType={ RedimentosIsentos[2].inputType} />
    </form>
  )
}

export default IncomeDataFormStep2