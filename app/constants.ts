export interface User{
	uid: string;
	username: string;
	photo: string | null
	score: number;
	friends: string[]; // uid[]
	pendingHabits: string[]; // hid[]
	friendRequests: string[]; // uid[]
}

export interface Friend{
	uid: string;
	username: string;
	score: number;
	photo: string | null;
}

export enum Status{
	INCOMPLETE = 0,
	PENDING = 1,
	FINISHED = 2,
}

export interface Habit{
	hid: string;
	habitName: string;
	streak: number;

	viewers: string[]; // uid[]
	auditor: string; // uid[]
	status: number;
	owner: string; // uid
}


