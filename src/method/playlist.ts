import discordjs from "discord.js";
import discordapp from "../app";

export default function(this: discordapp, message: discordjs.Message): void {
	// 호출 메세지의 서버 ID
	const id = message.guild.id;

	// 봇 음성방 진입 여부
	if (this.validate(id)) {
		const obj = this.connection(id);
		const currentTitle = (obj.playingAudio) ? obj.playingAudio.title : "";
		message.channel.send(
			"*현재재생목록\n"
			+ "-"
			+ currentTitle
			+ "\n"
			+ "*대기목록\n" 
			+ obj.arrayQueueStack.map((Output, Index) => `${Index + 1}. ${Output.title}`).join("\n")
		);
	}
};
