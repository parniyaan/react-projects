import {Doughnut} from 'react-chartjs-2';
import styles from "./chart.module.scss"

function Charts() {

    const data = {
        labels: [ 'Design', 'Development', 'Testing'],
        datasets: [
            {
                label: 'Project Tasks',
                data: [65,25, 10],
                backgroundColor: [
                    '#081225',
                    '#B5C2CA',
                    '#e1e8ea'
                ],

            }
        ]
    };

    return (
        <div className={styles.doughnut} >
            <Doughnut data={data}/>
        </div>
    )
}

export default Charts