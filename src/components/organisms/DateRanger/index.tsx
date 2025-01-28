import { useEffect } from 'react';
import { IStateCalendar, IHoliday } from '@/types';
import { Calendar } from '@/components/organisms';
import { useCalendarStore } from '@/stores';

const DateRanger = () => {
    const { startDate, setStartDate, endDate, setEndDate, setHolidays } =
        useCalendarStore<IStateCalendar>((state) => state);

    const getBetweenYears = (from: Date, to: Date) => {
        const toYear = to.getFullYear();
        const toMonth = to.getMonth();
        const toDay = to.getDate();
        const fromYear = from.getFullYear();
        const fromMonth = from.getMonth();
        const fromDay = from.getDate();
        let diff = toYear - fromYear;
        if (fromMonth > toMonth) {
            diff--;
        } else {
            if (fromMonth === toMonth) {
                if (fromDay > toDay) diff--;
            }
        }

        return diff;
    };

    const getHolidays = async (years: number[]) => {
        const result = [];
        for (let i = 0; i < years.length; i++) {
            const response = await fetch(
                `https://date.nager.at/api/v3/PublicHolidays/${years[i]}/KR`,
            );
            if (response.ok && response.status === 200) {
                const data = await response.json();
                result.push(...data);
            }
        }

        return result;
    };

    useEffect(() => {
        (async () => {
            if (startDate) {
                if (startDate.getFullYear() > 2025) {
                    alert('시작일은 2025년까지 선택할 수 있습니다');
                    setStartDate(null);
                    return;
                }

                if (endDate) {
                    if (endDate.getFullYear() > 2025) {
                        alert('종료일은 2025년까지 선택할 수 있습니다');
                        setEndDate(null);
                        return;
                    }

                    if (getBetweenYears(startDate, endDate) >= 2) {
                        alert('기간은 최대 2년까지 선택할 수 있습니다');
                        setStartDate(null);
                        setEndDate(null);
                        return;
                    }

                    const starts = [startDate.getFullYear()];
                    const ends = [endDate.getFullYear()];
                    const years = [...new Set([...starts, ...ends])];
                    const response = await getHolidays(years);
                    const from = new Date(startDate);
                    const to = new Date(endDate);
                    to.setHours(23);
                    to.setMinutes(59);
                    to.setSeconds(59);
                    const holidays: IHoliday[] = [];
                    for (let i = 0; i < response.length; i++) {
                        const holiday = response[i];
                        const target = new Date(holiday.date);
                        target.setSeconds(1);
                        if (
                            target.getTime() >= from.getTime() &&
                            target.getTime() <= to.getTime()
                        ) {
                            holidays.push(
                                Object.assign(holiday, {
                                    isFolded: true,
                                }),
                            );
                        }
                    }

                    setHolidays(holidays);
                    if (holidays.length === 0) {
                        alert('검색된 공휴일이 없습니다');
                        setStartDate(null);
                        setEndDate(null);
                    }
                }
            }
        })();
    }, [startDate, endDate]);

    return (
        <section>
            <Calendar />
        </section>
    );
};

export default DateRanger;
