package property;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ServerProperties {
    public String hostname;
    public String port;
    public boolean java8;
    public boolean shutdownHook;

    @Getter
    @Setter
    @NoArgsConstructor
    public class Database {
        public String URL;
        public String user;
        public String password;
    }
}
