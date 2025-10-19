/**
 *Submitted for verification at basescan.org on 2025-01-19
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RocketMechanicForMoto {
    // État de la moto
    string public engineType;
    uint public fuelAmount;
    bool public isTrumpModeActive;
    uint public engineUpgradeLevel;

    // Événements pour signaler les actions
    event EngineChanged(string newEngineType);
    event FuelAdded(uint amount);
    event TrumpModeInstalled();
    event EngineUpgraded(uint newUpgradeLevel);

    // Constructeur pour initialiser les valeurs par défaut
    constructor() {
        engineType = "Standard";
        fuelAmount = 0;
        isTrumpModeActive = false;
        engineUpgradeLevel = 0;
    }

    // Fonction pour changer le moteur de la moto
    function changeEngine(string memory newEngineType) public {
        engineType = newEngineType;
        emit EngineChanged(newEngineType);
    }

    // Fonction pour ajouter une quantité aléatoire d'essence
    function addFuel() public {
        uint randomFuel = uint(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender))) % 50 + 1; // Essence entre 1 et 50
        fuelAmount += randomFuel;
        emit FuelAdded(randomFuel);
    }

    // Fonction pour installer le mode "Trump"
    function installTrumpMode() public {
        isTrumpModeActive = true;
        emit TrumpModeInstalled();
    }

    // Fonction pour effectuer une amélioration aléatoire du moteur
    function upgradeEngine() public {
        uint randomUpgrade = uint(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender))) % 10 + 1; // Amélioration entre 1 et 10
        engineUpgradeLevel += randomUpgrade;
        emit EngineUpgraded(engineUpgradeLevel);
    }

    // Fonction pour obtenir l'état actuel de la moto
    function getMotoStatus() public view returns (string memory) {
        string memory trumpStatus = isTrumpModeActive ? "actif" : "inactif";

        return string(abi.encodePacked(
            "Type de moteur: ", engineType,
            ", Quantite d'essence: ", uintToString(fuelAmount),
            ", Mode Trump: ", trumpStatus,
            ", Niveau d'amelioration du moteur: ", uintToString(engineUpgradeLevel), "."
        ));
    }

    // Fonction utilitaire pour convertir un uint en string
    function uintToString(uint v) internal pure returns (string memory) {
        if (v == 0) {
            return "0";
        }
        uint maxLen = 100;
        bytes memory reversed = new bytes(maxLen);
        uint i = 0;
        while (v != 0) {
            uint remainder = v % 10;
            v = v / 10;
            reversed[i++] = bytes1(uint8(48 + remainder));
        }
        bytes memory s = new bytes(i);
        for (uint j = 0; j < i; j++) {
            s[j] = reversed[i - 1 - j];
        }
        return string(s);
    }
}
