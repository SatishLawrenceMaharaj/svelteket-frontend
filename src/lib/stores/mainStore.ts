import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
export { Writable };

type Chat = {
    id: string;
    chat_id: string;
    chat_name: string;
    chat_message: string;
    chat_type: string;
    chat_description: string;
    chat_image: string;
    chat_created: string;
    chat_creator_id: string;
};
type Notification = {
	message: string;
	type: string;
	active: boolean;
};
type MainStore = {
    chats: Chat[];
    notification: Notification;
};

const mainStore: Writable<MainStore> = writable({
    chats: [],
    notification: {
        message: '',
        type: '',
        active: false
    }
});

export default mainStore;