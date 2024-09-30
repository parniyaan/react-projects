import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import styles from "./statistics.module.scss";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
);

function Statistics() {
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Sales 2023',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: '#01ADDD',
                tension: 0.4,
            },
            {
                label: 'Sales 2022',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: '#4A1476',
                tension: 0.4,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio:true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    return (
        <div className={styles.chart}>
            <div className={styles.header}>
                <div className={styles.guide}>
                    <h1 className={styles.title}>Productivity</h1>
                    <div className={styles.info}>
                    <span className={styles.moreInfo}>
                        <span className={styles.color} style={{backgroundColor: "#01ADDD"}}></span>
                        <h3 className={styles.infoName}>Research</h3>
                    </span>
                        <span className={styles.moreInfo}>
                        <span className={styles.color} style={{backgroundColor: "#4A1476"}}></span>
                        <h3 className={styles.infoName}>Design</h3>
                    </span>
                    </div>
                </div>
                <h4 className={styles.note}>Data updates every 3 hours</h4>
            </div>
            <div className={styles.bord}>
                <Line data={data} options={options}/>
            </div>
        </div>
    );
}

export default Statistics;
