export const getQueryFromObject = (obj: any) => {
  if (typeof obj !== "object") {
    return "";
  }
  const query = new URLSearchParams(obj).toString();
  if (!query) {
    return "";
  }
  return `?${query}`;
};

export function capitalizeFirstLetter(text: string | undefined): string {
  if (!text) return "--";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const renderNumberWithSign = (number: number) => {
  if (number > 0) {
    return `+${number}`;
  }
  return number;
};
