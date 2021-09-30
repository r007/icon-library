import { COLORS } from '../utils';

export default {
	id: 'text-field',
	paths: [
		{
			d: 'M5 9h14v6H5V9z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M19 9H5v1h9.333v5h.934v-5H19V9z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M14 5.5a.5.5 0 000 1c.28 0 .54.101.725.268a.795.795 0 01.275.589V8H5a1 1 0 00-1 1v6a1 1 0 001 1h10v.643a.74.74 0 01-.069.311.856.856 0 01-.206.278c-.09.082-.201.15-.326.197A1.16 1.16 0 0114 17.5a.5.5 0 000 1c.256 0 .51-.046.75-.135a2.019 2.019 0 00.75-.493 2.019 2.019 0 00.75.493c.24.09.494.135.75.135a.5.5 0 000-1c-.138 0-.273-.025-.399-.072a1.018 1.018 0 01-.326-.196.856.856 0 01-.206-.278.744.744 0 01-.069-.31V16h3a1 1 0 001-1V9a1 1 0 00-1-1h-3v-.643c0-.21.092-.423.275-.589.184-.167.445-.268.725-.268a.5.5 0 000-1 2.084 2.084 0 00-1.5.628A2.084 2.084 0 0014 5.5zM15 9H5v6h10V9zm1 6V9h3v6h-3z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
