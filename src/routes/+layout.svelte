<script>
	import '../app.css';
</script>

<nav class="navbar content-center">
	<a href="/" class="button">Home</a>
	<a href="/projects" class="button">Projects</a>
	<a href="/contact" class="button">Contact</a>
</nav>

<slot />

<style>
	.navbar {
		display: flex;
		justify-content: space-evenly;
		max-width: 10rem;
		padding: 0 5rem;
		margin-bottom: 1rem;
		background-color: green;
		border-radius: 50px;
	}
</style>
