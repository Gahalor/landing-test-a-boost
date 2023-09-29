import styles from "@/style";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY} ${styles.paddingX}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-row xl:px-0 sm:px-16 px-6 w-full`}>


        <div className="flex flex-col justify-between items-center w-[720px] mt-24">
          <h1 className="flex-1 font-poppins font-semibold text-center ss:text-[72px] text-[72px] text-white ss:leading-[100.8px] leading-[85px]">
            Mejora tus<br className="sm:block hidden" />{" "}
          </h1>
          <span className="flex-1 font-poppins font-bold text-center ss:text-[72px] text-[72px] text-[#3179F9] ss:leading-[100.8px] leading-[85px]">Procesos Evaluativos</span>{" "}
            <br className="sm:block hidden" />{" "}
            <p className="text-gradient text-xl leading-[36px]" >Con preguntas procedimentales para mejorar la comprensión</p>
            <p className="text-gradient text-xl leading-[36px]" >y la aplicación práctica del conocimiento.</p>
          <div className="w-full flex justify-center">
            <Button styles={`mt-10`} />
          </div>
        </div>
      </div>


      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;