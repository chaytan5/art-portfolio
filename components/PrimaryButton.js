import hexagon from "@/assets/svgs/hexagon.svg";
import Image from "next/image";

const PrimaryButton = ({ children }) => {
  return (
    <button className="hexagon-clip relative z-20 mx-auto w-[260px] cursor-pointer outline-none backdrop-blur md:w-fit">
      <Image src={hexagon} alt="hexagon icon" width={400} />
      <div className="hexagon-clip-inner absolute left-1/2 top-1/2 z-20 mx-auto grid h-[35px] w-[225px] -translate-x-1/2 -translate-y-1/2 place-items-center bg-gradient-to-b from-gold-90 to-yellow text-center md:h-[50px] md:w-[350px]">
        <p className="font-marcellus text-lg font-bold uppercase tracking-widest text-black md:text-2xl">
          {children}
        </p>
      </div>
    </button>
  );
};

export default PrimaryButton;
