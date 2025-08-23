# Chess: Living Nightmares Edition

## Project Overview

This document describes the rules for playing a chess match using the **"Living Nightmares"** army.  
In addition to the standard chess rules, the following **special rules** and **piece abilities** apply.

This repository contains the game rules, and technical details for building the web application.

## Game Rules

### Board
- Size: 8x8 grid, same as classic chess.

## Special General Rules

These rules apply to both players and alter the game flow to make it more chaotic and strategic.

### 1. Dream Energy (DE)

Each player starts the game with **10 Dream Energy (DE) points**.

- **Usage:** Activating a piece’s **Special Active Ability** consumes DE, as specified in its description. If a player does not have enough DE, the ability cannot be used.
- **Recovery:** A player regains Dream Energy in the following ways:
  - **+2 DE** when one of their pieces captures an enemy piece.
  - **+8 DE** if, instead of moving, the player chooses to **"Meditate"**, skipping their movement turn. A player cannot meditate while in check.

### 2. Nightmare Phases

The match unfolds in escalating phases, each unlocked as turns progress.
Every new phase introduces an additional global rule that stacks with the previous ones, steadily pushing the game into chaos.

- **Turns 1–4: The Calm Before the Storm**  
  - Standard chess rules only. No abilities are active yet.

- **Turns 4–40: Creeping Shadows**  
  - All pieces gain their passive and active abilities.

- **Turns 41–60: Unstable Ground**  
  - At the start of each turn, a random square becomes **"dangerous"** for that turn. 
  - Any piece ending its move on that square is immobilized for its next turn.

- **Turn 61 and beyond: Total Chaos**  
  - Each player’s Dream Energy is tripled.
  - All active abilities are fully refreshed and can be used again.

### 3. Corrupted Promotion

When a **Psychic Larva** (Pawn) reaches the 8th rank, it does not follow normal chess promotion.  
Instead, the player must choose one of the following outcomes:

1. **Summon a Nightmare:** Remove the Larva and return *Living Nightmare* piece (Matriarch, Hunter, Doppelgänger, or Leaper) to the promotion square.
2. **Infestation:** Remove the Larva and place **three new Psychic Larvae** on any three empty squares of the player's starting row.

---

**Note:** Standard chess notation and rules still apply unless explicitly overridden by these special abilities.

---

## The Pieces: Living Nightmares

| Name | Quantity | Default Movement | Special Active Ability | Cost (DE) | Passive Ability |
|------|----------|------------------|------------------------|-----------|-----------------|
| **Sleepless Eye** *(King)* | 1 | King | **Terrifying Gaze**: Twice per game, target an enemy piece in a straight or diagonal line (no obstacles). That piece must move 1 square away from the Eye if possible. Cannot be used to deliver check. | 2 | **Field of Fear**: Enemy pieces adjacent to the Eye cannot use their active abilities. |
| **Phantom Matriarch** *(Queen)* | 1 | Queen | **Ethereal Passage**: Move ignoring all pieces (friend or foe), landing on an empty square. Cannot capture during this move. | 3 | **Funeral Wail**: When captured, the capturing piece moves only 1 square per turn for its next 2 turns. |
| **Shadow Hunter** *(Rook)* | 2 | Rook | **Shadow Leap**: Once per game, if the other allied Hunter is captured, teleport to its starting square. | 2 | **Camouflage**: If it doesn’t move for an entire turn, it cannot be captured on the opponent’s next turn. |
| **Doppelgänger** *(Bishop)* | 2 | Bishop | **Mimicry**: If adjacent to another piece (friend or foe, excluding the King), copy its *default movement* for that turn. | 2 | **Unstable Form**: After capturing, must immediately move 1 additional legal square if possible. |
| **Phobic Leaper** *(Knight)* | 2 | Knight | **Terror Leap**: Make a long jump in an L-shape of 3×2 squares instead of 2×1. Cannot capture the Sleepless Eye nor the Phantom Matriarch. | 3 | **Fearful Terrain**: Squares the Leaper attacks are “uneasy”. If a sliding piece starts inside the Leaper’s attack range and moves through an uneasy square to exit that range, it must spend 1 Dream Energy to complete the move. |
| **Psychic Larva** *(Pawn)* | 8 | Pawn | **Whispering Swarm**: If one friendly Psychic Larva has been captured by the enemy, you may summon one new Larva on an empty square horizontally adjacent to this piece. | 2 | **Psychic Gateway**: When two Larvas are aligned diagonally with exactly one empty square between them, that square becomes a 'psychic gateway'. Any friendly piece moving into it may immediately move again as if it had just started its turn. |

---

## Technical Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript.
- **Backend**: Node.js, Next.js API routes, TypeScript.
- **Realtime Communication**: WebSockets (Socket.IO recommended).
- **Database**: Oracle MySQL with Prisma ORM.
- **API Type**: REST APIs for core user and match management, WebSocket events for real-time gameplay.
- **Hosting Suggestions**:  
  - Frontend: Vercel  
  - Backend WS server: Render, Fly.io, Railway  
  - DB: Oracle MySQL cloud or equivalent  

## License

This project is for personal and educational use. Contact the author for commercial licensing.

---

*Created by Gioele Spata – August 2025*