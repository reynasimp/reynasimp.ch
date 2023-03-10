export default async function wait(ms: number = 250) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
