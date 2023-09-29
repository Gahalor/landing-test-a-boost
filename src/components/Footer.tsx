import styles from "../style";
import { logo } from "@/assets";
import { socialMedia } from "@/constants";

const Footer = () => (
  <section className={`${styles.flexCenter} py-8 flex-col`}>

    <div className="w-full flex justify-between items-start px-14">
      <div className="flex flex-col">
        <p className="font-poppins text-left mb-1 font-normal text-[14px] text-white">
          Oscar Gonsep | Govel Games
        </p>
        <p className="font-poppins text-left font-normal text-[14px] leading-[20px] text-white">
          En desarrollo | 2023
        </p>
      </div>
      
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[28px] h-[28px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;