import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <button
      type="submit"
      className=" relative whitespace-nowrap border border-gold-40 bg-gradient-to-b from-gold-90 to-yellow px-4 py-2 text-base font-semibold uppercase tracking-widest text-black/80 transition "
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
