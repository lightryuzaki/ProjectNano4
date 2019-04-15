package controller;

import net.server.Server;
import org.apache.commons.configuration2.YAMLConfiguration;
import org.apache.commons.configuration2.builder.FileBasedConfigurationBuilder;
import org.apache.commons.configuration2.builder.fluent.Parameters;
import org.apache.commons.configuration2.ex.ConfigurationException;
import property.ServerProperties;

public class LoadConfigController {
    private static final String CONFIG_PATH = "config";
    private static final String CONFIG_FILE_NAME = "server.yml";
    private static final String DEFAULT_MODE = "local";
    private static String serverMode = DEFAULT_MODE;
    private YAMLConfiguration serverConfig;
    public static LoadConfigController instance = new LoadConfigController();

    private LoadConfigController() {
        loadConfigFromFile();
    }

    public static LoadConfigController getInstance() {
        return instance;
    }

    private void loadConfigFromFile() {
        if (serverConfig != null) {
            return;
        }

        Parameters params = new Parameters();
        FileBasedConfigurationBuilder<YAMLConfiguration> builder = new FileBasedConfigurationBuilder<>(YAMLConfiguration.class)
                .configure(params.hierarchical().setBasePath(CONFIG_PATH).setFileName(CONFIG_FILE_NAME));

        try {
            serverConfig = builder.getConfiguration();

        } catch (ConfigurationException cex) {
            cex.printStackTrace();
        }
    }

    public void loadServerConfig() {
        System.out.println("Loading Server Configurations...");

        serverMode = System.getenv("MODE");

        if (!serverMode.equalsIgnoreCase("local") ||
            !serverMode.equalsIgnoreCase("test") ||
            !serverMode.equalsIgnoreCase("production")
        ) {
            System.out.println("ERROR: Unrecognized mode. Defaulting to local mode");
        }

        System.out.println("Server Mode: " + serverMode);

        ServerProperties ServerProperties = new ServerProperties();
        ServerProperties.setHostname(serverConfig.getString(serverMode + "hostname"));
        ServerProperties.setPort(serverConfig.getString(serverMode + "port"));
        ServerProperties.Database databaseProperties = ServerProperties.new Database();
        databaseProperties.setURL(serverConfig.getString(serverMode + "db.url"));
        databaseProperties.setUser(serverConfig.getString(serverMode + "db.user"));
        databaseProperties.setPassword(serverConfig.getString(serverMode + "db.pass"));

        System.out.println("USING HOSTNAME: " + serverConfig.getString(serverMode + "hostname"));

        Server.getInstance().SetServerProperties(ServerProperties);
    }
}
