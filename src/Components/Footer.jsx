import Image from 'react-image-webp';

import Logo from '../Assets/Images/Logo/logo_insidemta.png';
import LogoWebP from '../Assets/Images/Logo/logo_insidemta.webp';

function Footer() {
    return (
        <footer className="mt-5">
            <Image
                src={Logo}
                webp={LogoWebP}
                className="img-fluid object-cover d-block mx-auto footer__logo mb-2"
                alt="InsideMTA"
            />
            <p className="text-muted text-small text-center m-0 p-0">
                Copyright &copy; 2021 InsideMTA
            </p>
            {/* <p className="text-muted text-small text-center">
                <a href="https://cdn.insidemta.pl/regulamin.a3e18dc4.pdf">Regulamin serwisu</a>
            </p> */}
        </footer>
    );
}

export default Footer;
