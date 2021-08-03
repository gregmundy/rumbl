import Player from './player';

let Video = {
	init(socket, element) {
		if (!element) {
			return;
		}
		let playerId = element.getAttribute('data-player-id');
		let videoId = element.getAttribute('data-id');
		socket.connect();
		Player.init(element.id, playerId, () => {
			this.onReady(videoId, socket);
		});
	},

	onReady(videoId, socket) {
		let msgContainer = document.getElementById('msg-container');
		let msgInput = document.getElementById('msg-input');
		let postButton = document.getElementById('msg-button');
		let vidChannel = socket.channel('videos:' + videoId);
	},
};

export default Video;
