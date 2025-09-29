import Logo from '../assets/images/hero.png';
import Navbar from '../nav/Navbar'
const LoadingPage = () => {
  return (
    <main >
        <Navbar />
        <div className='flex flex-col xl:flex-row items-center justify-center p-4'>
            <section className='w-[90%] p-1 md:p-0 md:w-[45%] gap-2'>
                 <h1 className='font-black mb-2 text-[2em] text-green-700'>Imposto Fácil e Rápido  </h1>
                 <p className='pr-2 my-1.5 text-gray-700'>Imposto Fácil é uma plataforma criada para simplificar o processo do Imposto de Renda.
Ela ajuda tanto quem precisa de apoio para organizar e enviar suas informações, quanto contadores que 
desejam revisar os dados com mais agilidade e praticidade.
   Com isso, clientes ganham tranquilidade e os contadores aumentam sua produtividade, tornando todo o processo mais rápido e eficiente.
                 </p>          
               <div className='mt-4 flex flex-row gap-3'>
                  <button className='p-2 bg-green-500 font-semibold w-[20%] rounded-[5px]'>Clientes</button>
                  <button className='p-2 bg-green-300 font-semibold w-[20%] rounded-[5px]'>Contadores</button>
                 </div>
            </section>
            <figure>
                <img src={Logo} alt="" className='w-[250px] md:w-[500px]' />
            </figure>
        </div>
    </main>
  )
}

export default LoadingPage