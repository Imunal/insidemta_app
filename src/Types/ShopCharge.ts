import { DateTime } from "luxon";

export type ShopCharge = {
  shop_charge_id: number;
  shop_charge_name: string;
  shop_charge_value: number;
  shop_charge_stripe_price: number;
  shop_charge_sms_price: number;
  shop_charge_created_at: DateTime;
  shop_charge_updated_at: DateTime;
};
