import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { createServer } from "http";
import { WssService } from "./presentation/services/wss.service";
import { MongoDatabase, UserModel } from "./data/mongo";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB,
  });

  const server = new Server({
    port: envs.PORT,
  });

  const httpServer = createServer(server.app);
  WssService.initWss({ server: httpServer });

  server.setRoutes(AppRoutes.routes);

  httpServer.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT}`);
  });
}
