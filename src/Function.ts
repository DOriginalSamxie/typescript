function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 50_000) return income * 1.2
  return income * 1.3
}

calculateTax(10_000, 2022)
