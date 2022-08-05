import React from 'react';
import LogoOld from 'Assets/Images/Logo/logo_new.png';
import Bussines from 'Assets/Images/Landing/1.jpg';
import Econommy from 'Assets/Images/Landing/2.jpg';
import VoiceChat from 'Assets/Images/Landing/3.jpg';
import Proposition from 'Assets/Images/Landing/4.jpg';
import Administration from 'Assets/Images/Landing/5.jpg';
import Criminal from 'Assets/Images/Landing/6.jpg';
import Ending from 'Assets/Images/Landing/7.jpg';

import { BsDiscord, BsFacebook } from 'react-icons/bs';

const InformationView = () => {
  return (
    <>
      <header>
        <div className="container">
          {/* <h1 className="text-center fw-bolder">Welcome in San Fierro</h1> */}
          <img src={LogoOld} alt="InsideMTA" className="img-fluid intro-logo" />
        </div>
      </header>
      <div className="container">
        <div className="intro">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h3>Przedsiębiorstwa</h3>
              <p className="mt-3">
                Każdy chciałby spełnić swój Amerykański sen... I wprowadzić nowe działalności
                gospodarcze do stanu San Andreas. Chcesz prowadzić i rozwijać swój warsztat
                samochodowy, komis samochodowy, siłownie lub klub nocny? Zatrudniać pracowników i
                zarządzać swoją firmą? W nowej edycji każdy będzie mógł zostać biznesmenem!
              </p>
            </div>
            <div className="col-md-6">
              <img src={Bussines} className="img-fluid" alt="Przedsiębiorstwa" />
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="row">
            <div className="col-md-6">
              <img src={Econommy} className="img-fluid" alt="Przebudowa gospodarki" />
            </div>
            <div className="col-md-6 align-self-center">
              <h3>Przebudowa gospodarki</h3>
              <p className="mt-3">
                Podczas ostatniej edycji pojawiło się bardzo dużo błędów i Niedoróbek w naszej
                logice gospodarczej jak i skryptach. Mogliście zauważyć, że niektóre osoby po kilku
                godzinach od startu posiadały już `&quot;`zbugowane`&quot;` pieniądze, które udało
                im się zdobyć poprzez Niedopatrzenie w kasynie. Zbyt słaby balans zarobków na
                pracach serwerowych również powodował duże rozbieżności. W tej edycji skupimy się
                głównie na przebudowę gospodarki, re-balansie prac dorywczych jak i poprawieniu
                wszystkich znanych nam błędów pieniężnych.
              </p>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h3>Restrukturyzacja administracji</h3>
              <p className="mt-3">
                Nie da się ukryć, że administracja poprzedniej edycji była niekompetentna, brakowało
                osoby która zajmowała się ekipą na poważnie. Ekipa była głównym powodem kryzysu
                poprzedniej edycji. W tej edycji skupimy się na mniejszej, bardziej ogarniętej i
                zgranej ekipie. Przywróciliśmy na posadę Administratora kilka znanych wam pewnie
                osób z poprzedniej edycji do których mamy zaufanie i wieje od nich profesjonalizmem.
                Nie wykluczamy jednak powiewu nowych osób w naszym elitarnym gronie, dlatego
                polecamy wyczekiwać informacji o najbliższych rekrutacjach.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={Administration}
                className="img-fluid"
                alt="Restrukturyzacja administracji"
              />
            </div>
          </div>
        </div>

        <div className="intro">
          <div className="row">
            <div className="col-md-6">
              <img src={VoiceChat} className="img-fluid" alt="VoiceChat" />
            </div>
            <div className="col-md-6 align-self-center">
              <h3>Voice Chat</h3>
              <p className="mt-3">
                Wraz z nadejściem nowej odsłony projektu postanowiliśmy wprowadzić dobrze znany i
                lubiany, voice chat, który to zdecydowanie wpłynie na jakość i wygląd rozgrywki.
                Dzięki niemu komunikacja zostanie przeniesiona na inny level. Jako, iż na serwerze
                posiadamy telefony jak i krótkofalówki czy megafony, będzie to znaczące urozmaicenie
                i ułatwienie ich używania. Voice chat otrzyma również regulamin jego korzystania,
                który będzie miał na celu wyeliminowanie osób uprzykrzających życie i niszczących
                ten sposób komunikacji.
              </p>
            </div>
          </div>
        </div>

        <div className="intro">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h3>Organizacje przestępcze</h3>
              <p className="mt-3">
                Na poprzedniej edycji mogliście ujrzeć gangi pod niepełną odsłoną, zabrakło wielu
                elementów, które dopiero miały zostać wprowadzone. Między innymi nie mieliście
                okazji doświadczyć napadów oraz zorganizowanych wydarzeń z frakcjami. Razem z
                członkami organizacji przestępczych postawiliśmy na elementy RolePlayu w rozgrywce.
                Teraz całkowicie odbijemy piłeczkę, dodamy wiele elementów umożliwiające wam
                dynamiczną i czasochłonną rozgrywkę, tak byście się nie nudzili.
              </p>
            </div>
            <div className="col-md-6">
              <img src={Criminal} className="img-fluid" alt="Organizacje przestępcze" />
            </div>
          </div>
        </div>

        <div className="intro">
          <div className="row">
            <div className="col-md-6">
              <img src={Proposition} className="img-fluid" alt="Realizacja waszych pomysłów" />
            </div>
            <div className="col-md-6 align-self-center">
              <h3>
                Realizacja waszych
                <br />
                pomysłów
              </h3>
              <p className="mt-3">
                W poprzedniej edycji dostaliśmy od was masę fajnych propozycji na nowe systemy /
                rozwiązania / modyfikacje które moglibyśmy wprowadzić. Zapisaliśmy je i stale
                przeglądamy analizując je dokładnie w naszym gronie administracyjnym wybierające te
                które naszym zdanie są najciekawsze i które zasługują na realizacje, a na które
                zabrakło nam czasu podczas poprzedniego wydania.
              </p>
            </div>
          </div>
        </div>

        <div className="intro">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h3>I... To wszystko?</h3>
              <p className="mt-3">
                Oczywiście, że nie! Pomimo głównych poprawek będzie również sporo małych usprawnień
                w kodzie, który przejdzie całkowity re-factoring, jak i modyfikacji, które
                uprzyjemnią wam rozgrywkę których zabrakło w poprzedniej edycji, oraz kilka dużych
                systemów których nie chcemy, póki co zdradzać.
                <br />
                Więcej informacji będziecie otrzymywać w najbliższych ogłoszeniach tak więc
                wyczekujcie.
              </p>
            </div>
            <div className="col-md-6">
              <img src={Ending} className="img-fluid" alt="I... To wszystko?" />
            </div>
          </div>
        </div>

        <div className="intro">
          <h3 className="text-center">Przemyślenia po poprzedniej edycji...</h3>
          <p className="text-center mt-3">
            Patrząc przez pryzmat ubiegłych miesięcy, przez ten czas przerwy dokładnie
            przemyśleliśmy nasze błędy i przyczyny, które wpłynęły na zakończenie naszej kariery.
            Oprócz zmian wizualnych zostanie zmienione wiele zasad, które pomogą zmienić sposób
            prowadzenia serwera. Dołożymy wszelkich starań, żeby poprowadzić druga edycję serwera
            profesjonalne. Wracamy ze zdwojoną siłą. <br /> <b>Do zobaczenia niedługo!</b>
          </p>
        </div>
        <div className="intro block__center mt-5">
          <ul>
            <li>
              <a href="https://discord.gg/rTq79VmZ" target="_blank" rel="noreferrer">
                <BsDiscord size={70} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/InsideMTA" target="_blank" rel="noreferrer">
                <BsFacebook size={70} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InformationView;
