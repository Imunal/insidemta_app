import { DateTime } from "luxon";

export type Shop = {
  shop_id: number;
  shop_name: string;
  shop_price: number;
  shop_created_at: DateTime;
  shop_updated_at: DateTime;
};
