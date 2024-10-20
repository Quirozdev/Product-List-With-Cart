const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function formatPrice(price: number) {
  return formatter.format(price)
}
