import { Chip, Paper } from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo, useState } from "react";
import { useContext } from 'react';
import { DataContext } from '../App';

const Table = () => {
    const context = useContext(DataContext);
    const [pageSize, setPageSize] = useState<number>(5);
    const columns = useMemo(() => [
        {field: 'name', headerName: 'Name', minWidth: 80, flex: 0.6},
        {field: 'email', headerName: 'Email-ID', minWidth: 100, flex: 1},
        {field: 'status', headerName: 'Status', minWidth: 60, flex: 0.3, sortable: false, renderCell:(params: any)=>
        <Chip icon={<CircleIcon style={{color: params.row.status == 'active' ? 'green' : 'red'}} />} label={params.row.status} />}
    ], []);

    return (
        <Paper elevation={6} sx={{ mt: 1, p: 5, height: '50vh' }}>
            <DataGrid checkboxSelection disableColumnMenu disableSelectionOnClick columns={columns} 
                rows={context?.data || []} pageSize={pageSize} getRowId={(row) => row.name}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 25]} pagination sx={{border: 1}}></DataGrid>
        </Paper>
    )
}

export default Table