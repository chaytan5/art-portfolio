const ProjectLayout = ({ children }) => {
  return (
    <div className="w-full bg-neutral-100">
      <main className="mx-auto w-11/12 max-w-screen-1.5xl">
        <div className="py-20">{children}</div>
      </main>
    </div>
  );
};

export default ProjectLayout;
