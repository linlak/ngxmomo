
export type MomoEnvironments = 'sandbox' | 'live';
export class NgxMomoServiceConfig {
    apiUserId: string;
    environ: MomoEnvironments;
    currency: string;
    constructor(config: {
        apiUserId: string,
        environ?: MomoEnvironments,
        currency?: string,
    }) {
        this.apiUserId = config.apiUserId;
        this.environ = config.environ || 'sandbox';
        this.currency = config.currency || 'EUR';
    }
}
