
export interface User{
	id: number;
	name: string;
	friends: string[];
	habitList : Habit[];
}


export enum Status{
	PENDING,
	FINISHED,
	INCOMPLETE
}

export interface Habit{
	name: string;
	status: Status;
	streak: number;
	auditor: string;
	id: number;
	uid: number;
}


