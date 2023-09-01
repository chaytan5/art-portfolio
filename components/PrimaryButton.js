import hexagon from "@/assets/svgs/hexagon.svg";
import Image from "next/image";

const PrimaryButton = ({ children }) => {
  return (
    <button className="hexagon-clip relative z-20 mx-auto w-fit cursor-pointer outline-none backdrop-blur">
      <Image src={hexagon} alt="hexagon icon" width={400} />
      <div className="hexagon-clip-inner absolute left-1/2 top-1/2 z-20 mx-auto grid h-[50px] w-[350px] -translate-x-1/2 -translate-y-1/2 place-items-center bg-gradient-to-b from-gold-90 to-yellow text-center">
        <p className="font-marcellus text-2xl font-bold uppercase tracking-widest text-black">
          {children}
        </p>
      </div>
    </button>
  );
};

export default PrimaryButton;
