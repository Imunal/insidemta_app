type PanelType = {
  title: string;
  children: React.ReactNode;
};

const Panel = ({ title, children }: PanelType) => {
  return (
    <div className="mt-5 rounded-md">
      <div className="bg-inside-bg-dark p-5 text-lg font-medium text-white">
        <h5 className="mx-1">{title}</h5>
      </div>
      <div className="bg-inside-bg-dark">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Panel;
