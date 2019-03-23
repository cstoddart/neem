export function formatCurrency(amountInPennies) {
  if (amountInPennies) {
    const amountInDollars = amountInPennies / 100;
    return `$${amountInDollars.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  return amountInPennies;
}

export function formatNumber(number) {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return number;
}
