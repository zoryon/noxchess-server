import { PieceType } from "@/types/index.js";

export const PIECES: Record<string, PieceType> = {
    SLEEPLESS_EYE: {
        name: 'Sleepless Eye',
        quantity: 1,
        defaultMovement: "king",
        activeAbility: {
            name: "Terrifying Gaze",
            trigger: "active",
            cost: 2,
            maxUses: 2,
            description: "Force an enemy piece 1 square away (no obstacles, not check)",
            // Note: effect is implemented in engine/abilities.ts; this object is used for UI/metadata only.
            effect: () => {}
        },
        passiveAbility: {
            name: "Field of Fear",
            trigger: "passive",
            description: "Enemy pieces adjacent cannot use active abilities",
            // Enforced in engine/abilities.ts: adjacent enemies cannot activate abilities (radius doubles in Chaos)
            effect: () => {}
        }
    },
    PHANTOM_MATRIARCH: {
        name: "Phantom Matriarch",
        quantity: 1,
        defaultMovement: "queen",
        activeAbility: {
            name: "Ethereal Passage",
            trigger: "active",
            cost: 5,
            maxUses: 2,
            description: "Move on a legal square ignoring all pieces (cannot capture nor check the Sleepless Eye)",
            // Implemented in engine/abilities.ts
            effect: () => {}
        },
        passiveAbility: {
            name: "Funeral Wail",
            trigger: "passive",
                description: "On capture, captor loses 1 Dream Energy at the start of its turn for 3 turns",
            // Implemented via wailDrainRemaining status + per-turn drain in engine/tx-helpers.ts
            effect: () => {}
        }
    },
    SHADOW_HUNTER: {
        name: "Shadow Hunter",
        quantity: 2,
        defaultMovement: "rook",
        activeAbility: {
            name: "Shadow Bind",
            trigger: "active",
            cost: 3,
            maxUses: 1,
            description: "Targets an enemy piece on an adjacent diagonal square. That piece cannot move on the opponent's next turn.",
            // Implemented in engine/abilities.ts
            effect: () => {}
        },
        passiveAbility: {
            name: "Camouflage",
            trigger: "passive",
            description: "If not moved, it cannot be captured on the opponent's next turn",
            // Implemented in engine/validator.ts: set camouflagedUntilTurn for idle Hunters
            effect: () => {}
        }
    },
    DOPPELGANGER: {
        name: "Doppelgänger",
        quantity: 2,
        defaultMovement: "bishop",
        activeAbility: {
            name: "Mimicry",
            trigger: "active",
            cost: 2,
            maxUses: 4,
            description: "Copy the default movement of an adjacent piece (excluding the King), for one turn",
            // Implemented in engine/abilities.ts
            effect: () => {}
        },
        passiveAbility: {
            name: "Unstable Form",
            trigger: "passive",
            description: "After capturing, must immediately move 1 additional legal square if possible (cannot capture the enemy's sleepless eye)",
            // Implemented in engine/validator.ts: require an immediate extra step after a capture
            effect: () => {}
        }
    },
    PHOBIC_LEAPER: {
        name: "Phobic Leaper",
        quantity: 2,
        defaultMovement: "knight",
        activeAbility: {
            name: "Terror Leap",
            trigger: "active",
            cost: 3,
            maxUses: 4,
            description: "Make a long jump in an L-shape of 3x2 squares",
            // Implemented in engine/abilities.ts
            effect: () => {}
        },
        passiveAbility: {
            name: "Mind Parasite",
            trigger: "passive",
            description: "Enemy pieces within attack range have their maximum movement reduced by 1 square",
            // Implemented in engine/validator.ts: reduce sliding range; block pawn double-step when under a Leaper's attack
            effect: () => {}
        }
    },
    PSYCHIC_LARVA: {
        name: "Psychic Larva",
        quantity: 8,
        defaultMovement: "pawn",
        activeAbility: {
            name: "Psychic Burst",
            trigger: "active",
            cost: 1,
            maxUses: 1,
            description: "When capturing, enemy pieces adjacent to the captured piece cannot move next turn",
            // Implemented in engine/abilities.ts and enforced on capture in engine/validator.ts
            effect: () => {}
        },
        passiveAbility: {
            name: "Mental Echo",
            trigger: "passive",
            description: "When captured, the captor must declare its next intended move (if it plans to move that piece) at the start of its turn.",
            // Implemented across engine/validator.ts and socket in game.ts via echo:declare
            effect: () => {}
        }
    },
};