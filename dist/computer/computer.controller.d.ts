import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';
export declare class ComputerController {
    private cpuService;
    private diskService;
    constructor(cpuService: CpuService, diskService: DiskService);
    run(): (string | number)[];
}
