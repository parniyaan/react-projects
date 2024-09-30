import styles from './mainContainer.module.scss';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Checkbox} from "@mui/material";

function MainContainer() {

    function createData(name, admin, members, status, runTime, finishDate) {
        return {name, admin, members, status, runTime, finishDate};
    }

    const rows = [
        createData("ClientOnboarding-Circle", "Samanta J.", 3, "In Progress", "6 hour", "6 Mon"),
        createData("Meeting with Webflow & Notion", "Bob P.", 4, "Done", "2 hour", "7 Tue"),
        createData("First handoff with Engineers", "Kate O.", 10, "In Progress", "3 days", "10 Fri"),
        createData("Client Drafting (2) with Lawrence", "Jack F.", 7, "In Progress", "1 week", "19 Sun"),
    ]

    return (
        <div  className={styles.mainContainer}>
            <div className={styles.subTitle}>
                <div className={styles.des}>
                    <h1 className={styles.title}>Last Tasks</h1>
                    <span className={styles.statistic}>117 total, </span>
                    <span className={styles.description}>proceed to resolve them</span>
                </div>
                <div className={styles.detail}>
                    <span className={styles.numbers}>
                        <h1 className={styles.number}>94</h1>
                        <h3 className={styles.position}>Done</h3>
                    </span>
                    <span className={styles.numbers}>
                        <h1 className={styles.number}>23</h1>
                        <h3 className={styles.position}>In progress</h3>
                    </span>
                </div>
            </div>
            <TableContainer >
                <Table>
                    <TableHead >
                        <TableRow>
                            <TableCell align="left" sx={{ padding: '2px' }}>
                                <Checkbox
                                    color="primary"
                                    inputProps={{
                                        'aria-label': 'select all desserts',
                                    }}
                                />Name</TableCell>
                            <TableCell align="center">Admin</TableCell>
                            <TableCell align="center">Members</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Run Time</TableCell>
                            <TableCell align="center">Finish Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow sx={{ padding: '2px' }}
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left" sx={{ padding: '2px' }}>
                                    <Checkbox
                                        color="primary"
                                        inputProps={{
                                            'aria-label': 'select all desserts',
                                        }}/>
                                    {row.name}</TableCell>
                                <TableCell align="center">{row.admin}</TableCell>
                                <TableCell align="center">{row.members}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">{row.runTime}</TableCell>
                                <TableCell align="center">{row.finishDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default MainContainer;