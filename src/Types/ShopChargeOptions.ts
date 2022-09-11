import { DateTime } from "luxon";

export type ShopChargeOptions = {
  shop_charge_option_id: number;
  shop_charge_option_name: string;
  shop_charge_option_value: number;
  shop_charge_option_price: number;
  shop_charge_option_charge_id: number;
  shop_charge_created_at: DateTime;
  shop_charge_updated_at: DateTime;
};
