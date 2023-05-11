<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		Alert,
		Avatar,
		Modal,
		Input,
		Label,
		Checkbox,
		Button,
		Footer,
		FooterLink,
		FooterLinkGroup,
		FooterCopyright
	} from 'flowbite-svelte';

	onMount(() => {
		// preloader;
		const preloader = document.querySelector('.preloader-wrapper');
		setTimeout(() => {
			preloader.classList.add('hidden');
		}, 800);
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

<svelte:head>
	<title>Home</title>
</svelte:head>

<style>
	/*preloader css*/
	.preloader {
		width: 100px;
		height: 100px;
		border: 5px solid #333;
		border-radius: 50%;
		border-top-color: transparent;
		animation: spin 1s linear infinite;
	}
	#loader {
		display: block;
		position: relative;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #7bb516;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
	}
	#loader:before {
		content: '';
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #f86104;
		-webkit-animation: spin 3s linear infinite;
		animation: spin 3s linear infinite;
	}
	#loader:after {
		content: '';
		position: absolute;
		top: 15px;
		left: 15px;
		right: 15px;
		bottom: 15px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #5c7e00;
		-webkit-animation: spin 1.5s linear infinite;
		animation: spin 1.5s linear infinite;
	}
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>
