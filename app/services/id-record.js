import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class idRecordService extends Service {
  @tracked count = 0;

  calc() {
    this.count += 1;
    return `count: ${this.count}`;
  }
}