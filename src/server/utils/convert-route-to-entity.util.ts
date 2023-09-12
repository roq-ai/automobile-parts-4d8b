const mapping: Record<string, string> = {
  orders: 'order',
  'order-items': 'order_item',
  parts: 'part',
  searches: 'search',
  suppliers: 'supplier',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
