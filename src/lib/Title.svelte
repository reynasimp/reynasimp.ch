<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import wait from "./wait";

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
	const title = writable(values[0]);

	onMount(async () => {
		while (true) {
			for (let value of values) {
				title.set(value);
				await wait();
			}
		}
	});
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>
