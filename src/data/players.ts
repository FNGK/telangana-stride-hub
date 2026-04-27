import p1 from "@/assets/players/player-1.jpg";
import p2 from "@/assets/players/player-2.jpg";
import p5 from "@/assets/players/player-5.jpg";
import p7 from "@/assets/players/player-7.jpg";
import p11 from "@/assets/players/player-11.jpg";
import p23 from "@/assets/players/player-23.jpg";

export type Position = "GK" | "DEF" | "MID" | "FWD";

export interface Player {
  id: string;
  name: string;
  position: Position;
  number: number;
  image: string;
  stats: { apps: number; goals: number; assists: number };
  bio: string;
}

export const players: Player[] = [
  { id: "p1", name: "Rahul Yadav", position: "GK", number: 1, image: p1,
    stats: { apps: 42, goals: 0, assists: 1 }, bio: "Commanding shot-stopper. Wall of the Globe." },
  { id: "p2", name: "Arjun Reddy", position: "DEF", number: 2, image: p2,
    stats: { apps: 38, goals: 3, assists: 4 }, bio: "Right-back with a rocket of a cross." },
  { id: "p5", name: "Vikram Singh", position: "DEF", number: 5, image: p5,
    stats: { apps: 45, goals: 5, assists: 2 }, bio: "Captain. Centre-half. Heart of the defence." },
  { id: "p7", name: "Karthik Naidu", position: "MID", number: 7, image: p7,
    stats: { apps: 40, goals: 8, assists: 12 }, bio: "Playmaker — vision sharper than a Hyderabadi summer." },
  { id: "p11", name: "Sai Kumar", position: "FWD", number: 11, image: p11,
    stats: { apps: 36, goals: 19, assists: 7 }, bio: "Top scorer 2025. Cold finisher in the box." },
  { id: "p23", name: "Manoj Patel", position: "MID", number: 23, image: p23,
    stats: { apps: 33, goals: 4, assists: 9 }, bio: "Engine room. Never stops running." },
];
