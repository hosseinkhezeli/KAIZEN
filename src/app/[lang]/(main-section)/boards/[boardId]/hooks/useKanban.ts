//@3rd party
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
//_______________________________________________________________

//@Hooks
import { useMoveTaskCardColumn } from '@/services/api/task-card/hooks';
//_______________________________________________________________

//@Types
import { TKanban } from '@/app/[lang]/(main-section)/boards/[boardId]/components/kanban';
//_______________________________________________________________

export function useKanban(props: TKanban) {
  //Dependencies
  const { mutate: moveTaskCardColumn } = useMoveTaskCardColumn();
  const [uiColumns, setUiColumns] = useState<IBoardColumn[] | undefined>(
    props?.columns,
  );
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    variant: '',
  });
  const queryClient = useQueryClient();
  const { boardId } = useParams<{ boardId: string }>();

  //Handlers
  useEffect(() => {
    setUiColumns(props?.columns);
  }, [props?.columns]);

  const handleCloseNotification = () => {
    setNotification({ open: false, message: '', variant: '' });
  };

  const handleDragOver = (event: any) => {
    const { active, over } = event;
    const cardId = active?.data?.current?.id;
    const originColumnId = active?.data?.current?.columnId;
    const destinationColumnId = over?.id;

    if (originColumnId === destinationColumnId) {
      return;
    }

    const originColumn = uiColumns?.find(
      (column) => column.id === originColumnId,
    );

    // Find the destination column
    const destinationColumn = uiColumns?.find(
      (column) => column.id === destinationColumnId,
    );

    // Find the task card in the origin column
    const cardIndex = originColumn?.taskCards.findIndex(
      (card) => card.id === cardId,
    );

    // Move the task card
    const [updatedCard] = originColumn?.taskCards.splice(cardIndex || 0, 1)!;
    destinationColumn?.taskCards.push(updatedCard);

    //Merging with rest of columns

    const restColumns = uiColumns?.filter((column) =>
      [originColumnId, destinationColumnId].some(
        (columnId) => columnId !== column.id,
      ),
    );
    console.log(restColumns);
    // setUiColumns([restColumns, destinationColumn, originColumn].flat(2));
    const params: TMoveTaskCardBody = {
      cardId,
      originColumnId,
      destinationColumnId,
      boardId,
    };

    moveTaskCardColumn(params, {
      onSuccess: (data) => {
        queryClient.refetchQueries({ queryKey: ['get-board'] });
      },
      onError: () => {
        setUiColumns(props?.columns);
        setNotification({
          message: 'An error occurred while moving the card.',
          variant: 'error',
          open: true,
        });
      },
    });
  };

  return { uiColumns, handleDragOver, notification, handleCloseNotification };
}
