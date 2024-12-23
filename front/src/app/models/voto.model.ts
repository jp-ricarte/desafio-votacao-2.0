export interface Voto {
    user_id: number;
    pauta_id: number;
    vote: boolean;
}

export interface VotoResult {
    total: number;
    yes: number;
    no: number;
    percentageYes: number;
    percentageNo: number;
}
