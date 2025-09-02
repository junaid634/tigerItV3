import type { LocationType } from '../Enums/LocationType.enum.js'

export interface IAddress {
	formattedAddress: string
	latitude: number
	longitude: number
	country: string
	isoCode: string
	state: string
	city: string
	type: LocationType
	coordinates: [number, number]
}
export interface IMyAddress {
	name: string
	isDefault: boolean
	phoneNumber: string
	addressType: 'office' | 'home'
	formattedAddress: string
	latitude: number
	longitude: number
	country: string
	isoCode: string
	state: string
	city: string
	type: LocationType
	coordinates: [number, number]
}

export interface IAddressComponent {
	long_name: string
	short_name: string
	types: string[]
}

interface ILatLngBounds {
	northeast: {
		lat: number
		lng: number
	}
	southwest: {
		lat: number
		lng: number
	}
}

export interface IAddressPrediction {
	description: string
	place_id: string
	types: string[]
	structured_formatting: {
		main_text: string
		secondary_text: string
	}
}

interface Ilatlng {
	latitude: number
	longitude: number
}

export interface IGeocodeDirection {
	routes: [
		{
			bounds: ILatLngBounds
			copyrights: string
			legs: [
				{
					distance: {
						text: string
						value: number
					}
					duration: {
						text: string
						value: number
					}
					end_address: string
					end_location: {
						lat: number
						lng: number
					}
					start_address: string
					start_location: {
						lat: number
						lng: number
					}
					traffic_speed_entry: []
					via_waypoint: []
				}
			]
			overview_polyline: { points: string }
			summary: string
			warnings: []
			waypoint_order: []
		}
	]
	status: 'OK'
}
