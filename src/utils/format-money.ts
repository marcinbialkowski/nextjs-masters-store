import type { Money } from '@/types';

export const formatMoney = (money: Money) =>
  new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  }).format(money.amount / 100);
