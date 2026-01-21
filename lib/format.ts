type PriceInput = string | number | null | undefined;

export const formatPrice = (price?: PriceInput) => {
  if (price === null || price === undefined) {
    return '';
  }

  const trimmed = typeof price === 'string' ? price.trim() : price.toString().trim();
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
