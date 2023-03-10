function Initial() {
	const initial = document.createElement("a");
	initial.className = "initial";
	initial.href = "./";

	const src = "./js/logo2.png";

	const img = document.createElement("img");
	img.src = src;
	img.className = "logo";
	img.alt = "logo";

	initial.append(img);

	return initial;
}

export { Initial };
