import { DateTime } from 'luxon';
import Counter from '../components/counter/Counter';

export default function Counters() {
    var carCountStart = 2805839;
    const carCountTarget = 2805839 + 88000 + 100000;
    const carCountDateStart = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
    const carCountDateEnd = DateTime.fromObject({ year: 2021, month: 12, day: 31 });
    return (<Counter
        startDate={carCountDateStart}
        targetDate={carCountDateEnd}
        startCount={carCountStart}
        targetCount={carCountTarget}
    />);
}