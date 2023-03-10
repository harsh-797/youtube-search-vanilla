function Actions({ page, handleClick }) {
	const actions = document.createElement("div");
	actions.className = "actions";

	const prevButton = document.createElement("button");
	prevButton.disabled = page === 0;
	prevButton.onclick = () => handleClick({ type: "previous" });
	prevButton.textContent = "previous";

	const pageNumber = document.createElement("p");
	pageNumber.textContent = `${page}`;

	const nextButton = document.createElement("button");
	nextButton.disabled = page === 9;
	nextButton.onclick = () => handleClick({ type: "next" });
	nextButton.textContent = "next";

	actions.append(prevButton);
	actions.append(pageNumber);
	actions.append(nextButton);

	return actions;
}

export { Actions };
