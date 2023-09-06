const CustomContainer = ({ children }) => {
  return (
    <div className="grid h-[90%] w-full place-items-center lg:w-3/4">
      {children}
    </div>
  );
};

export default CustomContainer;
