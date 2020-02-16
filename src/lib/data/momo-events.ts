export interface MomoEvent {
    type: string;
    details: any;
}

export interface MomoEventMain {
    provider: string;
    event: MomoEvent;
}
