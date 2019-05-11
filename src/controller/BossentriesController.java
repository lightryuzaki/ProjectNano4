package controller;


import client.MapleCharacter;
import entity.Bossentries;
import exception.DecrementBossentryZeroOrLessException;
import exception.UpdatedRowCountMismatchException;
import exception.ZeroRowsFetchedException;
import repository.BossentriesRepository;
import server.expeditions.MapleExpeditionType;

import java.util.ArrayList;
import java.util.List;

public class BossentriesController {
    private static BossentriesController Instance = null;

    private BossentriesController() { }

    public static BossentriesController getInstance() {
        if (Instance == null) {
            Instance = new BossentriesController();
        }
        return Instance;
    }

    /**
     * Integer Codes
     * 0 - No Error
     * 1 - No Entries Left for Player
     * 2 - Bossentries object was null
     * 3 - Player had no row in database
     */
    public int playerHasEntriesLeftForExpedition(MapleCharacter mapleCharacter, MapleExpeditionType mapleExpeditionType) {
        Bossentries bossentries;
        try {
            bossentries = BossentriesRepository.GetAllEntriesForCharacterId(mapleCharacter.getId());
        } catch (ZeroRowsFetchedException e) {
            System.out.println("ERROR: Unable to fetch boss entries for character. CharacterId: " + mapleCharacter.getId());
            e.printStackTrace();
            return 3;
        }

        if (bossentries == null) {
            return 2;
        }

        switch (mapleExpeditionType) {
            case ZAKUM:
                if (bossentries.getZakum() == 0) return 1;
                break;
            case HORNTAIL:
                if (bossentries.getHorntail() == 0) return 1;
                break;
            case SHOWA:
                if (bossentries.getShowaboss() == 0) return 1;
                break;
            case PAPULATUS:
                if (bossentries.getPapulatus() == 0) return 1;
                break;
            case SCARGA:
                if (bossentries.getScarlion() == 0) return 1;
                break;
            case PINKBEAN:
                if (bossentries.getPinkbean() == 0) return 1;
                break;
            case CHAOS_ZAKUM:
                if (bossentries.getChaosZakum() == 0) return 1;
                break;
            case CHAOS_HORNTAIL:
                if (bossentries.getChaosHorntail() == 0) return 1;
                break;
        }

        return 0;
    }

    /**
     * Integer Codes
     * 0 - No Error
     * 1 - No Entries Left for Party
     * 2 - Bossentries object was empty
     * 3 - Player had no row in database
     */
    public int partyHasEntriesLeftForExpedition(List<MapleCharacter> mapleCharacterList, MapleExpeditionType mapleExpeditionType) {
        List<Bossentries> bossentriesList;

        List<Integer> mapleCharacterIdList = new ArrayList<>();
        for (MapleCharacter mapleCharacter : mapleCharacterList) {
            mapleCharacterIdList.add(mapleCharacter.getId());
        }

        try {
            bossentriesList = BossentriesRepository.GetAllEntriesForParty(mapleCharacterIdList);
        } catch (ZeroRowsFetchedException e) {
            System.out.println("ERROR: Unable to fetch boss entries for party. ");
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Characters: ");
            for (MapleCharacter mapleCharacter : mapleCharacterList) {
                stringBuilder.append(mapleCharacter.getName());
            }
            System.out.println(stringBuilder.toString());
            e.printStackTrace();
            return 3;
        }

        if (bossentriesList.size() == 0) {
            return 2;
        }

        for (Bossentries bossentries : bossentriesList) {
            switch (mapleExpeditionType) {
                case ZAKUM:
                    if (bossentries.getZakum() == 0) return 1;
                    break;
                case HORNTAIL:
                    if (bossentries.getHorntail() == 0) return 1;
                    break;
                case SHOWA:
                    if (bossentries.getShowaboss() == 0) return 1;
                    break;
                case PAPULATUS:
                    if (bossentries.getPapulatus() == 0) return 1;
                    break;
                case SCARGA:
                    if (bossentries.getScarlion() == 0) return 1;
                    break;
                case PINKBEAN:
                    if (bossentries.getPinkbean() == 0) return 1;
                    break;
                case CHAOS_ZAKUM:
                    if (bossentries.getChaosZakum() == 0) return 1;
                    break;
                case CHAOS_HORNTAIL:
                    if (bossentries.getChaosHorntail() == 0) return 1;
                    break;
            }
        }

        return 0;
    }

    /**
     * Integer Codes
     * 0 - No Error
     * 1 - Exception was thrown
     */
    public int decrementEntriesForParty(List<MapleCharacter> players, MapleExpeditionType mapleExpeditionType) {
        long startTime = System.currentTimeMillis();

        List<Integer> mapleCharacterIds = new ArrayList<>();
        for (MapleCharacter mapleCharacter : players) {
            mapleCharacterIds.add(mapleCharacter.getId());
        }

        boolean success = false;
        try {
            BossentriesRepository.DecrementEntriesForParty(mapleCharacterIds, mapleExpeditionType);
            success = true;
        } catch (DecrementBossentryZeroOrLessException | UpdatedRowCountMismatchException e) {
            System.out.println("ERROR: DecrementEntriesForParty");
            e.printStackTrace();
            return 1;
        } finally {
            String status = success ? "SUCCESS" : "FAILED";
            StringBuilder playerNamesBuilder = new StringBuilder("Players: ");
            for (MapleCharacter mapleCharacter : players) {
                playerNamesBuilder.append(mapleCharacter.getName() + " ");
            }
            System.out.println("Task: Decrement Entries, Status: " + status + ", ExecutionTime: " + (System.currentTimeMillis() - startTime) + "ms, " +
                "Boss: " + mapleExpeditionType.toString() + " " + playerNamesBuilder.toString());
        }

        return 0;
    }
}
