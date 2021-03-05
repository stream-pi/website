// 2021-03-05 12:04:34

/** List of Months */
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Takes in any primative that looks like a number and adds its ordinal suffix.
 *
 * @param {any} num number to format
 * @returns {string} formatter number as a string
 */
function toOrdinalSuffix(num: any): string {
  const int = parseInt(num);
  const digits = [int % 10, int % 100];
  const ordinals = ["st", "nd", "rd", "th"];
  const oPattern = [1, 2, 3, 4];
  const tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
}

/**
 * Takes in a date string *YYYY-MM-DD* and formats it as *Month Nth, Year*.
 *
 * @export
 * @param {string} str date string to format
 * @returns {string} formatted string
 */
export function formatDate(str: string): string {
  // results in [2021, 03, 05]
  const year_month_day = str.split("-");

  const MONTH = months[parseInt(year_month_day[1]) - 1];
  const DAY = toOrdinalSuffix(year_month_day[2]);

  // Month Nth, Year
  return `${MONTH} ${DAY}, ${year_month_day[0]}`;
}

export function formatDateTime(str: string): string {
  // results in [2021-03-05, 12:04:34]
  const date_time = str.split(" ");
  // results in [2021, 03, 05]
  const formatted_date = formatDate(date_time[0]);

  return `${formatted_date} @ ${date_time[1]}`;
}
