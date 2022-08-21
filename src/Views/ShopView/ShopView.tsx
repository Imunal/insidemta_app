import { useEffect } from "react";
import toast from "react-hot-toast";

//Hooks
import { useShop } from "Hooks/useShop";
import { usePlayer } from "Hooks/usePlayer";

//Components
import Button from "Components/Button/Button";
import Layout from "Components/Layout/Layout";
import Panel from "Components/Panel";
import Spacer from "Components/Spacer";
import Modal from "Components/Modal/Modal";

//Types
import { Shop } from "Types/Shop";
import { Link } from "react-router-dom";

const ShopView = () => {
  const {
    isLoading,
    shops,
    handleFetchShops,
    shopChargeOptions,
    handleFetchShopChargeOptions,
  } = useShop();

  const { player } = usePlayer();

  useEffect(() => {
    handleFetchShopChargeOptions();
    handleFetchShops();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShopBuy = (shop: Shop) => {
    if (player.premiumPoints < shop.shop_price) {
      return toast.error("Nie stać cię na zakup tej usługi");
    }

    toast.success("Usługa została zakupiona pomyślnie");
  };

  const renderChargeOptions = () =>
    shopChargeOptions.map((shopChargeOption) => (
      <div className="text-gray-400" key={shopChargeOption.shop_charge_id}>
        {shopChargeOption.shop_charge_name}
      </div>
    ));

  const renderShops = () =>
    shops.map((shop) => (
      <div
        className="bg-inside-bg-light p-8 text-center text-gray-400"
        key={shop.shop_id}
      >
        <h1>{shop.shop_name}</h1>
        <h5 className="mt-3 mb-3">
          Cena: <b>{shop.shop_price}</b> punktów premium
        </h5>

        <div className="mx-auto block w-64">
          <Button
            onClick={() => handleShopBuy(shop)}
            disabled={player.premiumPoints >= shop.shop_price ? false : true}
          >
            Zakup usługę
          </Button>
        </div>
      </div>
    ));

  return (
    <Layout>
      <Panel title="Sklep premium">
        <div className="p-10">
          <div className="flex justify-between">
            <h1 className="self-center text-xl font-bold text-gray-200">
              Ilośc punktów premium: <b>{player ? player.premiumPoints : ""}</b>
            </h1>
            <div className="w-64 self-center">
              <Link to="shop/charge">
                <Button>Doładuj punkty premium</Button>
              </Link>
            </div>
          </div>
          <Spacer />
          {/* {shopChargeOptions.length ? renderChargeOptions() : ""} */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {shops.length ? renderShops() : ""}
          </div>
        </div>
      </Panel>
    </Layout>
  );
};

export default ShopView;
