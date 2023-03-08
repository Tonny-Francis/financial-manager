import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ButtonSytled from './ButtonStyled';
import Logo from '../assets/img/Logo-FM.png'

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#00606C',
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

export default function NavBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className='flex flex-col w-full p-2'>
            <Box className='flex flex-row m-2 justify-between'>
                <Box sx={{ minWidth: 38, minHeight: 38 }} className='flex items-center'>
                    <img src={Logo} />
                </Box>
                <Box className='flex flex-row justify-end'>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                    >
                        <StyledTab label="Home" />
                        <StyledTab label="Blog" />
                        <StyledTab label="Sobre" />
                    </StyledTabs>
                    <Box className='flex flex-row gap-2'>
                        <ButtonSytled label='Login' variant='outlined' />
                        <ButtonSytled label='Cadastro' variant='contained' />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}