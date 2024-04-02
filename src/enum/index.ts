export type STATUS_TYPE = 'idle' | 'pending' | 'succeeded' | 'failed';

export type IParams = {
    id: string;
};

export interface IReferenceTable {
    id: string;
    name: string;
    code?: string;
}

// Define the shape of the call record
export type CallRecord = {
    id: number;
    name: string;
    avatar_url: string;
    type: 'Incoming' | 'Outgoing';
    phone: string;
    duration: string;
    lastContacted: string;
};
