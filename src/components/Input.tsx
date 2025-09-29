import type { InputProps } from "../types/form.types/Input.Props.type"

const Input = ({label,placeholder,inputType, key}:InputProps) => {
    return (
        <fieldset className='fieldset' key={key}>
            <legend className='fieldset-legend'>{label}</legend>
            <input type={inputType} placeholder={placeholder} className='input' />
        </fieldset>
    )
}

export default Input