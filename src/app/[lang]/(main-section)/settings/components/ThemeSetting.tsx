//@3rd Party
import { FC } from 'react';
import { changeThemeMode } from '@states/global/globalSlice';
import { useDispatch } from 'react-redux';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//@Mui
import {
    FormControlLabel,
    PaletteMode,
    Radio,
    Stack,
    Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import customTheme from '@styles/theme/theme';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ThemeSetting = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const onClickHandle = () => {
        dispatch(changeThemeMode());
    };
    return (
        <>
            <Typography variant='body1' fontWeight={500}>
                Select Theme
            </Typography>
            <Typography variant='body2'>
                Customize your workspace,make it more enjoyable and comfortable
                to work.
            </Typography>
            <Box width={'100%'} display={'flex'} gap={4}>
                <ThemeCard
                    themeMode={'light'}
                    isSelected={palette.mode === 'light'}
                    onClickSelect={onClickHandle}
                />
                <ThemeCard
                    themeMode={'dark'}
                    isSelected={palette.mode === 'dark'}
                    onClickSelect={onClickHandle}
                />
            </Box>
        </>
    );
};

export default ThemeSetting;
const ThemeCard = ({
    isSelected,
    onClickSelect,
    themeMode,
}: {
    themeMode: PaletteMode;
    isSelected: boolean;
    onClickSelect: () => void;
}) => {
    return (
        <Stack
            onClick={onClickSelect}
            sx={{
                width: '40%',
                minHeight: '220px',
                flexBasis: '40%',
                borderRadius: '12px',
                outline: '1px solid',
                outlineColor: isSelected ? 'primary.main' : 'grey.700',
                overflow: 'hidden',
                transition: '0.2s ease all',
                ':hover': {
                    transform: 'scale(101%)',
                },
            }}
        >
            <Box
                flexBasis={'80%'}
                bgcolor={'grey.700'}
                display={'grid'}
                sx={{ placeItems: 'center' }}
            >
                <SampleWindow themeMode={themeMode} />
            </Box>
            <Box
                flexBasis={'20%'}
                bgcolor={'background.paper'}
                display={'flex'}
                alignItems={'center'}
                pl={'1rem'}
            >
                <FormControlLabel
                    control={
                        <Radio
                            checked={isSelected}
                            onChange={onClickSelect}
                            size={'small'}
                        />
                    }
                    label={themeMode === 'light' ? 'Light Mode' : 'Dark Mode'}
                />
            </Box>
        </Stack>
    );
};

const SampleWindow: FC<{ themeMode?: PaletteMode }> = ({ themeMode }) => {
    return (
        <ThemeProvider theme={customTheme(themeMode!, true)}>
            <Box
                width={160}
                height={90}
                display='flex'
                bgcolor={'background.default'}
                borderRadius={'4px'}
                p={1.5}
            >
                <Stack flexBasis={'30%'} gap={'3px'}>
                    {new Array(7).fill(undefined).map((_, idx) => (
                        <Box
                            key={idx}
                            width={'70%'}
                            height={'12%'}
                            borderRadius={'2px'}
                            bgcolor={
                                idx === 0
                                    ? 'primary.main'
                                    : idx < 4 || idx > 5
                                      ? 'grey.600'
                                      : 'transparent'
                            }
                        />
                    ))}
                </Stack>
                <Stack flexBasis={'70%'} gap={'4px'}>
                    <Box
                        display='flex'
                        justifyContent={'space-between'}
                        width={'100%'}
                        height={'14%'}
                    >
                        <Box
                            display={'flex'}
                            width={'20%'}
                            height={'100%'}
                            borderRadius={'2px'}
                            bgcolor={'grey.600'}
                        />
                        <Box display={'flex'} gap={'3px'} height={'100%'}>
                            <Box
                                display={'flex'}
                                width={'8px'}
                                height={'100%'}
                                borderRadius={'2px'}
                                bgcolor={'grey.600'}
                            />
                            <Box
                                display={'flex'}
                                width={'8px'}
                                height={'100%'}
                                borderRadius={'2px'}
                                bgcolor={'primary.main'}
                            />
                        </Box>
                    </Box>
                    <Box
                        display={'flex'}
                        width={'100%'}
                        height={'100%'}
                        borderRadius={'4px'}
                        bgcolor={'background.paper'}
                    />
                </Stack>
            </Box>
        </ThemeProvider>
    );
};
