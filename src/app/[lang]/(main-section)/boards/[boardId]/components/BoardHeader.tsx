import React, { FC } from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Skeleton,
    Typography,
} from '@mui/material';
import { PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type TBoarderHeaderProps = {
    boardTitle: string | undefined;
    members: IBoardMember[] | undefined;
    bgImageUrl?: string;
};

const BoardHeader: FC<TBoarderHeaderProps> = ({
    boardTitle,
    members,
    bgImageUrl,
}) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                maxHeight: 200,
                minHeight: 200,
                overflow: 'hidden',
                borderRadius: '9px',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    position: 'relative',
                    padding: '4px 16px',
                    background: ({ palette }) =>
                        `linear-gradient(to top ,${palette.background.paper}, 70%, transparent)`,
                    zIndex: 2,
                }}
            >
                {boardTitle ? (
                    <Typography
                        variant={'h2'}
                        component={'h3'}
                        fontWeight={600}
                        sx={{ zIndex: 2 }}
                    >
                        {boardTitle}
                    </Typography>
                ) : (
                    <Skeleton
                        variant={'text'}
                        width={'100%'}
                        sx={{ maxWidth: 300, minHeight: 67 }}
                    />
                )}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        zIndex: 2,
                        minHeight: 67,
                    }}
                >
                    <AvatarGroup
                        max={4}
                        spacing={'small'}
                        sx={{ '.MuiAvatar-root': { border: 'none' } }}
                    >
                        {members?.length
                            ? members?.map((member, idx) => (
                                  <Avatar
                                      key={member.id}
                                      alt={member.fullName}
                                      src={member.profilePictureUrl}
                                      sx={{
                                          filter: `blur(${idx / 3}px)`,
                                          width: { xs: 32, lg: 36 },
                                          height: { xs: 32, lg: 36 },
                                          border: 'none',
                                          stroke: ({ palette }) =>
                                              palette.grey[400],
                                      }}
                                  >
                                      <UserIcon
                                          width={20}
                                          height={20}
                                          stroke={'inherit'}
                                      />
                                  </Avatar>
                              ))
                            : new Array(4).fill(undefined).map((_, idx) => (
                                  <Avatar
                                      key={idx}
                                      alt={''}
                                      src={''}
                                      sx={{
                                          filter: `blur(${idx / 3}px)`,
                                          width: { xs: 32, lg: 36 },
                                          height: { xs: 32, lg: 36 },
                                          border: 'none',
                                          stroke: ({ palette }) =>
                                              palette.grey[400],
                                      }}
                                  >
                                      <UserIcon
                                          width={20}
                                          height={20}
                                          stroke={'inherit'}
                                      />
                                  </Avatar>
                              ))}
                    </AvatarGroup>
                    <Button
                        startIcon={<PlusIcon width={18} />}
                        sx={{ maxHeight: '36px' }}
                    >
                        Invite
                    </Button>
                </Box>
            </Box>
            {bgImageUrl && (
                <Image
                    src={bgImageUrl ?? ' '}
                    alt={boardTitle ?? ' '}
                    width={800}
                    height={450}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                        objectPosition: 'top',
                    }}
                />
            )}
        </Box>
    );
};

export default BoardHeader;
