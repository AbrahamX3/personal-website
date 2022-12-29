interface IChildren {
  children: React.ReactNode;
}

const OptionsContainer = ({ children }: IChildren) => {
  return (
    <>
      <div className="col-span-1 flex-wrap flex justify-center items-center align-middle space-x-2">
        {children}
      </div>
    </>
  );
};

export default OptionsContainer;
