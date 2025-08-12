import { $Enums } from "@/generated/prisma/index.js";
import { PIECES } from "@/constants/index.js";

export type Ability = {
  name: string;
  trigger: "active" | "passive";
  cost?: number;          // Dream Energy cost if active
  maxUses?: number;       // Only for active abilities
  description: string;    // Tooltip or UI
  effect: (ctx: any) => void; // Logic (game context passed in)
};

export type NightmarePieceTypes = 'SLEEPLESS_EYE' | 'PHANTOM_MATRIARCH' | 'SHADOW_HUNTER' | 'DOPPELGANGER' | 'PHOBIC_LEAPER' | 'PSYCHIC_LARVA';

export type MovementKind = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";

export type PieceType = {
  name: string;
  quantity: number;
  defaultMovement: MovementKind | "custom";
  activeAbility?: Ability;
  passiveAbility?: Ability;
};

export type PieceInstance = {
  id: string;
  type: keyof typeof PIECES; // Reference to pieceTypes
  color: Color;
  position: { row: number; col: number };
  abilityUses?: Record<string, number>; // Tracks per ability
  status?: Record<string, any>; // e.g., { immobilizedTurns: 1 }
};

export type DbPiece = {
  id: number;
  matchId: number;
  playerId: number | null;
  type: $Enums.match_piece_type;
  posX: number | null;
  posY: number | null;
  usedAbility: number | null;
  captured: number | null;
  status: any;
};

export type Color = "white" | "black";