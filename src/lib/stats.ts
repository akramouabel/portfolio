const LEADING_STAT = /^([\d.,]+[%xXkKmMbB+]*)\s*(.*)$/;

export function splitStat(value: string | unknown) {
  // Ensure value is a valid string before calling .match
  const strValue = typeof value === "string" ? value : "";
  
  const match = strValue.match(LEADING_STAT);
  if (!match || !match[1]) return { stat: null, rest: strValue };
  
  return { stat: match[1], rest: match[2] };
}