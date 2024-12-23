export interface Pauta {
    id: number;
    title: string;
    description?: string;
    voting_end: Date;
    created_at?: Date;
    updated_at?: Date;

    status: boolean;
}

export interface CreatePauta {
    title: string;
    description?: string;
    voting_end?: Date;
}
