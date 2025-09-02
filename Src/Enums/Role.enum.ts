export const RoleEnum = {
	seller: 'seller',
	driver: 'driver',
	buyer: 'buyer',
} as const
export type Role = (typeof RoleEnum)[keyof typeof RoleEnum]
