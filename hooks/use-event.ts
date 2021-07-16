import { getEventData } from "api/api";
import { useQuery } from "react-query";

export function useEvent(initialData) {
  const { data: eventData } = useQuery("fetchEventData", () => getEventData(), {
    initialData: JSON.parse(initialData),
    refetchOnWindowFocus: false,
  });

  return eventData;
}
