import { TDescriptorProps } from '@components/descriptor/Descriptor';
import { formatDate } from '@utils/methods';
import { ReactNode, useMemo } from 'react';

const useBoardOverview = ({ boardInfo }: { boardInfo?: IBoard }) => {
  console.log(boardInfo);
  const BasicInformationDescription: TDescriptorProps[] = useMemo(
    () =>
      [
        { title: 'Title', id: 'title' },
        { title: 'Description', id: 'description' },
        { title: 'Members', id: 'memberCount' },
        { title: 'Created at', id: 'createdAt' },
      ].map((item, idx, arr) => ({
        title: item.title,
        description:
          idx === arr.length - 1
            ? formatDate(boardInfo?.[item.id as keyof IBoard] as Date)
            : (boardInfo?.[item.id as keyof IBoard] as ReactNode) || '-',
      })),
    [boardInfo?.id],
  );
  return { BasicInformationDescription };
};

export default useBoardOverview;
