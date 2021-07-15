import { getCalendarData } from "api/api";
import { useQuery } from "react-query";

export function useCalendar(rerenderKey, initialData) {
  const { data: calendarData } = useQuery(
    ["fetchCalendarData", rerenderKey],
    () => getCalendarData(),
    {
      initialData: JSON.parse(initialData),
      refetchOnWindowFocus: false,
    }
  );

  return calendarData;
}
