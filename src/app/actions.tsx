import { MonthlyDownloadsUrl } from "@/utils/constants";

// export const dynamic = "force-dynamic";
export const totalDownloads = async () => {
  const res = await fetch(MonthlyDownloadsUrl, { next: { revalidate: 60 } });
  const data = await res.json();
  return data.downloads;
};
