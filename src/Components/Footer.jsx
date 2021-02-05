import Image from "react-image-webp";

import Logo from "../Assets/Images/Logo/logo_insidemta.png";
import LogoWebP from "../Assets/Images/Logo/logo_insidemta.webp";

function Footer() {
  return (
    <footer className="mt-5">
      <Image
        src={Logo}
        webp={LogoWebP}
        className="img-fluid object-cover d-block mx-auto footer__logo"
        alt="InsideMTA"
      />
      <p className="text-muted text-small text-center m-0 p-0">
        Copyright &copy; 2021 InsideMTA
      </p>
      <p className="text-muted text-small text-center">
        <a href="/regulamin">Regulamin serwisu</a>
      </p>
    </footer>
  );
}

export default Footer;
