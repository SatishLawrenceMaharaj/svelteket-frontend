import { PUBLIC_API_URL } from '$env/static/public';
import mainStore from '$lib/stores/mainStore';
import { main } from '@popperjs/core';
import { P } from 'flowbite-svelte';

export default class Service {
    endpoint: string;
    store: any;
    constructor() {
        this.endpoint = PUBLIC_API_URL;
        mainStore.subscribe((value) => {
            this.store = value;
        }
        );
    }

    async getChats() {
        console.log('getChats');
        return this.fetch(`api/chats/all`).then((res) => {
            mainStore.update((store) => {
                store.chats = res;
                return store;
            });
            return res;
        });
    }

    async createChat(newChat: any) {
        console.log('createChat');
        return this.post(`api/chat/create`, newChat).then((res) => {
			if (res) {
				mainStore.update((store) => {
					store.chats.push(res);
					return store;
				});
			}
		});
        
    }

    async post(path: string, body: object) {
        return fetch(`${this.endpoint}/${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${this.store.access_token}`
            },
            body: JSON.stringify(body)
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    res.json().then((json) => {
                        if (!json.ok) {
                            mainStore.update((store) => {
                                store.notification = {
                                    message: json.message,
                                    type: 'error',
                                    active: true
                                };
                                return store;
                            });
                        }
                        return null;
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async fetch(path: string) {
        return fetch(`${this.endpoint}/${path}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${this.store.access_token}`
            }
        })
            .then((res) => {
                const json = res.json();
                if (res.ok) {
                    return json;
                } else {
                    json.then((res) => {
                        if (!res.ok) {
                            mainStore.update((store) => {
                                store.notification = {
                                    message: res.message,
                                    type: 'error',
                                    active: true
                                };
                                return store;
                            });
                        }
                        return null;
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}