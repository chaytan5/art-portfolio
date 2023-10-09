"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactForm = () => {
  const [state, setState] = useState();

  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setState("loading");

    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Your message has been sent");
    } else {
      toast.error(
        "There was an error while sending you message, please try again",
      );
    }

    setState("ready");
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        Name: "",
        Email: "",
        Message: "",
      });
    }
  }, [reset, formState]);

  return (
    <div className="relative z-10 mx-auto min-h-[200px] max-w-[550px] border border-gold-40  bg-black before:absolute before:-inset-x-5 before:-inset-y-2.5 before:-z-10 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:-z-10 after:border after:border-gold-40">
      <div className="space-y-4 px-4 py-8 md:p-12">
        <h3 className="bg-gradient-to-b  from-gold-90 to-yellow bg-clip-text pb-5 text-center text-3xl uppercase tracking-widest text-transparent md:text-4xl">
          Let&apos;s Talk
        </h3>
        <p className="text-bas text-center text-gold-90 md:text-lg">
          Use the form below to drop me an email, or you can contact me directly
          at{" "}
          <a href="mailto:art@neharastogi.com" className="underline">
            art@neharastogi.com
          </a>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 py-4 text-gold-90 md:py-6"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40  focus:border-gold-90  focus:outline-none  focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
            {...register("Name", { required: true })}
          />
          {errors.Name && (
            <span className="mt-2 text-base">Name is required</span>
          )}

          <input
            type="text"
            placeholder="Email"
            className="w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40  focus:border-gold-90  focus:outline-none  focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && (
            <span className="mt-2 text-base">Please enter a valid email</span>
          )}

          <textarea
            {...register("Message", { required: true })}
            placeholder="Message"
            className="max-h-[200px] min-h-[200px] w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40  focus:border-gold-90  focus:outline-none  focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
          />
          {errors.Message && (
            <span className="mt-2 text-base">This field is required</span>
          )}

          <div className="w-full pt-10 text-center">
            <button
              disabled={state === "loading"}
              type="submit"
              className={`${
                state === "loading" && "cursor-not-allowed"
              } relative whitespace-nowrap border border-gold-40 bg-gradient-to-b from-gold-90 to-yellow px-4 py-2 text-base font-semibold uppercase tracking-widest text-black/80 transition before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-40 md:px-8 md:py-4 md:text-lg`}
            >
              {state === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
