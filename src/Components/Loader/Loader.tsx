const Loader = () => (
  <div className="block__center w-100 h-100 mt-5 mb-5">
    {/* <ReactLoader type="Bars" color="#ccc" height={50} width={50} /> */}
    <p className="text-small text-muted m-0 mt-3 text-center">
      Trwa pobieranie danych z serwera
      <br />
      Poczekaj chwilę...
    </p>
  </div>
);

export default Loader;
