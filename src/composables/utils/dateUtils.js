import moment from "moment";

export const DATE_FORMAT = {
  YEAR_TO_DAY: "YYYY/MM/DD",
  YEAR_TO_MINUES: "YYYY/MM/DD HH:mm",
  YEAR_TO_SECONDS: "YYYY/MM/DD HH:mm:ss",
};

export const isValidFormat = (format) => {
  if (!format || typeof format != "string") {
    return false;
  }
  for (const key of Object.keys(DATE_FORMAT)) {
    if (DATE_FORMAT[key] == format) {
      return true;
    }
  }
  return false;
};

export const convertDateToString = (date, format) => {
  if (typeof date == "string") {
    return date;
  }
  if (!date || !(date instanceof Date)) {
    return null;
  }
  if (!isValidFormat(format)) {
    return null;
  }
  return moment(date).format(format);
};

export const convertStringToDate = (value, format) => {
  if (value instanceof Date) {
    return value;
  }
  if (!value || typeof value != "string") {
    return null;
  }
  if (!isValidFormat(format)) {
    return null;
  }
  const date = moment(value, format, true);
  if (!date.isValid()) {
    return null;
  }
  return date.toDate();
};
