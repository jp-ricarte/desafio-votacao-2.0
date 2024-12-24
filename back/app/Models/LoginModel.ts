export interface Login {
    id: number;
    username: string;
    email: string;
    password: string;
    cpf: string;
    is_admin: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export interface CreateUser {
    username: string;
    email: string;
    password: string;
    cpf: string;
    is_admin?: boolean;
}

export interface Token {
    type: string;
    token: string;

    user: Login;
}
