import { User } from './user.entity';

export class Memo {
  id: string;
  userId: string;
  title: string;
  body: string;
  is_done: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  user?: User;
}
