package controller;

import client.MapleCharacter;

public class BossentryController {
    public static BossentryController instance = new BossentryController();

    private BossentryController() { }

    public static BossentryController getInstance() {
        return instance;
    }

    /**
     *
     * Return Values
     * 0 - For no entries
     * 1 - Has entries
     * 2 - Invalid state
     */
    private int checkEntries(MapleCharacter mapleCharacter) {
        int entryState = 2;

        

        return entryState;
    }
}
