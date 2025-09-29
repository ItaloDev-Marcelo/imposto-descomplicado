import type { InputRadioProps } from "../types/form.types/Input.Radio.Props.type"

const RadioInput = ({name,title}:InputRadioProps) => {
  return (
       <div className='flex flex-row gap-2.5'> 
       <input type='radio' name={name} className="radio radio-xs" /> 
      {title}</div>    
  )
}

export default RadioInput