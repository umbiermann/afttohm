import { Currency, Dinero, toFormat } from "dinero.js";

export function intlFormat(
  dineroObject: Dinero<number>,
  locale: string,
  options = {}
) {
  function transformer({
    amount,
    currency,
  }: {
    amount: number;
    currency: Currency<number>;
  }) {
    return amount.toLocaleString(locale, {
      ...options,
      style: "currency",
      currency: currency.code,
    });
  }

  return toFormat(dineroObject, transformer);
}
