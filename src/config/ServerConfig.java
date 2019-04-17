package config;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class ServerConfig {
    public String hostname;
    public Integer port;
    public Boolean java8;
    public Boolean shutdownHook;

    @Data(staticConstructor="of")
    @AllArgsConstructor
    public static final class Database {
        public final String url;
        public final String user;
        public final String password;
    }
}
