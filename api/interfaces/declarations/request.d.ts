import massive from 'massive';

declare global {
  namespace Express {
     export interface Request {
        db: massive.Database
     }
  }
}
