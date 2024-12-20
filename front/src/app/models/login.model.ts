export interface Login {
    id: number;
    username: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface Token {
    type: string;
    token: string;
}
