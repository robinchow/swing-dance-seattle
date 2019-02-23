import {
  DANCE_STYLE_MAP,
  DAY_MAP,
  DAY_OF_WEEK_MAP,
  MONTH_MAP,
  RECURRENCE_TIME_EVERY,
  RECURRENCE_TIME_MAP
} from "./constants";

const getPeriod = time =>
  time
    .replace(/\s/g, "")
    .substr(-1, 2)
    .toLowerCase();

const sortOccasionsByTime = occasions =>
  occasions.slice().sort((a, b) => {
    if (!a.time) {
      return 1;
    } else if (!b.time) {
      return -1;
    }

    const aPeriod = getPeriod(a.time);
    const bPeriod = getPeriod(b.time);

    if (aPeriod === "am" && bPeriod === "pm") {
      return -1;
    } else if (aPeriod === "pm" && bPeriod === "am") {
      return 1;
    }

    if (a.time === b.time) {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    } else if (a.time < b.time) {
      return -1;
    } else {
      return 1;
    }
  });

const groupItemsByKey = (items, key) => {
  return items.reduce((accum, item) => {
    accum[item[key]] = [...(accum[item[key]] || []), item];
    return accum;
  }, {});
};

export const getOccasionsByDay = occasions => {
  const sortedOccasions = sortOccasionsByTime(occasions);
  return groupItemsByKey(sortedOccasions, "recurrenceDay");
};

export const getOccasionsByDate = occasions => {
  const sortedOccasions = sortOccasionsByTime(occasions);
  return groupItemsByKey(sortedOccasions, "dateStart");
};

const formatListToString = (list, itemStringMap, useAmpersand) => {
  return list
    .map((item, index) => {
      const itemString = itemStringMap[item];

      switch (index) {
        case list.length - 1:
          return itemString;
        case list.length - 2:
          return useAmpersand ? `${itemString} & ` : `${itemString}, `;
        default:
          return `${itemString}, `;
      }
    })
    .join("");
};

export const formatRecurrence = (recurrenceTimes, recurrenceDay) => {
  if (recurrenceTimes.some(time => time === RECURRENCE_TIME_EVERY)) {
    return RECURRENCE_TIME_MAP[RECURRENCE_TIME_EVERY];
  }

  const recurrencesString = formatListToString(
    recurrenceTimes,
    RECURRENCE_TIME_MAP,
    true
  );

  return `${recurrencesString} ${DAY_MAP[recurrenceDay]}`;
};

export const formatDanceStyles = danceStyles =>
  formatListToString(danceStyles, DANCE_STYLE_MAP);

export const formatDate = (dateString, withSuffix) => {
  const date = new Date(dateString);
  const dayOfMonth = date.getDate();
  let dayOfMonthDisplay = `${dayOfMonth}`;

  if (withSuffix) {
    switch (dayOfMonth % 10) {
      case 1:
        dayOfMonthDisplay += "st";
        break;
      case 2:
        dayOfMonthDisplay += "nd";
        break;
      case 3:
        dayOfMonthDisplay += "rd";
        break;
      default:
        dayOfMonthDisplay += "th";
    }
  }

  return `${MONTH_MAP[date.getMonth()]} ${dayOfMonthDisplay}`;
};

export const formatLink = link => {
  return link.includes("http://") || link.includes("https://")
    ? link
    : `https://${link}`;
};

export const daysStartingToday = () => {
  // assumes DAY_OF_WEEK_MAP starts from "Sundays". Otherwise ... this breaks.
  let dayNum = new Date().getDay();
  const _list = DAY_OF_WEEK_MAP.slice(dayNum).concat(
    DAY_OF_WEEK_MAP.slice(0, dayNum)
  );
  _list[0] = [..._list[0]]; // to avoid changing the original list
  _list[0][0] = "Today";

  return _list;
};
