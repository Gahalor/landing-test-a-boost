import styles from "../style";
import { useForm } from "react-hook-form";
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const CTA = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <section id="suscribe" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col rounded-[20px] box-shadow`}>
      <div className="flex flex-row w-2/5">
        <div className="mt-14 w-1/3 bg-[#1a1c30] rounded-l "></div>
        <div className="w-full bg-[#162044] -mb-10 z-10 rounded shadow-lg">
          <div className="py-6 px-10">
            <p className="text-sm font-semibold text-slate-400 mt-2">
              GRATIS
            </p>
            <p className="text-[24px] text-slate-400 font-semibold">$<span className="text-[32px] text-slate-100">0</span></p>
            <div className="bg-slate-400 w-full h-0.5 mt-4" />
            <div className="flex flex-col text-white mt-6 mb-2 font-semibold">
              <div className="flex flex-row items-center text-sm mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                <p className="ml-4">50 tests por mes</p>
              </div>
              <div className="flex flex-row items-center text-sm mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                <p className="ml-4">Perfil de usuario</p>
              </div>
              <div className="flex flex-row items-center text-sm mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                <p className="ml-4">Gestión de evaluaciones</p>
              </div>
              <div className="flex flex-row items-center text-sm mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                <p className="ml-4">Gestión de estudiantes</p>
              </div>
              <div className="flex flex-row items-center text-sm">
                <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                <p className="ml-4">Análisis de resultados</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-1/3 bg-[#1a1c30] rounded-r"></div>
      </div>
      <div className={`${styles.sectionWidth} w-2/3 bg-blue-950 rounded-xl flex flex-col justify-center items-center`}>
        <div className="flex-1 flex flex-col text-center pt-16 pb-6">

          <h2 className="text-[42px] font-bold mb-4 mt-2">Suscríbete</h2>
          <p className={`text-xl text-center max-w-[520px] mb-1`}>
            Te avisaré cuando el servicio esté funcionando.
          </p>
          <p className={`text-xl text-center max-w-[580px] mb-6`}>
            Crea evaluaciones efectivas totalmente desde el día uno
            <span className="font-bold"> gratis</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex flex-col justify-center">
              <div className="">
                <input className="w-64 p-2 rounded-l-md text-center" type="text" placeholder="Ingresa tu Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="submit" value="Suscribir" className="bg-[#0059F7] py-2 px-6 rounded-r-md font-semibold cursor-pointer" />
              </div>
              <p className="mt-4 h-4 text-slate-400 font-semibold text-sm">
              {errors.Email?.type === 'required' && <p>EL EMAIL ES REQUERIDO</p>}
              {errors.Email?.type === 'pattern' && <p>EL EMAIL ES INVÁLIDO</p>}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
};

export default CTA;