import React from 'react';
import Image from 'react-image-webp';

import Logo from '../Assets/Images/Logo/logo_insidemta.png';
import LogoWebP from '../Assets/Images/Logo/logo_insidemta.webp';

const Footer = () => (
  <footer className="p-5">
    <Image
      src={Logo}
      webp={LogoWebP}
      className="img-fluid object-cover d-block mx-auto footer__logo mb-2"
      alt="InsideMTA"
    />
    <p className="text-muted text-small text-center m-0 p-0">
      Copyright &copy; 2021 InsideMTA
      <br />
      <b>Verticum Games FILIP GIECEWICZ</b>
      <br />
      NIP: 6482803610 REGON: 388547700
    </p>
    {/* <p className="text-muted text-small text-center">
                <a href="https://cdn.insidemta.pl/regulamin.a3e18dc4.pdf">Regulamin serwisu</a>
            </p> */}
  </footer>
);

export default Footer;
