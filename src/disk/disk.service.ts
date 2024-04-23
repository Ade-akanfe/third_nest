import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerservice: PowerService) {}
  getData() {
    console.log('Drawing another 10 watts');
    this.powerservice.supplyPower(10);
    return 'data!';
  }
}
