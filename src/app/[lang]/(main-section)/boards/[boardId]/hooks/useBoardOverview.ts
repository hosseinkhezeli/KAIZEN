//@3rd party
import { ReactNode, useMemo } from 'react';
//_______________________________________________________________

//@Utils
import { formatDate } from '@utils/methods';
//_______________________________________________________________

//@Types
import { TDescriptorProps } from '@components/descriptor/Descriptor';
//_______________________________________________________________

const useBoardOverview = ({ boardInfo }: { boardInfo?: IBoard }) => {
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
            : (boardInfo?.[item?.id as keyof IBoard] as ReactNode) || '-',
      })),
    [boardInfo?.id],
  );
  console.log(boardInfo, 'boardInfo', BasicInformationDescription);
  return { BasicInformationDescription };
};

export default useBoardOverview;
