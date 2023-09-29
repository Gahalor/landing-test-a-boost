import styles from "../style";

const Purpose = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col`}>
    <div className="w-3/4 flex flex-col jutify-center text-center">
      {/* <h1 className="flex-1 font-poppins font-bold text-center ss:text-[72px] text-[42px] text-[#3179F9] ss:leading-[100.8px] leading-[65px]">
        EVALUACIONES PROCEDIMENTALES<br className="sm:block hidden" />{" "}
      </h1> */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col">
        {/* <p className="font-poppins font-bold ss:text-[72px] text-[72px] text-white">+</p> */}
        <p>
          <span className="font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[52px]">¿Qué es una </span>
          <span className="font-poppins font-bold ss:text-[72px] text-[42px] text-[#0059F7] ss:leading-[100.8px] leading-[52px]">Pregunta Procedimental</span>
          <span className="font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[52px]">?</span>

        </p>
        <p className="font-poppins mt-6 ss:text-[72px] text-xl text-white ss:leading-[100.8px]">Es una pregunta que busca obtener información sobre el proceso </p>
        <p className="font-poppins ss:text-[72px] text-xl text-white ss:leading-[100.8px]"> o los pasos necesarios para obtener un resultado específico.</p>

          <p className="font-poppins mt-6 ss:text-[72px] text-xl text-white ss:leading-[100.8px]">En lugar de buscar una respuesta directa, se enfoca en entender cómo lograr el resultado.</p>

        </div>
      </div>


    </div>
  </section>
);

export default Purpose;