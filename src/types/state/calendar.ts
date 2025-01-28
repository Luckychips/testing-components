import { TypeCalendarDate, IHoliday } from '@/types';

export interface IStateCalendar {
    startDate: TypeCalendarDate;
    setStartDate: (date: TypeCalendarDate) => void;
    endDate: TypeCalendarDate;
    setEndDate: (date: TypeCalendarDate) => void;
    holidays: IHoliday[];
    setHolidays: (holidays: IHoliday[]) => void;
}
