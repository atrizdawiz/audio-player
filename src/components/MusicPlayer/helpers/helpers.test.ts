import { formatTime } from "./helpers";

describe("hej", () => {
  test("handle 0 case", () => {
    expect(formatTime(0)).toEqual("00:00");
  });
  test("should handle a minute", () => {
    expect(formatTime(60)).toEqual("01:00");
  });
  test("should handle minutes and seconds", () => {
    expect(formatTime(61)).toEqual("01:01");
  });
  test("should handle only seconds", () => {
    expect(formatTime(2)).toEqual("00:02");
  });
  test("should handle large case of minutes with seconds", () => {
    expect(formatTime(3610)).toEqual("60:10");
  });
});

export {};
