import { Actions } from "./Actions.js";

function findContent() {
	return document.querySelector(".content");
}
function findActions() {
	return document.querySelector(".actions");
}
// { data: videos }
function Body({ data: videos }) {
	console.log("in body");
	let page = 0,
		firstVideoIndex,
		lastVideoIndex,
		list;

	function initializeList() {
		firstVideoIndex = page * 5;
		lastVideoIndex = firstVideoIndex + 5;
		list = videos.slice(firstVideoIndex, lastVideoIndex + 1);
	}
	initializeList();

	function createContent() {
		const visibleList = list.map((vid) => {
			const src = `http://www.youtube.com/embed/${vid.id.videoId}`;

			const video = document.createElement("iframe");
			video.className = "video";
			video.width = "420";
			video.height = "315";
			video.src = src;
			video.title = vid.snippet.title;
			video.allowFullscreen = true;
			return video;
		});

		const content = document.createElement("div");
		content.className = "content";
		content.append(...visibleList);

		const fetchActions = findActions();
		if (fetchActions) fetchActions.remove();
		const actions = Actions({ page, handleClick });

		const wrapper = document.createElement("div");
		wrapper.append(content);
		wrapper.append(actions);

		return wrapper;
	}

	function handleClick({ type }) {
		let fetchContent;
		switch (type) {
			case "previous":
				if (page) page = page - 1;
				fetchContent = findContent();
				if (fetchContent) {
					initializeList();
					fetchContent.replaceWith(createContent());
				}
				return;
			case "next":
				if (page !== 9) page = page + 1;
				fetchContent = findContent();
				if (fetchContent) {
					initializeList();
					fetchContent.replaceWith(createContent());
				}
				return;
			default:
				throw Error("Whatt!!!");
		}
	}

	return createContent();
}

export { Body };
