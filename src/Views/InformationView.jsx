/*import Image from 'react-image-webp';

import Discord from '../Assets/Images/Social/discord.jpg';
import DiscordWebP from '../Assets/Images/Social/discord.webp';

import Logo from '../Assets/Images/Logo/logo_insidemta.png';
import LogoWebP from '../Assets/Images/Logo/logo_insidemta.webp';*/
const InformationView = () => {
    return (
        <>
            <header>
                <div className="container">
                    <h1 className="text-center">Welcome in Los Santos</h1>
                </div>
            </header>
            <div className="container">
                <div className="intro">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Wracamy od Los Santos!</h3>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam est
                                odit quas ratione. Molestias quidem doloremque, harum non esse
                                obcaecati reiciendis magni omnis dignissimos dicta accusantium
                                repellendus in ipsam error.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>Obrazek</p>
                        </div>
                    </div>
                </div>
                <div className="intro">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Obrazek</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Przebudowa gospodarki</h3>
                            <p className="mt-3">
                                Podczas ostatniej edycji pojawiło się bardzo dużo błędów i
                                niedoróbek w naszej logice gospodarczej jak i skryptach. Mogliście
                                zauwazyć że niektóre osoby po kilku godinach od startu posiadały już
                                "zbugowane" pieniądze które udało im się zdobyć poprzed
                                niedopatrzecie w kasynie. Zbyt słaby balans zarobków na pracach
                                serwerowych również powodował duże rozbierzności. W tej edycji
                                skupimy się głównie na przbuedowanie gospodarki, rebalansie prac
                                dorywczych jak i poprawieniu wszystkich znanych nam błędów
                                pieniężdznych jakie znamy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="intro">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Restrukturyzacja administracji</h3>
                            <p className="mt-3">
                                Nie da się ująć, że administracja poprzedniej edycji była
                                niekompetentna, brakowało osoby która zajmowała się ekipą na
                                poważnie. Ekipa była głównym powodem kryzysu poprzedniej edycji. W
                                tej edycji skupimy się na mniejszej, bardziej ogarniętej i zgranej
                                ekipy. Przywróciliśmy na rangę Administratora kilka znanych wam
                                pewnie osób z poprzednij edycji do której mamy zaufanie i wieje od
                                nich profesjonalizmem. Nie wykluczamy jednak powiemu nowych osób w
                                naszym elitarnym gronie, dlatego polecamy wyczekiwać informacji o
                                najbliższych rekrutacjach.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>Obrazek</p>
                        </div>
                    </div>
                </div>

                <div className="intro">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Obrazek</p>
                        </div>
                        <div className="col-md-6">
                            <h3>
                                Realizacja waszych
                                <br />
                                pomysłów
                            </h3>
                            <p className="mt-3">
                                W poprzednij edycji dostaliśmy od was mase fajnych propozycji na
                                nowe systemy / rozwiązania / modyfikacje które moglibyśmy
                                wprowadzić. Zapisaliśmy je i stale przeglądamy analizując je
                                dokładnie w naszym gronie administracyjnym wybierające te które
                                naszym zdanie są najciekawsze i które zasługują na realizacje, a na
                                które zabrakło nam czasu podczas poprzedniego wydania.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="intro">
                    <h3 className="text-center">Przemyślenia poprzedniej edycji...</h3>
                    <p className="text-center mt-3">
                        Patrząc przez pryzmat ubiegłych miesięcy, przez ten czas przerwy dokładnie
                        przemyśleliśmy nasze błędy i przyczyny które wpłynęły na zakończenie naszej
                        kariery. Oprócz zmian wizualnych zostanie zmienione wiele zasad, które
                        pomogą zmienić sposób prowadzenia serwera. Dołożymy wszelkich starań żeby
                        poprowadzić druga edycję serwera profesjonalne. Wracamy ze zdwojoną siłą.
                        <br /> <b>Do zobaczenia niedługo!</b>
                    </p>
                </div>
            </div>
        </>
    );
};

export default InformationView;
