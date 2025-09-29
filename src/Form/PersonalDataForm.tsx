
const PersonalDataForm = () => {
    return (
        <form>
            <div>

                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Nome completo</legend>
                    <input type='text' placeholder='Nome' className='input' />
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Data de nascimento</legend>
                    <input type='text' placeholder='Aniversario' className='input' />
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Email</legend>
                    <input type='email' placeholder='Email' className='input' />
                </fieldset>


                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Telefone</legend>
                    <input type='tel' placeholder='telefone' className='input' />
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Ocupação principal</legend>
                    <input type='text' placeholder='Profissão' className='input' />
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Estado civil</legend>
                    <div className='flex flex-row gap-2.5'> <input type='radio' name='estado-civil' className="radio radio-xs" defaultChecked /> solteiro(a)</div>
                    <div className='flex flex-row gap-2.5'> <input type='radio' name='estado-civil' className="radio radio-xs" /> casado(a) </div>
                    <div className='flex flex-row gap-2.5'>  <input type='radio' name='estado-civil' className="radio radio-xs" /> divorciado(a) </div>
                    <div className='flex flex-row gap-2.5'> <input type='radio' name='estado-civil' className="radio radio-xs" /> viúvo(a)</div>
                </fieldset>
            </div>

            <fieldset className='fieldset'>

                <legend className="fieldset">Endereço completo</legend>


                  <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>CPF</legend>
                    <input type='text' placeholder='CPF' className='input' />
                </fieldset>


                  <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Logradouro(rua/avenida)</legend>
                    <input type='text' placeholder='Logradouro' className='input' />
                </fieldset>

                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Numero</legend>
                    <input type='text' placeholder='Numero de telefone' className='input' />
                </fieldset>


                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'> Bairro</legend>
                    <input type='text' placeholder=' Bairro' className='input' />
                </fieldset>

                 <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Cidade</legend>
                    <input type='text' placeholder='Cidade' className='input' />
                </fieldset>

                 <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Estado</legend>
                    <input type='text' placeholder='Estado' className='input' />
                </fieldset>
            </fieldset>
        </form>
    )
}

export default PersonalDataForm