export interface TaskResponse {
  id: number;
  name: string;
  type: string;
  father_id: number | null;
  user_id: number;
  created_at: string;
  updated_at: string;
}
