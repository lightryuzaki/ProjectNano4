package config;

import net.server.Server;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigLoader {
    public static ConfigLoader Instance = null;
    private ConfigLoader () { }
    public static ConfigLoader getInstance() {
        if (Instance == null) {
            Instance = new ConfigLoader();
        }
        return Instance;
    }

    public static void LoadServerConfig() {
        System.out.println("Loading Server Configuration...");
        ServerConfig serverConfig;
        ServerConfig.Database databaseConfig;

        String serverMode = LoadServerMode();

        Properties serverProps = new Properties();
        try {
            serverProps.load(new FileInputStream("config/server.properties"));

            String hostname = serverProps.getProperty(serverMode + ".hostname");
            Integer port = new Integer(serverProps.getProperty(serverMode + ".port"));
            Boolean java8 = new Boolean(serverProps.getProperty(serverMode + ".java8").equalsIgnoreCase("true"));
            Boolean shutdownHook = new Boolean(serverProps.getProperty(serverMode + ".shutdownhook").equalsIgnoreCase("true"));

            String dbHostname = serverProps.getProperty(serverMode + ".database.hostname");
            String dbUrl = ConstructDBUrl(dbHostname);
            String dbUser = serverProps.getProperty(serverMode + ".database.user");
            String dbPassword = serverProps.getProperty(serverMode + ".database.password");

            serverConfig = new ServerConfig();
            serverConfig.setHostname(hostname);
            serverConfig.setPort(port);
            serverConfig.setJava8(java8);
            serverConfig.setShutdownHook(shutdownHook);
            databaseConfig = new ServerConfig.Database(dbUrl, dbUser, dbPassword);

            Server.getInstance().ServerConfig = serverConfig;
            Server.getInstance().DatabaseConfig = databaseConfig;

            System.out.println("Server Configuration Loaded" + "\r\n");
            System.out.println("-------- Server Configuration --------");
            System.out.println("Server Mode: " + serverMode);
            System.out.println("Hostname: " + hostname);
            System.out.println("Port: " + port);
            System.out.println("DB URL: " + dbUrl);
            System.out.println("DB User: " + dbUser);
            System.out.println("--------------------------------------" + "\r\n");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            System.out.println("ERROR: Failed to find server.properties file.");
            System.exit(64);
        } catch (IOException ex) {
            ex.printStackTrace();
            System.out.println("ERROR: Could not read from server.properties file. There could be a permissions issue.");
            System.exit(65);
        }
    }

    private static String LoadServerMode() {
        final String DEFAULT_SERVER_MODE = "local";
        String serverMode = System.getenv("MODE");

        if (serverMode == null) {
            serverMode = DEFAULT_SERVER_MODE;
            System.out.println("WARNING: Environment is null. Defaulting to local configuration.");
        } else if (
                !serverMode.equalsIgnoreCase("local") &&
                        !serverMode.equalsIgnoreCase("production")
        ) {
            serverMode = DEFAULT_SERVER_MODE;
            System.out.println("WARNING: Environment is not valid. Defaulting to local configuration.");
        }

        return serverMode;
    }

    private static String ConstructDBUrl(String hostname) {
        final String JDBC_PROTOCOL = "jdbc";
        final String DB_DEFAULT_DRIVER_NAME = "mysql";
        final String DB_DEFAULT_PORT = "3306";
        final String DB_NAME = "projectnano";

        String dbUrl = new StringBuilder()
            .append(JDBC_PROTOCOL + ":")
            .append(DB_DEFAULT_DRIVER_NAME + ":")
            .append("//")
            .append(hostname + ":")
            .append(DB_DEFAULT_PORT + "/")
            .append(DB_NAME)
            .toString();

        return dbUrl;
    }
}
