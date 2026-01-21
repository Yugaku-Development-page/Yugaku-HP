export const formatPrice = (price?: string) => {
  if (!price) {
    return '';
  }

  const trimmed = price.trim();
  if (!trimmed) {
    return '';
  }

  const match = trimmed.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) {
    return trimmed;
  }

  const [, prefix, numberPart, suffix] = match;
  const formattedNumber = Number(numberPart).toLocaleString('ja-JP');
  return `${prefix}${formattedNumber}${suffix}`;
};
