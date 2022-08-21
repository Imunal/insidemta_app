import Logo from "Assets/Images/Logo/logo.webp";

const Footer = () => (
  <div className="p-5">
    <img src={Logo} className="mx-auto mb-2 block w-44" alt="InsideMTA" />
    <p className="text-small m-0 p-0 text-center text-inside-text-light">
      Copyright &copy; 2022 InsideMTA
      <br />
      <b>Verticum Games FILIP GIECEWICZ</b>
      <br />
      NIP: 6482803610 REGON: 388547700
    </p>
    <p className="text-small text-center text-inside-text-light">
      <a href="https://cdn.inside-mta.pl/regulamin.a3e18dc4.pdf">
        Regulamin serwisu
      </a>
    </p>
  </div>
);

export default Footer;
