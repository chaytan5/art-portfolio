import ContactForm from "@/components/ContactForm";
import Divider from "@/components/Divider";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="relative min-h-screen bg-black bg-contact4 bg-cover bg-center bg-no-repeat text-gold-90">
        <div className="absolute top-0 z-0 h-full w-full bg-gradient-to-b from-black "></div>
        <div className="absolute bottom-0 z-0 h-full w-full bg-gradient-to-b from-transparent to-black/90 "></div>
        <div className="relative z-10 mx-auto w-11/12 max-w-screen-1.5xl">
          <div className="space-y-44 pb-32 pt-10">
            <div className="mx-auto w-11/12 space-y-10">
              <h1 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-center font-marcellus text-3xl font-bold uppercase tracking-widest text-transparent lg:text-4xl">
                Services / Contact
              </h1>
              <div className="mx-auto max-w-xl space-y-6 text-center text-base text-neutral-300 md:text-lg">
                <h3>
                  Game Environment/ Prop/Character Concepts, 2D Assets,
                  Worldbuilding, Card Art, Marketing Illustrations, Keyframes
                </h3>
                <h3>
                  Creative Development: Style Exploration and Look Development,
                  Storyboarding, Key Art.
                </h3>
                <h3 className="pt-6">
                  To inquire about availability and rates, please email{" "}
                  <a
                    href="mailto:contact@neharastogi.com"
                    className="underline"
                  >
                    contact@neharastogi.com
                  </a>{" "}
                  or fill out the form below!
                </h3>
              </div>
            </div>
            <section className="px-5 pb-10">
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
      <div className="bg-black py-2">
        <div className="mx-auto w-11/12 max-w-screen-1.5xl">
          <Divider />
        </div>
      </div>
    </>
  );
};

export default Contact;
