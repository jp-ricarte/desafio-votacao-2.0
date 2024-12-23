export interface MessageResponse {
    type: 'success' | 'error' | 'warning';
    message: string;
}