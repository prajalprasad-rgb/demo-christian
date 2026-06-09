import { weddingData } from "../data/weddingData";

export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const formatCalendarDate = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

export function googleCalendarLink(event) {
  const start = formatCalendarDate(weddingData.weddingDateISO);
  const end = formatCalendarDate(new Date(new Date(weddingData.weddingDateISO).getTime() + 2 * 60 * 60 * 1000).toISOString());
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${weddingData.coupleTitle} - ${event.title}`,
    dates: `${start}/${end}`,
    details: weddingData.invitationIntro,
    location: `${event.venue}, ${event.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function icsDownload(event) {
  const start = formatCalendarDate(weddingData.weddingDateISO);
  const end = formatCalendarDate(new Date(new Date(weddingData.weddingDateISO).getTime() + 2 * 60 * 60 * 1000).toISOString());
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `SUMMARY:${weddingData.coupleTitle} - ${event.title}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `LOCATION:${event.venue}, ${event.address}`,
    `DESCRIPTION:${weddingData.invitationIntro}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${event.title.toLowerCase().replace(/\s+/g, "-")}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

export function shareInvitation() {
  const shareData = {
    title: `${weddingData.coupleTitle} Wedding Invitation`,
    text: weddingData.invitationIntro,
    url: window.location.href,
  };
  if (navigator.share) return navigator.share(shareData);
  return navigator.clipboard.writeText(window.location.href);
}
