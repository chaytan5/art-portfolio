"use client";
import { useForm } from "react-hook-form";

const ContactForm = ({ variant }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
      className={`relative z-10 mx-auto min-h-[200px] max-w-[550px] border border-gold-40  before:absolute before:-inset-x-5 before:-inset-y-2.5 before:-z-10 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:-z-10 after:border after:border-gold-40 ${
        variant === "light" ? "bg-neutral-100" : "bg-black"
      }`}
    >
      <div className="space-y-4 px-4 py-8 md:p-12">
        <h3
          className={`bg-gradient-to-b  bg-clip-text pb-5 text-center text-3xl uppercase tracking-widest text-transparent md:text-4xl ${
            variant === "light"
              ? "from-black to-yellow"
              : "from-gold-90 to-yellow"
          }`}
        >
          Let&apos;s Talk
        </h3>
        <p
          className={`text-bas text-center md:text-lg ${
            variant === "light" ? "text-black" : "text-gold-90"
          }`}
        >
          Use the form below to drop me an email, or you can contact me directly
          at{" "}
          <a href="mailto:example@example.com" className="underline">
            mail@neharastogi.com
          </a>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`space-y-4 py-4  md:py-6 ${
            variant === "light" ? "text-black" : "text-gold-90"
          }`}
        >
          <input
            type="text"
            placeholder="Name"
            className={`w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40  focus:outline-none  focus:ring-0  focus-visible:outline-none focus-visible:ring-0 ${
              variant === "light"
                ? "focus:border-black focus-visible:border-black"
                : "focus:border-gold-90 focus-visible:border-gold-90"
            }`}
            {...register("Name", { required: true })}
          />
          {errors.Name && (
            <span className="mt-2 text-base">Name is required</span>
          )}

          <input
            type="text"
            placeholder="Email"
            className={`w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40  focus:outline-none  focus:ring-0  focus-visible:outline-none focus-visible:ring-0 ${
              variant === "light"
                ? "focus:border-black focus-visible:border-black"
                : "focus:border-gold-90 focus-visible:border-gold-90"
            }`}
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && (
            <span className="mt-2 text-base">Please enter a valid email</span>
          )}

          <textarea
            {...register("Message", { required: true })}
            placeholder="Message"
            className={`max-h-[200px] min-h-[200px] w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40  focus:outline-none  focus:ring-0  focus-visible:outline-none focus-visible:ring-0 ${
              variant === "light"
                ? "focus:border-black focus-visible:border-black"
                : "focus:border-gold-90 focus-visible:border-gold-90"
            }`}
          />
          {errors.Message && (
            <span className="mt-2 text-base">This field is required</span>
          )}

          <div className="w-full pt-10 text-center">
            <button
              type="submit"
              className=" relative whitespace-nowrap border border-gold-40 bg-gradient-to-b from-gold-90 to-yellow px-4 py-2 text-base font-semibold uppercase tracking-widest text-black/80 transition before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-40 md:px-8 md:py-4 md:text-lg "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
