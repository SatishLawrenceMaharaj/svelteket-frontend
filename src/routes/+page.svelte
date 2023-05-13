<script>
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
		ToolbarButton
	} from 'flowbite-svelte';
</script>

<div class="relative">
	<div class="hidden sm:block w-full bg-no-repeat bg-cover" style="background: #ECFBFC;" />
	<div>
		<div class="p-4 sm:ml-64" id="body">
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
		</div>
	</div>
</div>

<style>
</style>
