import { useState } from 'react';

import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import {
	Avatar,
	Box,
	Card,
	Container,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from '@mui/material';

import Dialogbox from '../components/Dialogbox';
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import Searchbar from '../components/Searchbar';
import { callRecords } from '../constants';

const CallList = () => {
    const handleSearch = () => {
        console.log('ONCHNAGE FIRE......');
    };
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10); // Set 10 rows per page

    // Handle change page
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    // Handle change rows per page
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 2));
        setPage(0);
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        // Handle the delete action here
        console.log('Record deleted');
        setOpen(false);
    };

    return (
        <Page title={'Calls'}>
            <Container maxWidth={'xl'}>
                <Typography sx={{my: 3, fontSize: '35px', fontWeight: 'bold'}}>
                    Calls
                </Typography>
                <Card>
                    <Searchbar handleSearch={handleSearch} />
                    <Scrollbar>
                        <TableContainer
                            sx={{
                                minWidth: 800,
                                maxHeight: '400px', // Set a fixed height for the container
                                overflow: 'auto', // Allow scrolling
                                position: 'relative',
                            }}
                        >
                            <Table size={'medium'}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align='right'>
                                            Phone
                                        </TableCell>
                                        <TableCell align='right'>
                                            Duration
                                        </TableCell>
                                        <TableCell align='right'>
                                            Last Contacted
                                        </TableCell>
                                        <TableCell align='right'>
                                            Action
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {callRecords.map((record) => (
                                        <TableRow
                                            key={record.id}
                                            sx={{
                                                '&:last-child td, &:last-child th':
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell
                                                scope='row'
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent:
                                                        'flex-start',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <>
                                                    <Avatar
                                                        alt={record.name}
                                                        src={record.avatar_url}
                                                        sx={{mr: 2}}
                                                    />
                                                    {record.name}
                                                </>
                                            </TableCell>
                                            <TableCell align='right'>
                                                {record.phone}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {record.duration}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {record.lastContacted}
                                            </TableCell>
                                            <TableCell align='right'>
                                                <IconButton
                                                    aria-label='call'
                                                    onClick={() =>
                                                        console.log(
                                                            'Initiate call to:',
                                                            record.phone,
                                                        )
                                                    }
                                                >
                                                    <CallIcon />
                                                </IconButton>
                                                <IconButton
                                                    aria-label='delete'
                                                    onClick={handleOpen}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Scrollbar>
                    <Dialogbox
                        open={open}
                        onClose={handleClose}
                        onDelete={handleDelete}
                    />
                    <Box sx={{position: 'relative'}}>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            component='div'
                            count={callRecords.length} // total number of records
                            rowsPerPage={rowsPerPage} // number of records per page
                            page={page} // current page number
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Box>
                </Card>
            </Container>
        </Page>
    );
};

export default CallList;
