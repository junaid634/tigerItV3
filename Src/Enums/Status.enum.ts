export const StatusEnum = {
	pending: 'pending',
	approved: 'approved',
	rejected: 'rejected',
} as const
export type Status = (typeof StatusEnum)[keyof typeof StatusEnum]
