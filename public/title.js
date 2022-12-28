async function wait(ms = 250) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
	const title = document.head.querySelector("title");
	const values = [
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyna 😍",
		"Reyn 😍 M",
		"Rey 🥵 Mo",
		"Re 🥵 Mom",
		"R 🥵 Momm",
		"🥵 Mommy",
		"🥵 Mommy",
		"🥵 Mommy",
		"R 🥵 Momm",
		"Re 🥵 Mom",
		"Rey 😍 Mo",
		"Reyn 😍 M",
	];

	while (true) {
		for (let value of values) {
			title.innerHTML = value;
			await wait();
		}
	}
})();
