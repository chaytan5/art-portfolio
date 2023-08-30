const ContactForm = () => {
  return (
    <div className="relative min-h-[200px] max-w-[550px] border border-gold-40 bg-black before:absolute before:-inset-x-5 before:-inset-y-2.5 before:-z-10 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:-z-10 after:border after:border-gold-40">
      <div className="space-y-3 p-12">
        <h3 className="bg-gradient-to-b from-gold-90 to-yellow bg-clip-text text-center text-4xl uppercase tracking-widest text-transparent">
          Let&apos;s Talk
        </h3>
        <p className="text-center text-lg text-gold-90">
          Use the form below to drop me an email, or you can contact me directly
          at{" "}
          <a href="mailto:example@example.com" className="underline">
            neha@artdesigner.com
          </a>
        </p>
        <form className="space-y-4 py-6">
          <input
            // onSubmit={contactFormHandler}
            type="text"
            name="Name"
            className="w-full border border-gold-40 bg-transparent px-6 py-3 capitalize transition placeholder:text-gold-40 focus:border-gold-90 focus:outline-none  focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="Email"
            className="w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40 focus:border-gold-90 focus:outline-none  focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
            placeholder="Email"
            required
          />
          <textarea
            type="text"
            name="Message"
            className="max-h-[200px] min-h-[200px]  w-full border border-gold-40 bg-transparent px-6 py-3 transition placeholder:text-gold-40 focus:border-gold-90 focus:outline-none focus:ring-0 focus-visible:border-gold-90 focus-visible:outline-none focus-visible:ring-0"
            placeholder="Message"
            required
          />
          <div className="w-full pt-10 text-center">
            <button
              type="submit"
              className=" relative whitespace-nowrap border border-gold-40 bg-gradient-to-b from-gold-90 to-yellow px-8 py-4 text-lg font-semibold uppercase tracking-widest text-black/80 transition before:absolute before:-inset-x-5 before:-inset-y-2.5 before:border before:border-gold-40 after:absolute after:-inset-x-2.5 after:-inset-y-5 after:border after:border-gold-40 "
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