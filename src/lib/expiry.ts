/** True when no expiry is set, or the expiry day is still today or in the future. */
export function isUnexpired(expiryDate?: Date | null, asOf: Date = new Date()): boolean {
  if (!expiryDate) return true;
  const today = new Date(asOf.getFullYear(), asOf.getMonth(), asOf.getDate());
  const expiryDay = new Date(
    expiryDate.getFullYear(),
    expiryDate.getMonth(),
    expiryDate.getDate(),
  );
  return expiryDay >= today;
}
