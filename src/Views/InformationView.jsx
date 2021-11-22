import Image from 'react-image-webp';

import Discord from '../Assets/Images/Social/discord.jpg';
import DiscordWebP from '../Assets/Images/Social/discord.webp';

import Logo from '../Assets/Images/Logo/logo_insidemta.png';
import LogoWebP from '../Assets/Images/Logo/logo_insidemta.webp';
const InformationView = () => {
    return (
        <div className="mt-5 container">
            <Image
                src={Logo}
                webp={LogoWebP}
                className="img-fluid object-cover d-block mx-auto footer__logo mb-2"
                alt="InsideMTA"
            />
            <div className="text-center panel p-5 mt-5">
                <div className="slider__update mt-5 p-2">
                    <h1>Reflekcje</h1>
                </div>
                <p className="d-block m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus
                    malesuada augue non iaculis. Aenean at leo facilisis, lacinia diam ut, rhoncus
                    eros. Nunc velit enim, gravida pulvinar hendrerit eu, iaculis sed libero.
                    Pellentesque placerat risus quis enim blandit lacinia. Aliquam erat volutpat.
                    Nunc ac mi eros. Aenean vel mauris nec nibh ultricies dignissim. Proin sed
                    tincidunt lectus. Donec non sem vitae justo condimentum hendrerit. Nam rhoncus
                    eros nec ipsum finibus euismod. Vestibulum non enim orci. Nam pretium gravida
                    pellentesque. Sed mauris sem, sollicitudin non nulla id, ultrices malesuada
                    elit. Etiam placerat, nisi in fringilla euismod, quam quam bibendum nisi, eu
                    porta libero orci quis mi. Cras a metus id lacus dictum porttitor. Curabitur vel
                    posuere diam, vel lacinia est. Vestibulum tempus diam id ex luctus, in maximus
                    mi finibus. Donec diam libero, egestas nec nisi at, placerat molestie felis.
                    Proin euismod ipsum nisl, ac hendrerit diam eleifend sed. Ut eu quam nunc. Sed
                    eget turpis nec urna dictum hendrerit. Vivamus vel risus congue, laoreet est a,
                    finibus dolor. Nunc bibendum id augue at pharetra. Donec varius odio in maximus
                    aliquet. Aenean tortor neque, consequat ac turpis eu, luctus molestie justo.
                    Integer sagittis ante quis dictum vestibulum. In ac convallis nisl. Ut aliquam,
                    quam sit amet varius sagittis, ex justo consectetur lorem, a lacinia eros erat
                    eu velit. Quisque facilisis vulputate ipsum nec placerat. Fusce fringilla a
                    augue vitae pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Curabitur interdum, purus quis pretium cursus,
                    purus ligula hendrerit tellus, vel semper quam nisl vitae augue. Quisque ut
                    laoreet justo, interdum luctus mi. Etiam accumsan lorem a ante lacinia lobortis.
                    Aliquam interdum mollis hendrerit. Integer ac volutpat mi. Pellentesque vel
                    luctus erat. Pellentesque ut enim non neque porta scelerisque. Nulla eget risus
                    mollis, interdum nibh sit amet, laoreet ante. Cras auctor tincidunt nisl, eu
                    porttitor quam. Duis ultrices ornare arcu a pretium. Morbi quis eros laoreet,
                    molestie lorem ac, pharetra elit. Cras consectetur, elit eget consectetur
                    volutpat, erat odio euismod arcu, vitae iaculis risus augue nec turpis. Nam
                    maximus a mi non pulvinar. Pellentesque quis scelerisque risus, imperdiet
                    placerat sem. Proin convallis quam tortor, vel facilisis dui fringilla
                    venenatis. Duis commodo nisi nec consectetur sodales. Fusce accumsan, lorem vel
                    fringilla pretium, ligula velit commodo elit, quis cursus ligula velit id nibh.
                    Aliquam erat volutpat.
                </p>
                <div className="slider__update mt-5 p-2">
                    <h1>Plany na dalszy rozwój</h1>
                </div>
                <div className="slider__update mt-5 p-2">
                    <h1>Administracja</h1>
                </div>
                <div className="slider__update mt-5 p-2">
                    <h1>Prywaciarz?</h1>
                </div>
                <div className="row">
                    <div className="slider__update mt-5 p-2">
                        <h1>Śledź postęp projektu</h1>
                    </div>
                    <div className="col-md-6 mt-3">
                        <a href="https://discord.gg/QB7Y6aj">
                            <Image
                                src={Discord}
                                webp={DiscordWebP}
                                className="img-fluid object-cover"
                                alt="Discord"
                            />
                        </a>
                    </div>
                    <div className="col-md-6 mt-3">
                        <a href="https://discord.gg/QB7Y6aj">
                            <Image
                                src={Discord}
                                webp={DiscordWebP}
                                className="img-fluid object-cover"
                                alt="Discord"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationView;
