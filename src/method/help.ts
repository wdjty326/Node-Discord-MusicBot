import discordjs from "discord.js";
import discordapp from "../app";
import { MainGuideContent, DevGuideContent } from "../template";

/** help */
export default function(this: discordapp, message: discordjs.Message, args?: string[]) {
	if (args) {
		switch(args[0]) {
			default:
			case "dev":
				message.channel.send(DevGuideContent);
				break;
		}
	} else {
		message.channel.send(MainGuideContent);
	}
}