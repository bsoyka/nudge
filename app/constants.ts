
export interface User{
	id: number;
	name: string;
	friends: string[];
	habitList : Habit[];
}


export enum Status{
	INCOMPLETE = 0,
	PENDING = 1,
	FINISHED = 2,
}

export interface Habit{
	name: string;
	status: Status;
	streak: number;
	auditor: string;
	id: number;
	uid: number;
}


