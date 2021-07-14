import { getEventData } from "api/api";
import { useQuery } from "react-query";

export function useEvent() {
  const { data: eventData } = useQuery("fetchEventData", () => getEventData(), {
    refetchOnWindowFocus: false,
  });

  return eventData;
}
