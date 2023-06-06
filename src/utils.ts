export function getRandomLicencePlate(): string {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}

export function getTimestamp(date: string | number): number {
  return new Date(date).getTime();
}
