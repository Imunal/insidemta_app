import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const PaySafeCardPayment = ({ shopSelected }) => {
    const playerData = useSelector((state) => state.player.UID);
    const history = useHistory();
    if (!playerData) {
        history.push('/login');
    }
    return (
        <>
            <h4 className="fw-bolder text-center">W celu zakupu usług na PaySafeCard skontaktuj się z nami bezpośrednio!</h4>
            <p className="fw-light text-center">W tym celu napisz wiadomość prywatną na Discord do <b className="fw-bold">Vorhacz#7151</b></p>
        </>
    );
};

export default PaySafeCardPayment;
