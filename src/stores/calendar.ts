import { create } from 'zustand';
import { TypeCalendarDate, IStateCalendar, IHoliday } from '@/types';

export const useCalendarStore = create<IStateCalendar>((set) => ({
    startDate: null,
    setStartDate: (date: TypeCalendarDate) => set({ startDate: date }),
    endDate: null,
    setEndDate: (date: TypeCalendarDate) => set({ endDate: date }),
    holidays: [],
    setHolidays: (holidays: IHoliday[]) => set({ holidays }),
}));
