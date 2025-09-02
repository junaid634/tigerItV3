//write enum for ['android', 'ios']
export enum PlatformEnum {
	Android = 'android',
	IOS = 'ios',
}
export type Platform =
	| keyof typeof PlatformEnum
	| (typeof PlatformEnum)[keyof typeof PlatformEnum]
