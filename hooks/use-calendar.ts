import { getCalendarData } from "api/api";
import { useQuery } from "react-query";

export function useCalendar(rerenderKey) {
  const { data: calendarData } = useQuery(
    ["fetchCalendarData", rerenderKey],
    () => getCalendarData(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return calendarData;
}
