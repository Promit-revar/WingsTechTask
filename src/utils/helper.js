exports.calculatePrice = (discounts, product) => {
  const flatDiscounts = discounts.filter((item) => item.amount > 0);
  const percentDiscounts = discounts.filter((item) => item.percentage > 0.0);
  const maxFlatDiscount = findMaxSubarraySumLessThanN(
    flatDiscounts,
    flatDiscounts.length,
    product.price
  );
  const maxPercentageDiscount = findMaxPercentageDiscount(
    percentDiscounts,
    percentDiscounts.length,
    product.price
  );
  if (maxFlatDiscount > maxPercentageDiscount) {
    return maxPercentageDiscount;
  }
  return maxFlatDiscount;
};
const findMaxPercentageDiscount = (arr, n, sum) => {
  let i = 0;
  let curr_sum = sum;
  while (i < n) {
    curr_sum = curr_sum - Math.floor(curr_sum * (arr[i].percentage / 100));
    i = i + 1;
  }
  return curr_sum;
};
const findMaxSubarraySumLessThanN = (arr, n, sum) => {
  let curr_sum = arr[0].amount,
    max_sum = 0,
    start = 0;
  for (let i = 1; i < n; i++) {
    if (curr_sum <= sum) max_sum = Math.max(max_sum, curr_sum);
    while (curr_sum + arr[i].amount > sum && start < i) {
      curr_sum -= arr[start].amount;
      start++;
    }
    curr_sum += arr[i].amount;
  }
  if (curr_sum <= sum) max_sum = Math.max(max_sum, curr_sum);

  return max_sum;
};
