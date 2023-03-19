const Content = ({ children, title }) => {
  return (
    <>
      <main className="container-xl py-5">
        <h2 className="text-center my-5">{title}</h2>

        {children}
      </main>
    </>
  );
};

export default Content;
