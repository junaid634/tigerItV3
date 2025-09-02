import mongoose, { Schema } from 'mongoose'
import Assets from '../Constants/Assets.js'
import { LocationTypeEnum } from '../Enums/LocationType.enum.js'
import { PlatformEnum } from '../Enums/Platform.enum.js'
import { RoleEnum } from '../Enums/Role.enum.js'
import { StatusEnum } from '../Enums/Status.enum.js'
import type { IUserModule } from '../Interfaces/IUser.js'
import { AddressSchema } from './Address.Model.js'

const IdCardInfoSchema = new Schema(
	{
		front: String,
		back: String,
		status: {
			type: String,
			enum: Object.values(StatusEnum),
			default: StatusEnum.pending,
		},
		description: String,
		seen: {
			type: Boolean,
			default: false,
		},
	},
	{ _id: false }
)

const PersonalInformationSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		phoneNumber: String,
		gender: String,
		dob: Date,
		idCard: IdCardInfoSchema,
		profilePic: String,
		personalAddress: AddressSchema,
	},
	{ _id: false }
)

const CredentialDetailsSchema = new Schema(
	{
		email: String,
		password: String,
		googleId: String,
	},
	{ _id: false }
)

const VerifyCredentialsSchema = new Schema(
	{
		OTP: Number,
		OTPExpires: Number,
		verifyStatus: Boolean,
		mobileVerifyStatus: Boolean,
	},
	{ _id: false }
)

const DriverAccountSchema = new Schema(
	{
		vehicleDetails: {
			vehicleLicenseFront: String,
			vehicleLicenseBack: String,
			vehicleImage: String,
			make: String,
			model: String,
			color: String,
			capacity: String,
			registrationNo: String,
		},
		ssn: String,
		seen: {
			type: Boolean,
			default: false,
		},
		status: {
			type: String,
			enum: Object.values(StatusEnum),
			default: StatusEnum.pending,
		},
		rating: {
			totalRating: Number,
			numRating: Number,
		},
	},
	{ _id: false }
)

const PositionSchema = new Schema(
	{
		type: { type: String, enum: Object.values(LocationTypeEnum) },
		coordinates: [Number],
		updatedAt: Date,
		latitude: Number,
		longitude: Number,
		heading: Number,
		speed: Number,
	},
	{ _id: false }
)

const DeviceInfoSchema = new Schema(
	{
		fcm: String,
		deviceId: String,
		platform: { type: String, enum: Object.values(PlatformEnum) },
		loginAt: { type: Date, default: Date.now },
	},
	{ _id: false }
)

const BankInformationSchema = new Schema(
	{
		accountHolderName: String,
		bankName: String,
		iban: String,
		branch: String,
		accountTitle: String,
	},
	{ _id: false }
)

const WalletSchema = new Schema(
	{
		balance: {
			amount: Number,
			currency: String,
		},
		square: {
			squareId: String,
			cnonId: String,
		},
		bankInformation: BankInformationSchema,
	},
	{ _id: false }
)

const PreferencesSchema = new Schema(
	{
		currency: {
			name: String,
			code: String,
		},
	},
	{ _id: false }
)

const UserSchema = new Schema(
	{
		primaryBusiness: {
			type: Schema.Types.ObjectId,
			ref: Assets.models.Business,
		},
		personalInformation: PersonalInformationSchema,
		credentialDetails: CredentialDetailsSchema,
		verifyCredentials: VerifyCredentialsSchema,
		accountActive: Boolean,
		role: {
			type: String,
			enum: Object.values(RoleEnum),
			default: RoleEnum.buyer,
		},
		driverAccount: DriverAccountSchema,
		position: PositionSchema,
		deviceInfo: [DeviceInfoSchema],
		isOnline: Boolean,
		wallet: WalletSchema,
		loyaltyPoints: Number,
		preferences: PreferencesSchema,
		myAddresses: [AddressSchema],
		serverData: {
			recentProductSearches: [String],
			recentFoodSearches: [String],
		},
		status: {
			type: String,
			enum: Object.values(StatusEnum),
			default: StatusEnum.pending,
		},
	},
	{ timestamps: true }
)

export const UserModel = mongoose.model<IUserModule.IModel>(
	Assets.models.User,
	UserSchema
)
