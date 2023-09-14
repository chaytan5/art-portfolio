import ContactForm from "@/components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-neutral-100">
      <div className="mx-auto w-11/12 max-w-screen-1.5xl">
        <div className="space-y-32 pb-32 pt-20">
          <div className="space-y-10">
            <h1 className="text-center text-3xl font-bold uppercase tracking-widest text-black md:text-4xl">
              Services / Contact
            </h1>
            <div className="mx-auto max-w-xl space-y-6 text-center text-base font-semibold md:text-lg">
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
                <a href="mailto:contact@neharastogi.com">
                  contact@neharastogi.com
                </a>{" "}
                or fill out the form below!
              </h3>
            </div>
          </div>
          <section className="px-5 pb-10">
            <ContactForm variant="light" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
