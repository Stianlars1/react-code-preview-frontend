import { MonthlyDownloadsUrl } from "@/utils/constants";

export const totalDownloads = async () => {
  const res = await fetch(MonthlyDownloadsUrl);
  const data = await res.json();
  return data.downloads;
};
