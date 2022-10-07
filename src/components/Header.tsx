import { Button, Paper, Typography } from '@mui/material';
import { Cached } from '@mui/icons-material';
import { useContext } from 'react';
import { DataContext } from '../App';

const Header: React.FC = () => {
    const context = useContext(DataContext);

    return (
        <Paper elevation={4} sx={{ display: 'flex', mt: 10, justifyContent: 'space-between', p: 5, flexWrap: 'wrap' }}>
            <Typography sx={{ flex: '1 1 50%', fontWeight: 600 }} component='h1' variant='h4'>Company List</Typography>
            <Button variant='contained' startIcon={<Cached/>} onClick={context?.setData}>Refresh</Button>
            <Typography sx={{ flex: '1 1 50%', fontSize: 12, color: '#3a3a3a' }} variant='overline'>{context?.data.length} Companies</Typography>
        </Paper>
    )
}

export default Header;