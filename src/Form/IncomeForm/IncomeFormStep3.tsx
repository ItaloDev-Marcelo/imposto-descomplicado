import Input from '../../components/Input';
import { RedimentosSujeitos  } from '../IncomeForm/Data/IncomeData';
const IncomeDataFormStep3 = () => {

  return (
    <form>
          <Input key={RedimentosSujeitos[0].id} label={RedimentosSujeitos[0].label}
          placeholder={RedimentosSujeitos[0].placeholder} inputType={RedimentosSujeitos[0].inputType} />

           <Input key={RedimentosSujeitos[1].id} label={RedimentosSujeitos[1].label}
          placeholder={RedimentosSujeitos[1].placeholder} inputType={RedimentosSujeitos[1].inputType} />

           <Input key={RedimentosSujeitos[2].id} label={RedimentosSujeitos[2].label}
          placeholder={RedimentosSujeitos[2].placeholder} inputType={RedimentosSujeitos[2].inputType} />

          <Input key={RedimentosSujeitos[3].id} label={RedimentosSujeitos[3].label}
          placeholder={RedimentosSujeitos[3].placeholder} inputType={RedimentosSujeitos[3].inputType} />


         <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
  <legend className="fieldset-legend">IR retido (se houver)</legend>
  <label className="label">
    <input type="checkbox" className="checkbox" />
    IR retido
  </label>
</fieldset>

    </form>
  )
}

export default IncomeDataFormStep3