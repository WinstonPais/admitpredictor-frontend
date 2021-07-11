import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styles from './StickyHeadTable.module.css';
import TableUniLogo from './TableUniLogo/TableUniLogo';
import { Button } from 'react-bootstrap';

const columns = [
  { 
    id: 'ranking', 
    label: 'National Rank', 
    minWidth: 170,
    align: 'center',
  },
  { 
    id: 'logo', 
    label: 'Logo', 
    minWidth: 100, 
    align: 'center', 
  },
  {
    id: 'uniName',
    label: 'Name',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'prediction',
    label: 'Chance Of Admit',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'viewmore',
    label: 'Details',
    minWidth: 170,
    align: 'center',
  },
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgb(54 54 86)',
    },
    '&:nth-of-type(even)': {
      backgroundColor: 'rgb(88 80 111)',
    },
  },
}))(TableRow);

const allUniData = require('./../../UniData.json');



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const StickyHeadTable = (props) => {
// export default function () {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getAllRowsData = () => {
    return allUniData.map((uniData, index)=>{
      return { 
        'ranking' : index + 1,
        'logo' : <TableUniLogo key={uniData["Name"]} name={uniData["Name"]} url={uniData["ImageURL"]} />,
        'uniName' : uniData["Name"],
        'prediction' : "100%",
        'viewmore' : <Button 
                        key = {uniData["Name"]}
                        onClick={(e) => {props.bottomDetailsDisplayHandler(index)}} 
                        style={{borderRadius:"999999px"}}
                      >
                        View More
                      </Button>
      }
    });
  }

  const rows = getAllRowsData();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={[classes.root, styles.transparentBG].join(' ')}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={[styles.nobottomBorder, styles.headerStyle].join(' ')}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <StyledTableRow role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell 
                        className={[styles.nobottomBorder, styles.textColorWhite].join(' ')} 
                        key={column.id} 
                        align={column.align}
                      >
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={styles.textColorWhite}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        style={{ backgroundColor: 'black' }}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable