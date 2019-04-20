package client.command.commands.gm5;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import exception.UpdatedRowCountMismatchException;
import exception.ZeroRowsFetchedException;
import repository.BossentriesRepository;
import server.expeditions.MapleExpeditionType;

public class GiveBossentriesCommand extends Command {
    {
        setDescription("Give boss entries to a player");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter mapleCharacter = c.getPlayer();

        if (params.length < 2) {
            mapleCharacter.yellowMessage("Syntax: !giveentry <playername> <#> <Optional:boss> | Action: Gives <#> <Optional:boss> entries to <playername>");
            return;
        }

        final String targetPlayerName = params[0];
        int numberToGive = 0;
        try {
            numberToGive = Integer.parseInt(params[1]);
        } catch (NumberFormatException e) {
            mapleCharacter.yellowMessage("Error: You did not enter a number.");
            return;
        }
        String bossName = "";

        final MapleCharacter targetMapleCharacter = c.getChannelServer().getPlayerStorage().getCharacterByName(targetPlayerName);
        if (targetMapleCharacter == null) {
            mapleCharacter.yellowMessage("Error: " + targetPlayerName + " could not be found.");
            return;
        }

        if (params.length == 2) {
            try {
                BossentriesRepository.GiveEntryToAllBossesToCharacterId(targetMapleCharacter.getId(), numberToGive);
            } catch (ZeroRowsFetchedException e) {
                mapleCharacter.yellowMessage("Error: " + targetPlayerName + " could not be found.");
                return;
            } catch (UpdatedRowCountMismatchException e) {
                mapleCharacter.yellowMessage("Error: Could not update " + targetPlayerName);
                return;
            }
        } else if (params.length == 3) {
            bossName = params[2];
            MapleExpeditionType mapleExpeditionType = null;
            if (bossName.equalsIgnoreCase("zakum")) {
                mapleExpeditionType = MapleExpeditionType.ZAKUM;
            } else if (bossName.equalsIgnoreCase("horntail")) {
                mapleExpeditionType = MapleExpeditionType.HORNTAIL;
            } else if (bossName.equalsIgnoreCase("showaboss")) {
                mapleExpeditionType = MapleExpeditionType.SHOWA;
            } else if (bossName.equalsIgnoreCase("scarlion")) {
                mapleExpeditionType = MapleExpeditionType.SCARGA;
            } else if (bossName.equalsIgnoreCase("papulatus")) {
                mapleExpeditionType = MapleExpeditionType.PAPULATUS;
            } else if (bossName.equalsIgnoreCase("pinkbean")) {
                mapleExpeditionType = MapleExpeditionType.PINKBEAN;
            }
            // TODO: Add Chaos Zakum and Chaos Horntail in the future
            if (mapleExpeditionType != null) {
                try {
                    BossentriesRepository.GiveEntryToBossToCharacterId(targetMapleCharacter.getId(), numberToGive, mapleExpeditionType);
                } catch (ZeroRowsFetchedException e) {
                    mapleCharacter.yellowMessage("Error: " + targetPlayerName + " could not be found.");
                    return;
                }
            } else {
                mapleCharacter.yellowMessage("Error: " + bossName + " could not be found. Does that boss have an entry limit?");
                return;
            }
        }

        StringBuilder successMessage = new StringBuilder()
                .append("Successfully gave " + targetPlayerName + " ")
                .append(numberToGive + " ")
                .append(bossName.equalsIgnoreCase("") ? "to all bosses" : bossName + " entries");
        mapleCharacter.dropMessage(successMessage.toString());
        return;
    }
}
