import { Search } from "./Search.js";
import { Initial } from "./Initial.js";

function Page() {
	const page = document.createElement("div");
	page.className = "page";

	page.append(Initial());
	page.append(Search());

	return page;
}

function Start() {
	App.append(Page());
	console.log(App);
}

Start();
