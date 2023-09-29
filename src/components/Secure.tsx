import { secure } from "../assets";
import styles, { layout } from "../style";

const Secure = () => (
  <section className={`${layout.section} mt-24`}>
    <div className={`${layout.sectionInfo}`}>
      <h3 className={styles.heading3}>
        SEGURIZA
      </h3>
      
      <h2 className={styles.heading2}>
        Totalmente confiable
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Cada respuesta queda inmutablemente registrada en la blockchain, asegurando transparencia y confiabilidad de los resultados.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        La información es pública e incorruptible, sin posibilidad de falsificación.
      </p>

      <div className="grid grid-cols-2 gap-6 sm:mt-10 mt-6">
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Facil de usar</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Registros inmutables</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Transparente</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">NFTs como recompensas</p>
        </div>
      </div>
    </div>

    <div className={layout.sectionImg}>
     <img src={secure} alt="billing" className="w-[100%] relative z-[5]" />
    </div>
  </section>
);

export default Secure;