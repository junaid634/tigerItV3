//location type: Point, LineString, Polygon
//write enum

export const LocationTypeEnum = {
	Point: 'Point',
	LineString: 'LineString',
	Polygon: 'Polygon',
} as const
export type LocationType =
	(typeof LocationTypeEnum)[keyof typeof LocationTypeEnum]
