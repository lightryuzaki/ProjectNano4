package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import exception.ZeroRowsFetchedException;
import repository.BossentriesRepository;
import entity.Bossentries;

public class BossentriesCommand extends Command {
    {
        setDescription("Boss entries left for the day.");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter mapleCharacter = c.getPlayer();
        Bossentries bossentries = null;
        try {
            bossentries = BossentriesRepository.GetAllEntriesForCharacterId(mapleCharacter.getId());
        } catch (ZeroRowsFetchedException e) {
            System.out.println("ERROR: Command !bossentries. CharacterId returned no rows. Character: " + mapleCharacter.getName());
        }
        if (bossentries == null) {
            mapleCharacter.dropMessage("Your boss entries cannot be accessed right now. Please contact a GM.");
        } else {
            StringBuilder bossentriesBuilder = new StringBuilder();
            bossentriesBuilder.append("Zakum: " + bossentries.getZakum());
            bossentriesBuilder.append(" Horntail: " + bossentries.getHorntail());
            bossentriesBuilder.append(" Showaboss: " + bossentries.getShowaboss());
            bossentriesBuilder.append(" Scarlion: " + bossentries.getScarlion());
            bossentriesBuilder.append(" Papulatus: " + bossentries.getPapulatus());
            bossentriesBuilder.append(" Pinkbean: " + bossentries.getPinkbean());
            // TODO: Hidden for now. Will be added in the future
            //bossentriesBuilder.append("Chaos Zakum: " + bossentries.getChaosZakum());
            //bossentriesBuilder.append("Chaos Horntail: " + bossentries.getChaosHorntail());
            mapleCharacter.dropMessage(bossentriesBuilder.toString());
        }
    }
}
