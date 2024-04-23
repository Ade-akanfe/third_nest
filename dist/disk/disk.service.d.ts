import { PowerService } from 'src/power/power.service';
export declare class DiskService {
    private powerservice;
    constructor(powerservice: PowerService);
    getData(): string;
}
