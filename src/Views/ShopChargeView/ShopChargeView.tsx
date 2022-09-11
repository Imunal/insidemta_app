import { useState } from "react";
//Components
import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";
import Button from "Components/Button/Button";
import Spacer from "Components/Spacer";
import Modal from "Components/Modal/Modal";
//Hooks
import { useShop } from "Hooks/useShop";
//Types
import { ShopCharge } from "Types/ShopCharge";
import { ShopChargeOptions } from "Types/ShopChargeOptions";
import axios from "Configs/axios";
import toast from "react-hot-toast";
import { usePlayer } from "Hooks/usePlayer";

type InitialStateType = {
  charge: ShopCharge;
  options: ShopChargeOptions[];
};

const initialState: InitialStateType = {
  charge: null,
  options: [],
};

const ShopChargeView = () => {
  //Hooks
  const { isLoading, shopCharge } = useShop();
  const { player } = usePlayer();
  //States
  const [selectedChargeOption, setSelectedChargeOption] =
    useState(initialState);
  const [modalState, setModalState] = useState(false);
  //const [clientSecret, setClientSecret] = useState("");

  const onModalStateChange = () => setModalState(!modalState);

  const onChargeSelected = (option: ShopCharge) =>
    setSelectedChargeOption({
      charge: option,
      options: option.shop_charge_options,
    });

  const onPaymentTrigger = (optionID: number) => {
    axios
      .post("/payment/stripe/create-checkout-session", {
        shopChargeID: selectedChargeOption.charge.shop_charge_id,
        shopChargeOptionID: optionID,
        playerUID: player.UID,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Wystąpił problem z inicjacją płatności");
      });
  };

  const renderShopChargeOptions = () =>
    shopCharge.map((option) => (
      <div
        className={
          " cursor-pointer p-8 text-center text-gray-400 " +
          (selectedChargeOption.charge &&
          selectedChargeOption.charge.shop_charge_id === option.shop_charge_id
            ? "bg-inside-bg-medium"
            : "bg-inside-bg-light")
        }
        onClick={() => onChargeSelected(option)}
        key={option.shop_charge_id}
      >
        <h1 className="text-gray-200">{option.shop_charge_name}</h1>
        <p className="mt-3 text-gray-400">{option.shop_charge_desc}</p>
      </div>
    ));

  const renderShopCharge = () =>
    selectedChargeOption.options.map((chargeOption) => (
      <div
        className="bg-inside-bg-light p-8 text-center text-gray-400"
        key={chargeOption.shop_charge_option_id}
      >
        <h1>
          {chargeOption.shop_charge_option_name} -{" "}
          {chargeOption.shop_charge_option_value}
        </h1>
        <h5 className="mt-3 mb-3">
          Cena: <b>{chargeOption.shop_charge_option_price}</b>zł
        </h5>

        <div className="mx-auto block w-64">
          <Button
            onClick={() => onPaymentTrigger(chargeOption.shop_charge_option_id)}
          >
            Przejdź do płatności
          </Button>
        </div>
      </div>
    ));
  return (
    <Layout>
      <Panel title="Doładuj konto">
        <Modal
          modalHeader="Zakup usługi"
          modalShow={modalState}
          updateState={onModalStateChange}
        >
          <div>
            <p className="text-gray-400">Siema</p>
          </div>
        </Modal>
        <div className="p-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {shopCharge.length ? renderShopChargeOptions() : ""}
          </div>
          <Spacer />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {selectedChargeOption.charge && selectedChargeOption.options.length
              ? renderShopCharge()
              : ""}
          </div>
        </div>
      </Panel>
    </Layout>
  );
};

export default ShopChargeView;
