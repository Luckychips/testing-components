import { useCallback, useEffect, useState } from 'react';
import { useCalendarStore } from '@/stores';
import { IStateCalendar, IDayInCalendar, WEEK, MONTH } from '@/types';
import { CalendarHeader } from '@/components/molecules';
import * as S from './styles';

const Calendar = () => {
    const { startDate, setStartDate, endDate, setEndDate, setHolidays } =
        useCalendarStore<IStateCalendar>((state) => state);
    const [data, setData] = useState<IDayInCalendar[]>([]);
    const [calendarYear, setCalendarYear] = useState<number>(new Date().getFullYear());
    const [calendarMonth, setCalendarMonth] = useState<number>(new Date().getMonth());

    const select = (day: IDayInCalendar) => {
        if (startDate && endDate) {
            setStartDate(new Date(calendarYear, calendarMonth, parseInt(day.value)));
            setEndDate(null);
            setHolidays([]);
            return;
        }

        if (startDate) {
            const d = new Date(calendarYear, calendarMonth, parseInt(day.value), 23, 59, 59);
            if (startDate.getTime() > d.getTime()) {
                setEndDate(
                    new Date(
                        startDate.getFullYear(),
                        startDate.getMonth(),
                        startDate.getDate(),
                        23,
                        59,
                        59,
                    ),
                );
                setStartDate(new Date(calendarYear, calendarMonth, parseInt(day.value), 0, 0, 0));
            } else {
                setEndDate(d);
            }
        } else {
            setStartDate(new Date(calendarYear, calendarMonth, parseInt(day.value)));
        }
    };

    const updateDatePerMonth = (counter: number) => {
        const value = calendarMonth + counter;
        if (value >= MONTH.JANUARY) {
            if (value > MONTH.DECEMBER) {
                setCalendarYear(calendarYear + 1);
                setCalendarMonth(MONTH.JANUARY);
            } else {
                setCalendarMonth(calendarMonth + counter);
            }
        } else {
            setCalendarYear(calendarYear - 1);
            setCalendarMonth(MONTH.DECEMBER);
        }
    };

    const updateDatePerYear = (counter: number) => {
        if (calendarYear > 1900 && calendarYear < 2200) {
            setCalendarYear(calendarYear + counter);
        }
    };

    const updateCalendar = useCallback(() => {
        const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1).getDay();
        const lastDate = new Date(calendarYear, calendarMonth + 1, 0).getDate();
        const newData: IDayInCalendar[] = [];
        newData.push({ className: 'header sunday', key: 'header-sunday', value: '일' });
        newData.push({ className: 'header', key: 'header-monday', value: '월' });
        newData.push({ className: 'header', key: 'header-tuesday', value: '화' });
        newData.push({ className: 'header', key: 'header-wednesday', value: '수' });
        newData.push({ className: 'header', key: 'header-thursday', value: '목' });
        newData.push({ className: 'header', key: 'header-friday', value: '금' });
        newData.push({ className: 'header saturday', key: 'header-saturday', value: '토' });

        for (let i = 0; i < firstDayOfMonth; i++) {
            newData.push({
                className: 'body',
                key: `empty-day-${i}`,
                value: '',
            });
        }

        for (let i = 1; i <= lastDate; i++) {
            const oneDay = new Date(calendarYear, calendarMonth, i).getDay();
            const isSunday = oneDay === WEEK.SUNDAY;
            const isSaturday = oneDay === WEEK.SATURDAY;
            newData.push({
                className: `body-clickable ${isSunday ? 'sunday' : ''} ${isSaturday ? 'saturday' : ''}`,
                key: `day-${i}`,
                value: `${i}`,
            });
        }

        setData(newData);
        setCalendarYear(calendarYear);
        setCalendarMonth(calendarMonth);
    }, [calendarYear, calendarMonth]);

    useEffect(() => {
        updateCalendar();
    }, [calendarYear, calendarMonth]);

    useEffect(() => {
        return () => {
            setData([]);
            setStartDate(null);
            setEndDate(null);
            setHolidays([]);
            setCalendarYear(new Date().getFullYear());
            setCalendarMonth(new Date().getMonth());
        };
    }, []);

    return (
        <article>
            <CalendarHeader
                calendarYear={calendarYear}
                calendarMonth={calendarMonth}
                updateDatePerMonth={updateDatePerMonth}
                updateDatePerYear={updateDatePerYear}
            />
            <S.ListContainer data-testid="calendar-day-container">
                {data.map((item) => (
                    <S.ListItem
                        data-testid={`click-day-${item.value}`}
                        key={item.key}
                        className={item.className}
                        onClick={() => select(item)}
                    >
                        {item.value}
                    </S.ListItem>
                ))}
            </S.ListContainer>
        </article>
    );
};

export default Calendar;
