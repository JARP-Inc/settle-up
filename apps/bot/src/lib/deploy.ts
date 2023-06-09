import { Collection, REST, Routes } from "discord.js";
import toJSON from "./toJSON";
import { command } from "./types";

const deploy = async (
  collection: Collection<string, command>,
  { token, client_id }: { token: string; client_id: string }
) => {
  let coms = collection.map((com) => toJSON(com));

  const rest = new REST({ version: "10" }).setToken(token);

  try {
    console.log(`Started refreshing ${coms.length} application (/) commands.`);

    const data = await rest.put(Routes.applicationCommands(client_id), {
      body: coms,
    });

    if (!Array.isArray(data)) {
      return;
    }

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
};

export default deploy;
