import { Body } from "./Body.js";

function fetchData(url) {
	let status = "pending";
	let result = fetch(url)
		.then((res) => res.json())
		.then(
			(data) => {
				result = data;
				status = "resolved";
				return data;
			},
			(err) => {
				result = err;
				status = "rejected";
			}
		);
	return result;
	return {
		read() {
			if (status === "pending" || status === "rejected") throw result;
			if (status === "resolved") return result;
		},
	};
}

function findContent() {
	return document.querySelector(".content");
}

function Search() {
	console.log("in search");
	let query;

	async function func(url) {
		const data = await fetchData(url);
		// console.log(data);
		const fetchContent = findContent();
		if (fetchContent) fetchContent.remove();
		// { data: data.items }
		const content = Body({ data: data.items });
		search.append(content);
	}

	function handleClickFind(e) {
		e.preventDefault();
		query = searchBar.value;
		const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCc_O6z8FsqURuYStMQp4FEDApVAI2jqYA&type=video&maxResults=50&q=${query}`;
		if (query) func(url);
	}

	const search = document.createElement("div");
	search.className = "search";

	const searchBox = document.createElement("div");
	searchBox.className = "search-box";

	const searchBar = document.createElement("input");
	searchBar.className = "search-bar";
	searchBar.placeholder = "Type something here...";

	const searchButton = document.createElement("button");
	searchButton.className = "search-button";
	searchButton.onclick = handleClickFind;

	const searchLogo = document.createElement("img");
	searchLogo.className = "search-logo";
	searchLogo.src =
		"https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=";
	searchLogo.alt = "logo";

	searchButton.append(searchLogo);

	searchBox.append(searchBar);
	searchBox.append(searchButton);

	search.append(searchBox);

	return search;

	// return (
	// 	<div className='search'>
	// 		<div className='search-box'>
	// 			<input
	// 				className='search-bar'
	// 				ref={inputRef}
	// 				placeholder={"Type something here..."}></input>
	// 			<button className='search-button' onClick={handleClick}>
	// 				<img
	// 					className='search-logo'
	// 					src='https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY='
	// 					alt='search'
	// 				/>
	// 				{/* Search */}
	// 			</button>
	// 		</div>
	// 		{data ? (
	// 			<React.Suspense fallback={<div>Searching...</div>}>
	// 				<Body data={data} />
	// 			</React.Suspense>
	// 		) : (
	// 			""
	// 		)}
	// 	</div>
	// );
}

export { Search };
