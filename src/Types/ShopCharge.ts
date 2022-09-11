import { DateTime } from "luxon";

import { ShopChargeOptions } from "./ShopChargeOptions";

export type ShopCharge = {
  shop_charge_id: number;
  shop_charge_name: string;
  shop_charge_desc: string;
  shop_charge_created_at: DateTime;
  shop_charge_updated_at: DateTime;
  shop_charge_options: ShopChargeOptions[];
};
