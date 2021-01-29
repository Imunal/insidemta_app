import { useState, useEffect } from "react";
import axiosInstance from '../../Configs/axios';
import Loader from "react-loader-spinner";

import NoImage from '../../Assets/Images/Player/no-found.png';

const ShowOrganizations = () => {
    const [organizations, setOrganizations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getOrganizations();
    }, []);


  const getOrganizations = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("organization/get");
        setOrganizations(response.data)
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
    }
  }

  const renderOrganizations = () => {
    return (
        organizations.map(organization => {
            return(
                <div className="col-md-4 mb-3" key={organization.ID}>
                    <div className="panel__body__element text-center">
                        {organization.img ? <img src={organization.img} className="img-fluid mx-auto w-50" alt="Logo Organizacji"></img> : <img src={NoImage} className="img-fluid mx-auto w-10" alt="Logo Organizacji"></img>}
                        <h5 className="mt-3 text-muted text-break fw-900">{organization.name} ({organization.ID})</h5>
                        <span className="text-muted text-break">Utworzono: {organization.created}</span><br/>
                        <span className="text-muted text-break">Lider: {organization.owner}</span><br/>
                        <span className="text-muted text-break">Majątek: ${organization.money}</span><br/>
                        <span className="text-muted text-break">Ilość członków: {organization.players}</span><br/>
                        <span className="text-muted text-break">Ilość pojazdów: {organization.vehicles}</span><br/>
                    </div>
                </div>
            )
        })
    )
  }

  return (
    <div className="container">
      <div className="panel mt-5">
        <div className="panel__header">
          <h1>Lista organizacji:</h1>
        </div>
        <div className="panel__body">
            <>
                {isLoading ? (
                <div className="block__center w-100 h-100 mt-5 mb-5">
                    <Loader type="Bars" color="#ccc" height={50} width={50} />
                    <p className="text-small text-center text-muted m-0 mt-3">
                    Trwa pobieranie danych z serwera
                    <br />
                    Poczekaj chwilę...
                    </p>
                </div>
                ) : (
                    <div className="row">
                        {renderOrganizations()}
                    </div>
                )}
            </>
        </div>
      </div>
    </div>
  );
}

export default ShowOrganizations;