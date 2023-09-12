interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Sales Representative'],
  customerRoles: ['Customer'],
  tenantRoles: ['Sales Representative', 'Customer Service Representative', 'Business Owner'],
  tenantName: 'Supplier',
  applicationName: 'Automobile Parts Manufacturing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View suppliers and their products',
    'Search for specific products by supplier',
    'View product stock levels',
    'View product prices',
  ],
  ownerAbilities: [
    'Manage Suppliers',
    'Manage auto parts and body parts details',
    'Invite Business Owners to the application',
    "Update stock levels and mark items as 'out of stock'",
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7b0b33a1-cdf6-46f4-a9d8-97311c4a63fb',
};
