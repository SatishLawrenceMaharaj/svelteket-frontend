<script lang="ts">
	import '../app.postcss';
	import eplogo from '$lib/images/eplogo.png';
	import initial from '$lib/images/default.png';
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

	import mainStore from '$lib/stores/mainStore';
	import utils from '$lib/stores/utils';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import Page from './+page.svelte';

	onMount(() => {
		$utils.getChats();
	});

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
	let newchatModal = false;

	let submit = () => {
		console.log('submit');
	};

	let chat_id = '';
	let chat_name = '';
	let chat_type = '';
	let chat_description = '';
	let chat_image = '';
	let chat_creator_id = '';
	let error = '';
	const createChat = async () => {
		error = '';
		let newChat = {
			chat_id: chat_id,
			chat_name: chat_name,
			chat_type: chat_type,
			chat_description: chat_description,
			chat_image: chat_image,
			chat_creator_id: chat_creator_id
		};
		$utils.createChat(newChat).then((res) => {
			if (res) {
				goto('/');
			} else {
				error = 'Could not Create Chat';
			}
		});
	};
	const deleteChat = async (id:number) => {
		console.log('delete',id)
		$utils.deleteChat(id).then((res) => {});
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

<div class="grid gap-2 grid-cols-2 top-0">
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
				<div class="flex flex-wrap items-center gap-2 mb-3">
					<NavBrand href="/" class="space-y-2">
						<span
							class="self-center whitespace-nowrap text-xl font-semibold dark:text-white mt-1 mb-3 ml-2"
						>
							Chats
						</span>
					</NavBrand>
					<Button
						pill={true}
						outline={true}
						on:click={() => (newchatModal = true)}
						class="!p-2 ml-5"
						size="xs"
						>New Chat <svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						></Button
					>
				</div>
				<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-5" />

				<ul class="space-y-2 font-medium">
					{#each $mainStore.chats as chat}
						<li
							class="border-none border-2 border-sky-500 hover:border-solid grid gap-4 grid-cols-1"
						>
							<a
								href="/"
								class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								<div class="flex items-center space-x-4 w-full">
									{#if chat.chat_image == ''}
										<img
											class="w-10 h-10 rounded-full"
											src={initial}
											alt="Default Chat Profile Display"
										/>
									{:else}
										<img
											src={chat.chat_image}
											class="w-10 h-10 rounded-full"
											alt="Chat Profile Display"
										/>
									{/if}

									<div class="font-medium dark:text-white">
										<div>{chat.chat_name}</div>
									</div>
									<button
										class="inline-flex items-center justify-center w-8 h-8 ml-6 text-sky-100 transition-colors duration-150 bg-sky-700 rounded-full focus:shadow-outline hover:bg-red-800"
										on:click={deleteChat(chat.id)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
											/>
										</svg>
									</button>
								</div>
							</a>
						</li>
						<hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
					{/each}
				</ul>
			</div>
		</aside>
	</div>
</div>

<Modal title="New Chat" bind:open={newchatModal} size="xl" autoclose>
	<form class="flex flex-col space-y-6" action="#">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
			Please fill in all the fields below to create a new chat.
		</h3>
		<Label class="space-y-2">
			<span>Chat Id</span>
			<Input bind:value={chat_id} type="text" name="chat_id" placeholder="Chat Id" required />
		</Label>
		<Label class="space-y-2">
			<span>Chat Name</span>
			<Input bind:value={chat_name} type="text" name="chat_name" placeholder="Chat Name" required />
		</Label>
		<Label class="space-y-2">
			<span>Chat Type</span>
			<Input bind:value={chat_type} type="text" name="chat_type" placeholder="Chat Type" required />
		</Label>
		<Label class="space-y-2">
			<span>Chat Description</span>
			<Input
				bind:value={chat_description}
				type="text"
				name="chat_description"
				placeholder="Chat Description"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Chat Image (As URL)</span>
			<Input
				bind:value={chat_image}
				type="text"
				name="chat_image"
				placeholder="Chat Image (As URL)"
				required
			/>
		</Label>
		<Label class="space-y-2">
			<span>Chat Creator ID (Your ID)</span>
			<Input
				bind:value={chat_creator_id}
				type="text"
				name="chat_creator_id"
				placeholder="Chat Creator ID (Your ID)"
				required
			/>
		</Label>
		<Button type="submit" class="w-full1" on:click={createChat}>Create Chat</Button>
	</form>
</Modal>

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
					href="/"
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
					href="/"
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
