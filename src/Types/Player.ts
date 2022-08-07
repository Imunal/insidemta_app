import { Vehicle } from "./Vehicle";
import { Penaltie } from "./Penaltie";
import { Organization } from "./Organization";
import { RealEstate } from "./RealEstate";

export type Player = {
  UID: number;
  login: string;
  email: string;
  username: string;
  usernameRP: string;
  created: Date;
  gold: Date;
  diamond: Date;
  skin: number;
  health: number;
  money: string;
  bankmoney: string;
  online: string;
  lastOnline: Date;
  personalToken: string;
  lastNameChange: Date;
  lastRPNameChange: Date;
  cardPlays: number;
  vehicleLimit: number;
  houseLimit: number;

  vehicles?: Vehicle[];
  penalties?: Penaltie[];
  organizations?: Organization[];
  realestates?: RealEstate[];
};
