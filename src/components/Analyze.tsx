import { analize } from "../assets";
import styles, { layout } from "../style";

const Analyze = () => (
  <section id="product" className={`${layout.section} mt-24`}>
    <div className={`${layout.sectionInfo}`}>
      <h3 className={styles.heading3}>
        ANALIZA
      </h3>
      
      <h2 className={styles.heading2}>
        Reportes para mejorar
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Recibe recomendaciones de la IA a partir del análisis de los resultados. 
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Toma decisiones de forma simple con una presentación visual e intuitiva de la información. 
      </p>

      <div className="grid grid-cols-2 gap-6 sm:mt-10 mt-6">
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Análisis de resultados</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Asistencia por IA</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Visual e intuitivo</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Decisión basada en datos</p>
        </div>
      </div>
    </div>

    <div className={layout.sectionImg}>
     <img src={analize} alt="billing" className="w-[100%] relative z-[5]" />
    </div>
  </section>
);

export default Analyze;