import { Schema } from 'mongoose'
import { LocationTypeEnum } from '../Enums/LocationType.enum.js'

export const AddressSchema = new Schema(
	{
		formattedAddress: String,
		latitude: Number,
		longitude: Number,
		country: String,
		isoCode: String,
		state: String,
		city: String,
		type: { type: String, enum: Object.values(LocationTypeEnum) },
		coordinates: {
			type: [Number],
			validate: {
				validator: function (arr: number[]) {
					return Array.isArray(arr) && arr.length === 2
				},
				message: 'Coordinates must be an array of two numbers.',
			},
		},
	},
	{ _id: false }
)
