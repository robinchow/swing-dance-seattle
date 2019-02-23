export const API_PATH_CLASSES = "/classes";
export const API_PATH_DANCES = "/dances";
export const API_PATH_EVENTS = "/events";

export const ROUTE_HOME = "/";
export const ROUTE_CLASSES = "/classes";
export const ROUTE_DANCES = "/dances";
export const ROUTE_EVENTS = "/events";

export const MONTH_MAP = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export const DAY_MAP = [
  "Sundays",
  "Mondays",
  "Tuesdays",
  "Wednesdays",
  "Thursdays",
  "Fridays",
  "Saturdays"
];

// assumes DAY_MAP starts from "Sundays". Otherwise ... this breaks.
export const DAY_OF_WEEK_MAP = DAY_MAP.map((day, index) => [day, index]);

export const RECURRENCE_TIME_EVERY = "EVERY";
export const RECURRENCE_TIME_FIRST = "FIRST";
export const RECURRENCE_TIME_SECOND = "SECOND";
export const RECURRENCE_TIME_THIRD = "THIRD";
export const RECURRENCE_TIME_FOURTH = "FOURTH";

export const RECURRENCE_TIME_MAP = {
  [RECURRENCE_TIME_EVERY]: "Weekly",
  [RECURRENCE_TIME_FIRST]: "First",
  [RECURRENCE_TIME_SECOND]: "Second",
  [RECURRENCE_TIME_THIRD]: "Third",
  [RECURRENCE_TIME_FOURTH]: "Fourth"
};

export const DANCE_STYLE_LINDY = "LINDY";
export const DANCE_STYLE_BALBOA = "BALBOA";
export const DANCE_STYLE_BLUES = "BLUES";
export const DANCE_STYLE_SHAG = "SHAG";
export const DANCE_STYLE_JAZZ = "JAZZ";

export const DANCE_STYLE_MAP = {
  [DANCE_STYLE_LINDY]: "Lindy Hop",
  [DANCE_STYLE_BALBOA]: "Balboa",
  [DANCE_STYLE_BLUES]: "Blues",
  [DANCE_STYLE_SHAG]: "Shag",
  [DANCE_STYLE_JAZZ]: "Solo Jazz"
};

export const ONE_HOUR = 3.6e6;
export const ONE_YEAR = 3.154e10;
export const REDIRECT_STATUS = 301;
