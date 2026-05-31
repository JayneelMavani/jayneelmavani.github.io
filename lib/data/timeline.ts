import timelineData from "@/content/timeline.json";
import type { TimelineEntry } from "@/lib/types";

export function getTimelineEntries(): TimelineEntry[] {
  return timelineData as TimelineEntry[];
}
