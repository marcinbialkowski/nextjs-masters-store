export const formatRating = (rating: number) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(rating);
