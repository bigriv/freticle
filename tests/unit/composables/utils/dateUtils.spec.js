import * as dateUtils from "@/composables/utils/dateUtils";

describe("isValidFormat test", () => {
  it("nullを渡してfalseが返却される", () => {
    expect(dateUtils.isValidFormat(null)).toBe(false);
  });
  it("undefinedを渡してfalseが返却される", () => {
    expect(dateUtils.isValidFormat(undefined)).toBe(false);
  });
  it("空文字を渡してfalseが返却される", () => {
    expect(dateUtils.isValidFormat("")).toBe(false);
  });
  it("文字列以外を渡してfalseが返却される", () => {
    expect(dateUtils.isValidFormat(123)).toBe(false);
  });
  it("不正な書式の文字列を渡してfalse返却される", () => {
    expect(dateUtils.isValidFormat("abc")).toBe(false);
  });
  it("正しい書式の文字列を渡してtrue返却される", () => {
    expect(dateUtils.isValidFormat(dateUtils.DATE_FORMAT.YEAR_TO_DAY)).toBe(
      true
    );
  });
});

describe("convertDateToString test", () => {
  const format = dateUtils.DATE_FORMAT.YEAR_TO_DAY;
  it("String型を渡してそのまま値が返却される", () => {
    const value = "abc";
    expect(dateUtils.convertDateToString(value, format)).toBe(value);
  });
  it("nullを渡してnullが返却される", () => {
    expect(dateUtils.convertDateToString(null, format)).toBeNull();
  });
  it("undefinedを渡してnullが返却される", () => {
    expect(dateUtils.convertDateToString(undefined, format)).toBeNull();
  });
  it("空文字を渡して空文字が返却される", () => {
    expect(dateUtils.convertDateToString("", format)).toBe("");
  });
  it("Date型の値以外を渡してnullが返却される", () => {
    expect(dateUtils.convertDateToString(123, format)).toBeNull();
  });
  it("Date型の値を渡して日付の文字列が返却される", () => {
    const date = new Date("2000/01/01 00:00:00");
    expect(dateUtils.convertDateToString(date, format)).toBe("2000/01/01");
  });
  it("書式に不正な値を渡してnullが返却される", () => {
    const date = new Date("2000/01/01 00:00:00");
    expect(dateUtils.convertDateToString(date, "abc")).toBeNull();
  });
});

describe("convertStringToDate test", () => {
  const format = dateUtils.DATE_FORMAT.YEAR_TO_DAY;
  it("Date型を渡してそのまま値が返却される", () => {
    const date = new Date("1999/12/31 23:59:59");
    expect(dateUtils.convertStringToDate(date, format)).toBe(date);
  });
  it("nullを渡してnullが返却される", () => {
    expect(dateUtils.convertStringToDate(null, format)).toBeNull();
  });
  it("undefinedを渡してnullが返却される", () => {
    expect(dateUtils.convertStringToDate(undefined, format)).toBeNull();
  });
  it("空文字を渡してnullが返却される", () => {
    expect(dateUtils.convertStringToDate("", format)).toBeNull();
  });
  it("文字列以外を渡してnullが返却される", () => {
    expect(dateUtils.convertStringToDate(123, format)).toBeNull();
  });
  it("不正な書式の文字列を渡してnullが返却される", () => {
    expect(dateUtils.convertStringToDate("abc", format)).toBeNull();
  });
  it("指定した書式と異なる書式の文字列を渡してnullが返却される", () => {
    expect(
      dateUtils.convertStringToDate("2000/01/01 12:00", format)
    ).toBeNull();
  });
  it("指定した書式と同じ書式の文字列を渡して日付型のデータが返却される", () => {
    expect(dateUtils.convertStringToDate("2000/01/01", format)).toEqual(
      new Date("2000/01/01 00:00:00")
    );
  });
  it("書式に不正な値を渡してnullが返却される", () => {
    expect(dateUtils.convertStringToDate("2000/01/01", "abc")).toBeNull();
  });
});
