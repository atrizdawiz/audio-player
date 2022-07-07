import { formatTime } from "./components/TimeDisplay/TimeDisplay";

describe("hej", () => {
  test("should ...", () => {
    expect(formatTime(60)).toEqual("01:00");
  });
  test("should...", () => {
    expect(formatTime(61)).toEqual("01:01");
  });
  test("should...", () => {
    expect(formatTime(2)).toEqual("00:02");
  });
  test("should...", () => {
    expect(formatTime(3600)).toEqual("60:00");
  });
  test("should...", () => {
    expect(formatTime(3610)).toEqual("60:10");
  });
  test("should...", () => {
    expect(formatTime(3610 * 2)).toEqual("120:20");
  });
});

export {};
