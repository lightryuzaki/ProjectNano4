package entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "bossentries")
@NamedQueries({
    @NamedQuery(
            name = "findBossentriesByCharacterid",
            query = "FROM Bossentries b where b.characterid = :characterid"
    )
})
@Data
public class Bossentries {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int characterid;
    private int zakum;
    private int horntail;
    private int showaboss;
    private int papulatus;
    private int scarlion;
    private int pinkbean;

    @Column(name = "chaos_zakum")
    private int chaosZakum;

    @Column(name = "chaos_horntail")
    private int chaosHorntail;
}
