function allNames() {
	fetch("https://api.thecatapi.com/v1/breeds")
		.then((response) => response.json())
		.then((data) => renderAllNames(data))
		.catch((error) => console.log("Error fetching data: ", error));
}

function renderAllNames(data) {
	let names = [];
	names.push(`<p>All names (total = ${data.length}):</p>`);
	names.push(`<p> ------------------------- </p>`);
	for (const cat of data) {
		names.push(`<p>${cat.name}</p>`);
	}
	names = names.join("");
	document.getElementById("main-data").innerHTML = names;
}

function healthIssues() {
	fetch("https://api.thecatapi.com/v1/breeds")
		.then((response) => response.json())
		.then((data) => renderHealthIssues(data))
		.catch((error) => console.log("Error fetching data: ", error));
}

function renderHealthIssues(data) {
	let names = [];
	const health_issue_number = document.getElementById("health_issue").value;
	names.push(`<p>Health issues for ${health_issue_number}:</p>`);
	names.push(`<p> ------------------------- </p>`);
	let issue_count = 0;
	for (const cat of data) {
		if (cat.health_issues == health_issue_number) {
			names.push(`<p>${cat.name}</p>`);
			issue_count += 1;
		}
	}
	names.push(`<p> ------------------------- </p>`);
	names.push(`<p>total = ${issue_count}</p>`);
	names = names.join("");
	document.getElementById("main-data").innerHTML = names;
}

function getWeight() {
	fetch("https://api.thecatapi.com/v1/breeds")
		.then((response) => response.json())
		.then((data) => renderWeight(data))
		.catch((error) => console.log("Error fetching data: ", error));
}

function renderWeight(data) {
	const unit = document.querySelector('input[name="weightUnit"]:checked');
	if (unit) {
		let names = [];
		const weight = unit.value;
		names.push(`<p>Weights in ${weight}:</p>`);
		names.push(`<p> ------------------------- </p>`);
		for (const cat of data) {
			if (weight == "Imperial") {
				names.push(`<p>${cat.weight.imperial}</p>`);
			}
			if (weight == "Metric") {
				names.push(`<p>${cat.weight.metric}</p>`);
			}
		}
		names = names.join("");
		document.getElementById("main-data").innerHTML = names;
	} else {
		console.log("No weight unit selected");
	}
}

function getIntelligenceFriendly() {
	fetch("https://api.thecatapi.com/v1/breeds")
		.then((response) => response.json())
		.then((data) => renderIntelligenceFriendly(data))
		.catch((error) => console.log("Error fetching data: ", error));
}

function renderIntelligenceFriendly(data) {
	let names = [];
	names.push(`<p>I - F</p>`);
	names.push(`<p> ------------------------- </p>`);
	for (const cat of data) {
		names.push(`<p>${cat.intelligence} . ${cat.child_friendly}</p>`);
	}
	names = names.join("");
	document.getElementById("main-data").innerHTML = names;
}

function getAverageIntelligence() {
	fetch("https://api.thecatapi.com/v1/breeds")
		.then((response) => response.json())
		.then((data) => renderAverageIntelligence(data))
		.catch((error) => console.log("Error fetching data: ", error));
}

function renderAverageIntelligence(data) {
	let names = [];
	let intelligence = 0;
	for (const cat of data) {
		intelligence += cat.intelligence;
	}
	const avg = intelligence / data.length;
	names.push(`<p>Average Intelligence: ${avg.toFixed(2)}</p>`);
	names.push(`<p> ------------------------- </p>`);
	names = names.join("");
	document.getElementById("main-data").innerHTML = names;
}

function getAverageChildFriendlyIntelligence() {
	fetch("https://api.thecatapi.com/v1/breeds")
		.then((response) => response.json())
		.then((data) => renderAverageChildFriendlyIntelligence(data))
		.catch((error) => console.log("Error fetching data: ", error));
}

function renderAverageChildFriendlyIntelligence(data) {
	let names = [];
	let intelligence = 0;
	for (const cat of data) {
		intelligence += cat.child_friendly;
	}
	const avg = intelligence / data.length;
	names.push(`<p>Average Intelligence: ${avg.toFixed(2)}</p>`);
	names.push(`<p> ------------------------- </p>`);
	names = names.join("");
	document.getElementById("main-data").innerHTML = names;
}