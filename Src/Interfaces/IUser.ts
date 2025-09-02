import { Document, type ObjectId } from 'mongoose'
import type { LocationType } from '../Enums/LocationType.enum.js'
import type { Platform } from '../Enums/Platform.enum.js'
import type { Role } from '../Enums/Role.enum.js'
import type { Status } from '../Enums/Status.enum.js'
import type { IAddress, IMyAddress } from './IAddress.js'

export declare namespace IUserModule {
	interface IidCardInfo {
		front: string
		back: string
		status: Status
		description: string
		seen: boolean
	}

	interface IPersonalInformation {
		firstName: string
		lastName: string
		phoneNumber: string
		gender: string
		dob: Date
		idCard: IidCardInfo
		profilePic: string
		personalAddress: IAddress
	}

	interface ICredentialDetails {
		email: string
		password: string
		googleId: string
	}

	interface ILocation {
		type: LocationType
		coordinates: [number, number]
	}

	interface IPosition {
		type: String
		coordinates: [number, number]
		updatedAt: Date
		latitude: number
		longitude: number
		heading: number
		speed: number
	}

	interface IVerifyCredentials {
		OTP: number
		OTPExpires: number
		verifyStatus: boolean
		mobileVerifyStatus: boolean
	}

	interface IDriverAccount {
		// idCard: { front: string; back: string }
		vehicleDetails: {
			vehicleLicenseFront: string
			vehicleLicenseBack: string
			vehicleImage: string
			make: string
			model: string
			color: string
			capacity: string
			registrationNo: string
		}
		ssn: string
		seen: boolean
		status: Status
		rating: {
			totalRating: number
			numRating: number
		}
	}

	interface IDeviceInfo {
		fcm: string
		deviceId: string
		platform: Platform
		loginAt: Date
	}
	interface IWallet {
		balance: {
			amount: number
			currency: string
		}
		square: { squareId?: string; cnonId?: string }
		bankInformation: IBankInformation
	}
	interface IBankInformation {
		accountHolderName: string
		bankName: string
		iban: string
		branch: string
		accountTitle: string
	}

	interface Preferences {
		currency: {
			name: string
			code: string
		}
	}

	interface IModel extends Document {
		_id: ObjectId
		primaryBusiness: ObjectId
		personalInformation: IPersonalInformation
		credentialDetails: ICredentialDetails
		verifyCredentials: IVerifyCredentials
		accountActive: boolean
		role: Role
		driverAccount: IDriverAccount
		position: IPosition
		deviceInfo: IDeviceInfo[]
		isOnline: boolean
		wallet: IWallet
		loyaltyPoints: number
		preferences: Preferences
		myAddresses: IMyAddress[]
		serverData: {
			recentProductSearches: string[]
			recentFoodSearches: string[]
		}
	}
}
