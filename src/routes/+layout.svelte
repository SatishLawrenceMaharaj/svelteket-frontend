<script>
	import '../app.css';
	import eplogo from '$lib/images/eplogo.png';
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
		FooterCopyright,
		Textarea,
		ToolbarButton,
		Chevron
	} from 'flowbite-svelte';

	let active = '';
	onMount(() => {
		let url = window.location.href;
		if (url.includes('about')) {
			active = 'About';
		} else if (url.includes('users')) {
			active = 'Users';
		} else {
			active = 'Home';
		}
	});

	onMount(() => {
		// preloader;
		const preloader = document.querySelector('.preloader-wrapper');
		setTimeout(() => {
			preloader.classList.add('hidden');
		}, 800);
	});

	let aboutModal = false;
	let registerModal = false;
	let loginModal = false;
	let usersModal = false;

	let submit = () => {
		console.log('submit');
	};
</script>

<div
	class="preloader-wrapper h-screen flex justify-center items-center fixed top-0 left-0 z-50 w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
>
	<div id="loader" class="preloader" />
	<h1 class="text-xl font-semibold text-white-600/100 dark:text-white ml-2 animate-bounce">
		Page Loading...
	</h1>
</div>

<div class="grid gap-2 grid-cols-2 sticky top-0">
	<div class="column border-b border-black-500 w-screen z-40">
		<Navbar let:hidden let:toggle style="background:#3bc7d0;">
			<NavBrand href="/">
				<img src={eplogo} class="mr-3 h-6 sm:h-9" alt="EduPro Logo" />
				<span
					class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					style="color:white"
				>
					EduPro
				</span>
			</NavBrand>
			<NavHamburger on:click={toggle} />
			<NavUl {hidden}>
				<NavLi
					activeClass="text-white bg-white-700 md:bg-transparent md:text-white-700 md:dark:text-white dark:bg-white-600 md:dark:bg-transparent"
					nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					active={active === 'Home'}
					href="/"
					on:click={() => (active = 'Home')}>Home</NavLi
				>
				<NavLi
					activeClass="text-white bg-white-700 md:bg-transparent md:text-white-700 md:dark:text-white dark:bg-white-600 md:dark:bg-transparent"
					nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					active={active === 'About'}
					href="/"
					on:click={() => (active = 'About')}
					on:click={() => (aboutModal = true)}>About</NavLi
				>
				<NavLi
					activeClass="text-white bg-white-700 md:bg-transparent md:text-white-700 md:dark:text-white dark:bg-white-600 md:dark:bg-transparent"
					nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					active={active === 'Users'}
					href="/"
					on:click={() => (active = 'Users')}
					on:click={() => (usersModal = true)}>Users</NavLi
				>
				<NavLi
					activeClass="text-white bg-white-700 md:bg-transparent md:text-white-700 md:dark:text-white dark:bg-white-600 md:dark:bg-transparent"
					nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					active={active === 'Sign In'}
					href="/"
					on:click={() => (active = 'Sign In')}
					on:click={() => (loginModal = true)}>Sign In</NavLi
				>
				<NavLi
					activeClass="text-white bg-white-700 md:bg-transparent md:text-white-700 md:dark:text-white dark:bg-white-600 md:dark:bg-transparent"
					nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					active={active === 'Register'}
					href="/"
					on:click={() => (active = 'Register')}
					on:click={() => (registerModal = true)}>Register</NavLi
				>
			</NavUl>
		</Navbar>
	</div>
	<div class="column z-10" style="background:#42dee8">
		<aside
			id="logo-sidebar"
			class="fixed top-0 left-0 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 z-10"
			aria-label="Sidebar"
		>
			<div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
				<NavBrand href="/" class="space-y-2">
					<span
						class="self-center whitespace-nowrap text-xl font-semibold dark:text-white mt-1 mb-2 ml-2"
					>
						Chats
					</span>
				</NavBrand>
				<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-5" />

				<ul class="space-y-2 font-medium">
					<li class="border-none border-2 border-sky-500 hover:border-solid">
						<a
							href="#"
							class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div class="flex items-center space-x-4">
								<img
									class="w-10 h-10 rounded-full"
									src="https://banner2.cleanpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
									alt=""
								/>
								<div class="font-medium dark:text-white">
									<div>Satish Maharaj</div>
								</div>
							</div>
						</a>
						<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
					</li>

					<li class="border-none border-2 border-sky-500 hover:border-solid">
						<a
							href="#"
							class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
						>
							<div class="flex items-center space-x-4">
								<img
									class="w-10 h-10 rounded-full"
									src="https://banner2.cleanpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
									alt=""
								/>
								<div class="font-medium dark:text-white">
									<div>John Doe</div>
								</div>
							</div>
						</a>
						<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
					</li>
				</ul>
			</div>
		</aside>
	</div>
</div>

<!-- <div class="p-4 sm:ml-64" id="body">
	<div
		class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
		style="height:80vh"
	>
		<img src={eplogo} alt="EduPro Logo" class="w-4/12 mx-auto my-auto" />
	</div>

	<div class="relative h-16 w-full mt-4">
		<div class="absolute inset-x-0 bottom-0 h-16">
			<form>
				<label for="chat" class="sr-only">Your message</label>
				<Alert color="dark" class="px-3 py-2">
					<svelte:fragment slot="icon">
						<ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								/></svg
							>
							<span class="sr-only">Upload image</span>
						</ToolbarButton>
						<ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
								/></svg
							>
							<span class="sr-only">Add emoji</span>
						</ToolbarButton>
						<Textarea id="chat" class="mx-4" rows="1" placeholder="Your message..." />
						<ToolbarButton
							type="submit"
							color="blue"
							class="rounded-full text-blue-600 dark:text-blue-500"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
								/></svg
							>
							<span class="sr-only">Send message</span>
						</ToolbarButton>
					</svelte:fragment>
				</Alert>
			</form>
		</div>
	</div>
</div> -->

<Modal title="About" bind:open={aboutModal} size="xl" autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Studies have show that teachers that release their phone numbers to parents and students have
		less personal time to themselves. This is due to the fact that they are constantly being called
		by parents and students.
	</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		To enforce the privacy of teachers, the EduPro platform allows teachers to communicate with
		parents and students without releasing their phone numbers. Hence, teachers can have more
		personal time to themselves thus reducing the blurring of private and professional lives.
	</p>
	<svelte:fragment slot="footer">
		<Button>Close</Button>
	</svelte:fragment>
</Modal>

<Modal title="Users" bind:open={usersModal} size="xl">
	<form class="flex items-center">
		<label for="simple-search" class="sr-only">Search</label>
		<div class="relative w-full">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					aria-hidden="true"
					class="w-5 h-5 text-gray-500 dark:text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<input
				type="text"
				id="simple-search"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Search"
				required
			/>
		</div>
		<button
			type="submit"
			class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			<svg
				class="w-5 h-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
			<span class="sr-only">Search</span>
		</button>
	</form>

	<div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
		<ul class="space-y-2 font-medium">
			<li class="border-none border-2 border-sky-500 hover:border-solid">
				<a
					href="#"
					class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<div class="flex items-center space-x-4">
						<img
							class="w-10 h-10 rounded-full"
							src="https://banner2.cleanpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
							alt=""
						/>
						<div class="grid gap-3 grid-cols-4">
							<div class="font-medium dark:text-white">
								<div>Satish Maharaj</div>
							</div>
							<div class="font-medium dark:text-white">
								<div>Class: Standard 1 Maharaj</div>
							</div>
							<div class="font-medium dark:text-white">
								<div>DoB: 05/22/2001</div>
							</div>
							<div class="font-medium dark:text-white">
								<form action="">
									<Button><Chevron>Add to Class</Chevron></Button>
									<Dropdown class="w-48 p-3 space-y-1 text-sm">
										<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
											<Checkbox>Standard 1 Maharaj</Checkbox>
										</li>
										<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
											<Checkbox>Standard 2 Roopnarine</Checkbox>
										</li>
										<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
											<Checkbox>Standard 5 Separsad</Checkbox>
										</li>
										<Button on:click={submit} class="!p-2.5 bg-primary-light" type="submit">
											<div class="flex space-x-4">
												<svg
													class="w-6 h-6 dark:text-white"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
													><path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
													/></svg
												>
											</div>
										</Button>
									</Dropdown>
								</form>
							</div>
						</div>
					</div>
				</a>
				<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
			</li>

			<li class="border-none border-2 border-sky-500 hover:border-solid">
				<a
					href="#"
					class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<div class="flex items-center space-x-4">
						<img
							class="w-10 h-10 rounded-full"
							src="https://banner2.cleanpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
							alt=""
						/>
						<div class="font-medium dark:text-white">
							<div>John Doe</div>
						</div>
					</div>
				</a>
				<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
			</li>
		</ul>
	</div>
	<svelte:fragment slot="footer">
		<Button>Close</Button>
	</svelte:fragment>
</Modal>

<Modal bind:open={loginModal} size="xl" autoclose={false} class="w-full">
	<form class="flex flex-col space-y-6" action="#">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
				>Lost password?</a
			>
		</div>
		<Button type="submit" class="w-full1">Login</Button>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			Not registered? <a
				href="/"
				on:click={() => (registerModal = true)}
				class="text-blue-700 hover:underline dark:text-blue-500">Create account</a
			>
		</div>
	</form>
</Modal>

<Modal bind:open={registerModal} size="xl" autoclose={false} class="w-full">
	<form class="flex flex-col space-y-6" action="#">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
			Register for our platform
		</h3>
		<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
		<h4 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">General</h4>
		<Label class="space-y-2">
			<span>Name</span>
			<Input type="text" name="name" placeholder="Satish Maharaj" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
		<h4 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Contact</h4>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Number</span>
			<Input type="text" name="number" placeholder="777-7777" />
		</Label>
		<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
		<h4 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Student Affiliated</h4>
		<Label class="space-y-2">
			<span>Name</span>
			<Input type="text" name="name" placeholder="John Doe" required />
		</Label>
		<Label class="space-y-2">
			<span>Date of Birth</span>
			<Input type="date" name="date" placeholder="00/00/0000" required />
		</Label>
		<Label class="space-y-2">
			<span>Class</span>
			<Input type="text" name="class" placeholder="Standard 1 Maharaj" required />
		</Label>

		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
				>Lost password?</a
			>
		</div>
		<Button type="submit" class="w-full1">Register</Button>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			Already have an account? <a href="/" class="text-blue-700 hover:underline dark:text-blue-500"
				>Sign in</a
			>
		</div>
	</form>
</Modal>

<slot />

<svelte:head>
	<title>EduPro</title>
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
