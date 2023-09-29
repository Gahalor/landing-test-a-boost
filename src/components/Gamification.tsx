import { gamifi } from "../assets";
import styles, { layout } from "../style";

const Gamification = () => (
  <section className={`${layout.section} mt-24 `}>
    <div className={layout.sectionImgReverse}>
    <img src={gamifi} alt="billing" className="w-[100%] relative z-[5]" />
    </div>
    <div className={layout.sectionInfo}>
    <h3 className={styles.heading3}>
        GAMIFICA
      </h3>
      
      <h2 className={styles.heading2}>
        Mejora el compromiso y la participación
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Un sistema gamificado que integra puntos, niveles, desafíos, rankings y recompensas,
        es una poderosa herramienta para mantener el interés de los usuarios y motivarlos a mejorar sus resultados.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        El uso de elementos lúdicos logra que el proceso de aprendizaje sea a la vez divertido y altamente efectivo.
      </p>

      <div className="grid grid-cols-2 gap-6 sm:mt-10 mt-6">
          <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
            <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
            <p className="text-sm font-semibold">Premios por logros</p>
          </div>
          <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
            <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
            <p className="text-sm font-semibold">Motivación para mejorar</p>
          </div>
          <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
            <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
            <p className="text-sm font-semibold">Sistema de progreso</p>
          </div>
          <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
            <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
            <p className="text-sm font-semibold">Rankings</p>
          </div>
        </div>

    </div>

  </section>
);

export default Gamification;