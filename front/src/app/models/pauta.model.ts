export interface Pauta {
    id: number;
    title: string;
    categoria_id: number;
    categoria_name: string;
    description?: string;
    voting_end: Date;
    created_at?: Date;
    updated_at?: Date;

    status?: boolean;
}

export interface CreatePauta {
    title: string;
    categoria_id: number;
    description?: string;
    voting_end?: Date;
}
