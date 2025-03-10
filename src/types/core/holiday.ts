export type TypeCalendarDate = Date | null;

export interface IHoliday {
    date: string;
    localName?: string;
    name?: string;
    countryCode?: string;
    fixed: boolean;
    global: boolean;
    counties?: string;
    launchYear?: number;
    types: string[]; //Public, Bank, School, Authorities, Optional, Observance
    isFolded: boolean;
}
