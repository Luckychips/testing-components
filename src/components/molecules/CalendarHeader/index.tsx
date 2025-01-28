import { useMemo } from 'react';
import * as S from './styles';

interface CalendarHeaderProps {
    calendarYear?: number;
    calendarMonth?: number;
    updateDatePerMonth: (month: number) => void;
    updateDatePerYear: (year: number) => void;
}

const CalendarHeader = ({
    calendarYear,
    calendarMonth,
    updateDatePerMonth,
    updateDatePerYear,
}: CalendarHeaderProps) => {
    const text = useMemo(() => {
        const month = Number(calendarMonth) + 1;
        if (calendarYear && month) {
            return `${calendarYear}년 ${month}월`;
        }

        return '';
    }, [calendarYear, calendarMonth]);

    return (
        <S.Container>
            <S.PrevNext
                data-testid="calendar-button-decrease-year"
                onClick={() => updateDatePerYear(-1)}
            >
                PP
            </S.PrevNext>
            <S.PrevNext
                data-testid="calendar-button-decrease-month"
                onClick={() => updateDatePerMonth(-1)}
            >
                Prev
            </S.PrevNext>
            <S.Text data-testid="calendar-header-title">{text}</S.Text>
            <S.PrevNext
                data-testid="calendar-button-increase-month"
                onClick={() => updateDatePerMonth(1)}
            >
                Next
            </S.PrevNext>
            <S.PrevNext
                data-testid="calendar-button-increase-year"
                onClick={() => updateDatePerYear(1)}
            >
                NN
            </S.PrevNext>
        </S.Container>
    );
};

export default CalendarHeader;
