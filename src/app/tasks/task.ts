import { uuid } from '../utils/uuid';

export class Task {
  id: string;
  name: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || uuid();
    this.name = obj && obj.name || 'New Task';
  }
}
