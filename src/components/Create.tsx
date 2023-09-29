import { placeholder, create } from "../assets";
import styles, { layout } from "../style";

const Create = () => (
  <section id="features" className={`${layout.sectionReverse} mt-16`}>
    <div className={layout.sectionImgReverse}>
      <img src={create} alt="billing" className="w-[100%] relative z-[5]" />
    </div>
    <div className={layout.sectionInfo}>
      <h3 className={styles.heading3}>
        CREA
      </h3>
      
      <h2 className={styles.heading2}>
        Nunca sin ideas
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        La IA integrada te ayudará a generar tests con preguntas procedimentales a partir del contenido que le proporciones.
        {/* Ahorra tiempo y esfuerzo mientras creando herramientas evaluativas eficientes y precisas. */}
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        O bien crea tus tests simplemente arrastrando y soltando desde colecciones compartidas de preguntas.
        {/* Ahorra tiempo y esfuerzo mientras creando herramientas evaluativas eficientes y precisas. */}
      </p>

      <div className="grid grid-cols-2 gap-6 sm:mt-10 mt-6">
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Drag & Drop</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Creación por IA</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Base de preguntas</p>
        </div>
        <div className="bg-[#1a1c30] w-60 flex justify-strats items-center rounded-md p-4 ">
          <div className="w-4 h-4 rounded-full bg-[#96aff9] mr-2"/>
          <p className="text-sm font-semibold">Simple</p>
        </div>
      </div>
    </div>
  </section>
);

export default Create;