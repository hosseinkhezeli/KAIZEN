//@Mui
import { useTheme } from '@mui/material/styles';
//_______________________________________________________________

//@Types
import { TOverviewTaskChartProps } from '../components/overview/OverviewTaskChart';
//_______________________________________________________________

export function useOverveiwTaskChart({ columns }: TOverviewTaskChartProps) {
  const { palette } = useTheme();

  const totalTaskCards = columns?.reduce(
    (total, column) => total + (column?.taskCards?.length || 0),
    0,
  );
  const highPriorityTaskCards = columns
    ?.map((column) => column.taskCards)
    ?.flat()
    ?.reduce((total: number = 0, taskCard: ICard) => {
      if (taskCard.priority === 'High') {
        return total + 1;
      } else return total;
    }, 0);

  const data = {
    labels: [
      'All',
      'High Priority',
      ...(columns?.map((column) => column.title) || []),
    ],
    datasets: [
      {
        label: '# of tasks',
        data: [
          totalTaskCards,
          highPriorityTaskCards,
          ...(columns?.map((column) => column?.taskCards?.length) || []),
        ],
        backgroundColor: [
          palette.common.white + '40',
          palette.error.main + '40',
          palette.secondary.main + '40',
          palette.success.main + '40',
          palette.warning.main + '40',
        ],
        borderRadius: 12,
      },
    ],
  };
  return {
    data,
  };
}
