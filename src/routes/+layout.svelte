<script>
	import '../app.css';
	import { onMount } from 'svelte';


	onMount(() => {
		// preloader;
		const preloader = document.querySelector('.preloader-wrapper');
		setTimeout(() => {
			preloader.classList.add('hidden');
		}, 5500);
	});
</script>

<div
	class="preloader-wrapper h-screen flex justify-center items-center fixed top-0 left-0 z-50 w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
>
	<div id="loader" class="preloader" />
	<h1 class="text-xl font-semibold text-white-600/100 dark:text-white ml-2 animate-bounce">
		Page Loading...
	</h1>
</div>




<slot />
