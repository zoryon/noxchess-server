import { PIECES } from "@/constants/pieces-constants.js";

// TOP = Black side, BOTTOM = White side
export const STARTING_POSITIONS: Record<keyof typeof PIECES, { white: [number, number][], black: [number, number][] }> = {
    SLEEPLESS_EYE: {
        white: [[4, 0]],   // e.g., E1
        black: [[4, 7]]    // E8
    },
    PHANTOM_MATRIARCH: {
        white: [[3, 0]],   // D1
        black: [[3, 7]]    // D8
    },
    SHADOW_HUNTER: {
        white: [[0, 0], [7, 0]], // A1, H1
        black: [[0, 7], [7, 7]]  // A8, H8
    },
    DOPPELGANGER: {
        white: [[2, 0], [5, 0]], // C1, F1
        black: [[2, 7], [5, 7]]  // C8, F8
    },
    PHOBIC_LEAPER: {
        white: [[1, 0], [6, 0]], // B1, G1
        black: [[1, 7], [6, 7]]  // B8, G8
    },
    PSYCHIC_LARVA: {
        white: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]], // rank 2
        black: [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6]]  // rank 7
    }
};
