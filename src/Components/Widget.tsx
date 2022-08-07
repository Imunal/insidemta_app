type WidgetType = {
  title: string;
  children: React.ReactNode;
};

const Widget = ({ title, children }: WidgetType) => {
  return (
    <div className="mt-5 rounded-md bg-inside-bg-dark">
      <div className="p-5 text-lg font-medium text-white">
        <h5 className="mx-1">{title}</h5>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Widget;
