import NoImage from "Assets/Images/Player/no-found.png";
import Spacer from "Components/Spacer";

//Types
import { Organization } from "Types/Organization";

type PlayerOrganizationTypes = {
  organizations: Organization[];
};

const PlayerOrganizations = ({ organizations }: PlayerOrganizationTypes) => {
  const renderOrganizations = () =>
    organizations.map((organization) => (
      <div className="mb-3" key={organization.ID}>
        <div className="mt-5 rounded-md bg-inside-bg-medium p-5 text-center">
          {organization.img ? (
            <img
              src={organization.img}
              className="mx-auto block w-48"
              loading="lazy"
              alt="Logo Organizacji"
            ></img>
          ) : (
            <img
              src={NoImage}
              className="mx-auto block w-10"
              loading="lazy"
              alt="Logo Organizacji"
            ></img>
          )}
          <h5 className="text-break fw-900 mt-3 text-gray-400">
            {organization.name} ({organization.ID})
          </h5>
          <span className="text-break text-gray-400">
            Utworzono:{" "}
            {new Date(organization.created).toLocaleDateString("pl-PL")}
          </span>
          <br />
          <span className="text-break text-gray-400">
            Lider: {organization.owner}
          </span>
          <br />
          <span className="text-break text-gray-400">
            Majątek: ${Math.round(+organization.money * 100) / 100}
          </span>
          <br />
          <span className="text-break text-gray-400">
            Ilość członków: {organization.players * 5}
          </span>
          <br />
          <span className="text-break text-gray-400">
            Ilość pojazdów: {organization.vehicles * 3}
          </span>
          <br />
        </div>
      </div>
    ));

  return (
    <>
      <h5 className="text-xl font-medium text-white">Organizacje:</h5>
      <Spacer />
      {organizations.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {renderOrganizations()}
        </div>
      ) : (
        <div className="custom__alert custom__alert__info">
          <h1> Nie należysz do żadnej organizacji 😔</h1>
          <p className="m-0">
            Możesz dołączyć do organizacji cywilnej czy przestępczej praktycznie
            w każdym momencie. Nie wiesz jak to zrobić? Rozejrzyj się na forum w
            dziale organizacji przestępczych, czy żadna z nich nie prowadzi
            rekrutacji lub popytaj graczy na serwerze. Jeśli nie uda ci się
            znaleźć odpowiedniej dla siebie - zawsze możesz utworzyć swoją
            własną.
          </p>
        </div>
      )}
    </>
  );
};

export default PlayerOrganizations;
