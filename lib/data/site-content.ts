import siteContentData from "@/content/site-content.json";
import type { SiteContent } from "@/lib/types";

export function getSiteContent(): SiteContent {
  return siteContentData as SiteContent;
}
