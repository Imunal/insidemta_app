import React from 'react';

class PaymentSuccessView extends React.Component {
    render() {
        return (
            <div className="container panel__body">
                <div className="panel">
                    <div className="panel__body">
                        <h1>Płatność została zaakceptowana!</h1>
                        <p>
                            Dziękujemy za zakup. Zakupiona usługa powinna zaleźć się w twoim{' '}
                            <b>ekwipunku</b>! W przypadku problemów prosimy o kontakt z Zarządem
                            serwera.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentSuccessView;
