import { http } from '@/services/core/http';
import { routes } from '@/services/api/task-card/routes';

export const updateTaskCardColumn = (
  body: TMoveTaskCardBody,
): Promise<IBoardColumn[]> => {
  return http.put(routes.moveTaskCard, body);
};
