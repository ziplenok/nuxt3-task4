export const useFormatDate = () => {
  function formatTimestampz(timestampz: string) {
    const date = new Date(timestampz);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("default", options).format(
      date
    );
    return formattedDate;
  }
  return { formatTimestampz };
};
