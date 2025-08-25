DROP DATABASE IF EXISTS `lnmchess`;
CREATE DATABASE `lnmchess`;
USE `lnmchess`;

CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `username` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
    `passwordHash` text COLLATE utf8mb4_unicode_ci NOT NULL,
    `isEmailVerified` tinyint(1) DEFAULT '0',
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`),
    UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `device` (
    `id` int NOT NULL AUTO_INCREMENT,
    `userId` int NOT NULL,
    `userAgent` text COLLATE utf8mb4_unicode_ci NOT NULL,
    `deviceType` enum('desktop','mobile','tablet','bot','unknown') COLLATE utf8mb4_unicode_ci DEFAULT 'unknown',
    `firstSeenAt` datetime DEFAULT CURRENT_TIMESTAMP,
    `lastSeenAt` datetime DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    CONSTRAINT `device_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `refresh_token` (
    `id` int NOT NULL AUTO_INCREMENT,
    `userId` int NOT NULL,
    `deviceId` int NOT NULL,
    `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `ipAddress` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `country` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `region` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    `expiresAt` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `token` (`token`),
    KEY `userId` (`userId`),
    KEY `deviceId` (`deviceId`),
    CONSTRAINT `refresh_token_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
    CONSTRAINT `refresh_token_ibfk_2` FOREIGN KEY (`deviceId`) REFERENCES `device` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `match` (
    `id` int NOT NULL AUTO_INCREMENT,
    `status` enum('ONGOING','FINISHED') COLLATE utf8mb4_unicode_ci NOT NULL,
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    `winnerId` int DEFAULT NULL,
    `turn` int NOT NULL DEFAULT 1,
    PRIMARY KEY (`id`),
    CONSTRAINT `match_ibfk_1` FOREIGN KEY (`winnerId`) REFERENCES `user` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `match_move` (
    `id` int NOT NULL AUTO_INCREMENT,
    `matchId` int NOT NULL,
    `playerId` int,
    `moveNumber` int NOT NULL,
    `fromX` tinyint NOT NULL,
    `fromY` tinyint NOT NULL,
    `toX` tinyint NOT NULL,
    `toY` tinyint NOT NULL,
    `pieceType` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    `capturedPieceType` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `specialAbilityUsed` tinyint DEFAULT '0',
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `matchId` (`matchId`),
    KEY `playerId` (`playerId`),
    CONSTRAINT `match_move_ibfk_1` FOREIGN KEY (`matchId`) REFERENCES `match` (`id`) ON DELETE CASCADE,
    CONSTRAINT `match_move_ibfk_2` FOREIGN KEY (`playerId`) REFERENCES `user` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `match_piece` (
    `id` int NOT NULL AUTO_INCREMENT,
    `matchId` int NOT NULL,
    `playerId` int,
    `type` enum('SLEEPLESS_EYE','PHANTOM_MATRIARCH','SHADOW_HUNTER','DOPPELGANGER','PHOBIC_LEAPER','PSYCHIC_LARVA') COLLATE utf8mb4_unicode_ci NOT NULL,
    `posX` tinyint DEFAULT NULL,
    `posY` tinyint DEFAULT NULL,
    `usedAbility` tinyint DEFAULT '0',
    `captured` tinyint DEFAULT '0',
    `status` JSON,
    PRIMARY KEY (`id`),
    KEY `matchId` (`matchId`),
    KEY `playerId` (`playerId`),
    CONSTRAINT `match_piece_ibfk_1` FOREIGN KEY (`matchId`) REFERENCES `match` (`id`) ON DELETE CASCADE,
    CONSTRAINT `match_piece_ibfk_2` FOREIGN KEY (`playerId`) REFERENCES `user` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `match_player` (
    `id` int NOT NULL AUTO_INCREMENT,
    `userId` int,
    `matchId` int NOT NULL,
    `color` enum('WHITE','BLACK') COLLATE utf8mb4_unicode_ci NOT NULL,
    `dreamEnergy` int NOT NULL DEFAULT 10,
    PRIMARY KEY (`id`),
    KEY `matchId` (`matchId`),
    KEY `userId` (`userId`),
    CONSTRAINT `match_player_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL,
    CONSTRAINT `match_player_ibfk_2` FOREIGN KEY (`matchId`) REFERENCES `match` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `match_queue` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `status` ENUM('WAITING','MATCHED','CANCELLED') NOT NULL DEFAULT 'WAITING',
    `joinedAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `userId` (`userId`),
    FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Friend system tables
CREATE TABLE `friend_request` (
    `id` int NOT NULL AUTO_INCREMENT,
    `fromUserId` int NOT NULL,
    `toUserId` int NOT NULL,
    `status` ENUM('PENDING','ACCEPTED','DECLINED','CANCELLED') NOT NULL DEFAULT 'PENDING',
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_request_pair` (`fromUserId`,`toUserId`),
    KEY `fromUserId` (`fromUserId`),
    KEY `toUserId` (`toUserId`),
    CONSTRAINT `friend_request_from_fk` FOREIGN KEY (`fromUserId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
    CONSTRAINT `friend_request_to_fk` FOREIGN KEY (`toUserId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `friendship` (
    `id` int NOT NULL AUTO_INCREMENT,
    `userAId` int NOT NULL,
    `userBId` int NOT NULL,
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `unique_friendship_ordered` (`userAId`,`userBId`),
    KEY `userAId` (`userAId`),
    KEY `userBId` (`userBId`),
    CONSTRAINT `friendship_userA_fk` FOREIGN KEY (`userAId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
    CONSTRAINT `friendship_userB_fk` FOREIGN KEY (`userBId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Friend challenge table for directed invites
CREATE TABLE `friend_challenge` (
    `id` int NOT NULL AUTO_INCREMENT,
    `fromUserId` int NOT NULL,
    `toUserId` int NOT NULL,
    `status` ENUM('WAITING','ACCEPTED','DECLINED','CANCELLED','EXPIRED') NOT NULL DEFAULT 'WAITING',
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `fromUserId` (`fromUserId`),
    KEY `toUserId` (`toUserId`),
    CONSTRAINT `friend_challenge_from_fk` FOREIGN KEY (`fromUserId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
    CONSTRAINT `friend_challenge_to_fk` FOREIGN KEY (`toUserId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
