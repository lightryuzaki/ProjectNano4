package repository;

import entity.Bossentries;
import exception.*;
import org.hibernate.*;
import server.expeditions.MapleExpeditionType;
import utility.HibernateUtil;

import java.util.*;

public class BossentriesRepository {
    public static void SetEntriesForAll(int value) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            ScrollableResults bossentriesResults = session.createQuery("FROM Bossentries").scroll(ScrollMode.FORWARD_ONLY);

            int rowsUpdated = 0;
            while(bossentriesResults.next()) {
                Bossentries bossentries = (Bossentries) bossentriesResults.get(0);
                bossentries.setZakum(value);
                bossentries.setHorntail(value);
                bossentries.setShowaboss(value);
                bossentries.setPapulatus(value);
                bossentries.setScarlion(value);
                bossentries.setPinkbean(value);
                bossentries.setChaosZakum(value);
                bossentries.setChaosHorntail(value);

                session.update(bossentries);

                if(rowsUpdated % 10 == 0) {
                    session.flush();
                    session.clear();
                }

                rowsUpdated++;
            }

            System.out.println("Entries have been set in `bossentries` table. Number of Rows Updated: " + rowsUpdated);

            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void CreateNewEntryForCharacterId(int characterId, int value) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();

            Bossentries newCharacterBossentry = new Bossentries();
            newCharacterBossentry.setCharacterid(characterId);
            newCharacterBossentry.setZakum(value);
            newCharacterBossentry.setHorntail(value);
            newCharacterBossentry.setShowaboss(value);
            newCharacterBossentry.setPapulatus(value);
            newCharacterBossentry.setScarlion(value);
            newCharacterBossentry.setPinkbean(value);
            newCharacterBossentry.setChaosZakum(value);
            newCharacterBossentry.setChaosHorntail(value);

            session.save(newCharacterBossentry);
            transaction.commit();
        } catch (Exception e) {
            System.out.println("ERROR: Failed to create new row for new character in `bossentries` table. CharacterId: " + characterId);
            e.printStackTrace();
        }
    }

    public static Bossentries GetAllEntriesForCharacterId(int characterId) throws ZeroRowsFetchedException {
        Bossentries bossentries = null;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            bossentries = (Bossentries)session.getNamedQuery("findBossentriesByCharacterid")
                    .setParameter("characterid", characterId)
                    .setMaxResults(1)
                    .uniqueResult();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (bossentries == null) {
            throw new ZeroRowsFetchedException("ERROR: Could not get entries for character in `bossentries` table. CharacterId: " + characterId);
        }

        return bossentries;
    }

    public static void GiveEntryToAllBossesToCharacterId(int characterId, int value) throws ZeroRowsFetchedException, NonUniqueResultException {
        Bossentries bossentries;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();

            bossentries = (Bossentries)session.getNamedQuery("findBossentriesByCharacterid")
                .setParameter("characterid", characterId)
                .uniqueResult();

            if (bossentries == null) {
                throw new ZeroRowsFetchedException("ERROR: Could not retrieve bossentries for character. CharacterId: " + characterId);
            }

            bossentries.setZakum(bossentries.getZakum() + value);
            bossentries.setHorntail(bossentries.getHorntail() + value);
            bossentries.setShowaboss(bossentries.getShowaboss() + value);
            bossentries.setPapulatus(bossentries.getPapulatus() + value);
            bossentries.setScarlion(bossentries.getScarlion() + value);
            bossentries.setPinkbean(bossentries.getPinkbean() + value);
            bossentries.setChaosZakum(bossentries.getChaosZakum() + value);
            bossentries.setChaosHorntail(bossentries.getChaosHorntail() + value);

            session.update(bossentries);

            transaction.commit();
        } catch (NonUniqueResultException e) {
            e.printStackTrace();
        }
    }

    public static void GiveEntryToBossToCharacterId(int characterId, int value, MapleExpeditionType mapleExpeditionType) throws ZeroRowsFetchedException, NonUniqueResultException {
        Bossentries bossentries;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();

            bossentries = (Bossentries)session.getNamedQuery("findBossentriesByCharacterid")
                .setParameter("characterid", characterId)
                .uniqueResult();

            if (bossentries == null) {
                throw new ZeroRowsFetchedException("ERROR: Could not retrieve bossentries for character. CharacterId: " + characterId);
            }

            switch (mapleExpeditionType) {
                case ZAKUM:
                    bossentries.setZakum(bossentries.getZakum() + value);
                    break;
                case HORNTAIL:
                    bossentries.setHorntail(bossentries.getHorntail() + value);
                    break;
                case SHOWA:
                    bossentries.setShowaboss(bossentries.getShowaboss() + value);
                    break;
                case PAPULATUS:
                    bossentries.setPapulatus(bossentries.getPapulatus() + value);
                    break;
                case SCARGA:
                    bossentries.setScarlion(bossentries.getScarlion() + value);
                    break;
                case PINKBEAN:
                    bossentries.setPinkbean(bossentries.getPinkbean() + value);
                    break;
                case CHAOS_ZAKUM:
                    bossentries.setChaosZakum(bossentries.getChaosZakum() + value);
                    break;
                case CHAOS_HORNTAIL:
                    bossentries.setChaosHorntail(bossentries.getChaosHorntail() + value);
                    break;
            }

            session.update(bossentries);

            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void DecrementEntriesForParty(List<Integer> mapleCharacterIds, MapleExpeditionType mapleExpeditionType) throws DecrementBossentryZeroOrLessException, UpdatedRowCountMismatchException {
        int rowsUpdated = 0;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();

            for(Integer mapleCharacterId : mapleCharacterIds) {
                Bossentries bossentries = (Bossentries)session.getNamedQuery("findBossentriesByCharacterid")
                    .setParameter("characterid", mapleCharacterId)
                    .uniqueResult();

                switch (mapleExpeditionType) {
                    case ZAKUM:
                        if (bossentries.getZakum() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setZakum(bossentries.getZakum() - 1);
                        break;
                    case HORNTAIL:
                        if (bossentries.getHorntail() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setHorntail(bossentries.getHorntail() - 1);
                        break;
                    case SHOWA:
                        if (bossentries.getShowaboss() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setShowaboss(bossentries.getShowaboss() - 1);
                        break;
                    case PAPULATUS:
                        if (bossentries.getPapulatus() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setPapulatus(bossentries.getPapulatus() - 1);
                        break;
                    case SCARGA:
                        if (bossentries.getScarlion() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setScarlion(bossentries.getScarlion() - 1);
                        break;
                    case PINKBEAN:
                        if (bossentries.getPinkbean() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setPinkbean(bossentries.getPinkbean() - 1);
                        break;
                    case CHAOS_ZAKUM:
                        if (bossentries.getChaosZakum() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setChaosZakum(bossentries.getChaosZakum() - 1);
                        break;
                    case CHAOS_HORNTAIL:
                        if (bossentries.getChaosHorntail() <= 0) {
                            throw new DecrementBossentryZeroOrLessException("ERROR: Attempted to decrement character that is at or less than zero entries. Characterid: " + bossentries.getCharacterid());
                        }
                        bossentries.setChaosHorntail(bossentries.getChaosHorntail() - 1);
                        break;
                }
                session.update(bossentries);
                rowsUpdated++;
            }

            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (mapleCharacterIds.size() != rowsUpdated) {
            StringBuilder errorMessageBuilder = new StringBuilder("ERROR: Actual updated rows do not match party size in `bossentries` table. CharacterIds: ");
            for (Integer characterId : mapleCharacterIds) {
                errorMessageBuilder.append(characterId + " ");
            }
            throw new UpdatedRowCountMismatchException(errorMessageBuilder.toString());
        }
    }

    public static List<Bossentries> GetAllEntriesForParty(List<Integer> mapleCharacterIds) throws MapleCharacterIdsNotFoundException, RowsRetrievedWithPartySizeMismatchException {
        List<Bossentries> bossentriesList = new ArrayList<>();

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            for(Integer mapleCharacterId : mapleCharacterIds) {
                Bossentries bossentries = (Bossentries)session.getNamedQuery("findBossentriesByCharacterid")
                        .setParameter("characterid", mapleCharacterId)
                        .uniqueResult();
                bossentriesList.add(bossentries);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (bossentriesList.isEmpty()) {
            StringBuilder errorMessageBuilder = new StringBuilder("ERROR: Could not find any matching characterids in `bossentries` table. CharacterIds: ");
            for (Integer characterId : mapleCharacterIds) {
                errorMessageBuilder.append(characterId + " ");
            }
            throw new MapleCharacterIdsNotFoundException(errorMessageBuilder.toString());
        }

        if (mapleCharacterIds.size() != bossentriesList.size()) {
            StringBuilder errorMessageBuilder = new StringBuilder("ERROR: Actual rows in database does not match party size in `bossentries` table. CharacterIds: ");
            for (Integer characterId : mapleCharacterIds) {
                errorMessageBuilder.append(characterId + " ");
            }
            throw new RowsRetrievedWithPartySizeMismatchException(errorMessageBuilder.toString());
        }

        return bossentriesList;
    }
}