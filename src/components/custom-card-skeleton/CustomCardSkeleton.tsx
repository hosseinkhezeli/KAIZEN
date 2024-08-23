import React, { ReactNode } from 'react';
import {
    DividerProps,
    Skeleton,
    SkeletonProps,
    Stack,
    StackProps,
} from '@mui/material';
import { pop } from '../../utils/animationKeyframes';
import { Divider as MuiDivider } from '@mui/material';
import Box from '@mui/material/Box';

export interface CustomCardSkeletonProps extends StackProps {
    children: ReactNode;
}

const CustomCardSkeleton = ({
    children,
    ...props
}: CustomCardSkeletonProps) => {
    return (
        <Stack
            sx={{
                padding: '16px  24px',
                width: '100%',
                gap: 2,
                minHeight: 140,
                animation: `${pop} 0.2s ease 1`,
                backgroundColor: 'background.default',
                borderRadius: '16px',
                justifyContent: 'space-between',
                transition: '0.5s ease transform',
                boxShadow: (theme) => theme.shadows[1],
            }}
            {...props}
        >
            {children}
        </Stack>
    );
};

CustomCardSkeleton.Divider = Divider;
CustomCardSkeleton.Title = Title;
CustomCardSkeleton.Header = Header;
CustomCardSkeleton.Description1 = Description1;
CustomCardSkeleton.Description2 = Description2;
CustomCardSkeleton.Chips = Chips;
CustomCardSkeleton.Paragraph = Paragraph;
CustomCardSkeleton.Checkbox = CheckBox;
CustomCardSkeleton.SelectInput = SelectInput;

export default CustomCardSkeleton;

function Divider({ ...props }: DividerProps) {
    return <MuiDivider variant={'middle'} {...props} />;
}

function Title({ ...props }: SkeletonProps) {
    return (
        <Skeleton variant={'text'} animation={'wave'} width={50} {...props} />
    );
}

function Header({ ...props }: SkeletonProps) {
    return (
        <Box display={'flex'} gap={2} justifyContent={'space-between'}>
            <Box display={'flex'} gap={2}>
                <Skeleton
                    variant={'text'}
                    animation={'wave'}
                    width={50}
                ></Skeleton>
                <Skeleton
                    variant={'rounded'}
                    animation={'wave'}
                    height={32}
                    width={80}
                ></Skeleton>
            </Box>
            <Skeleton
                animation={'wave'}
                width={'5%'}
                height={32}
                sx={{ alignSelf: 'flex-start' }}
            />
        </Box>
    );
}

function Description1({ ...props }: SkeletonProps) {
    return (
        <Box display={'flex'} justifyContent={'space-between'} gap={2}>
            <Box display={'flex'} gap={2}>
                <Skeleton variant={'text'} animation={'wave'} width={70} />
                <Skeleton variant={'text'} animation={'wave'} width={30} />
            </Box>
            <Box display={'flex'} gap={2}>
                <Skeleton variant={'text'} animation={'wave'} width={70} />
                <Skeleton variant={'text'} animation={'wave'} width={70} />
            </Box>
        </Box>
    );
}

function Description2({ ...props }: SkeletonProps) {
    return (
        <Box display={'flex'} justifyContent={'space-between'} gap={2}>
            <Skeleton variant={'text'} animation={'wave'} width={100} />
            <Skeleton variant={'text'} animation={'wave'} width={100} />
        </Box>
    );
}

function Chips({ ...props }: SkeletonProps) {
    return (
        <Box display={'flex'} justifyContent={'flex-start'} gap={2}>
            <Skeleton
                variant={'rounded'}
                animation={'wave'}
                height={32}
                width={'20%'}
            />
            <Skeleton
                variant={'rounded'}
                animation={'wave'}
                height={32}
                width={'20%'}
            />
            <Skeleton
                variant={'rounded'}
                animation={'wave'}
                height={32}
                width={'20%'}
            />
        </Box>
    );
}

function Paragraph({ ...props }: SkeletonProps) {
    return (
        <Stack justifyContent={'flex-start'} gap={2}>
            <Skeleton variant={'text'} animation={'wave'} width={'100%'} />
            <Skeleton variant={'text'} animation={'wave'} width={'100%'} />
            <Skeleton variant={'text'} animation={'wave'} width={'100%'} />
            <Skeleton variant={'text'} animation={'wave'} width={'40%'} />
        </Stack>
    );
}

function CheckBox({ ...props }: SkeletonProps) {
    return (
        <Box display={'flex'} justifyContent={'space-between'} gap={2}>
            <Skeleton
                variant={'rectangular'}
                animation={'wave'}
                width={100}
                height={42}
                sx={{ borderRadius: 2 }}
            />
        </Box>
    );
}

function SelectInput({ ...props }: SkeletonProps) {
    return (
        <Box display={'flex'} justifyContent={'space-between'} gap={2}>
            <Skeleton
                variant={'rectangular'}
                animation={'wave'}
                width={345}
                height={56}
                sx={{ borderRadius: 2 }}
            />
        </Box>
    );
}
