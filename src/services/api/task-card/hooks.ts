import { updateTaskCardColumn } from '@/services/api/task-card/services';
import { useMutation } from '@tanstack/react-query';

export const useMoveTaskCardColumn = () =>
  useMutation({
    mutationKey: ['move-task-card-column'],
    mutationFn: (body: TMoveTaskCardBody) => updateTaskCardColumn(body),
  });
