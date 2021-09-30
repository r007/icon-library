import { COLORS } from '../utils';

export default {
	id: 'plus',
	paths: [
		{
			d:
				'M18.563 11.063h-5.625V5.436a.938.938 0 00-1.876 0v5.625H5.439a.938.938 0 000 1.876h5.625v5.624a.938.938 0 001.874 0v-5.625h5.626a.938.938 0 000-1.874z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M13 5h-1v6.5a.5.5 0 00.5.5H19v-1h-6V5z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M10.983 4.421a1.438 1.438 0 012.454 1.016v5.125h5.126a1.438 1.438 0 010 2.876h-5.125v5.124a1.438 1.438 0 01-2.876 0v-5.125H5.439a1.438 1.438 0 010-2.874h5.125V5.436c0-.38.151-.746.42-1.016zM12 5a.438.438 0 00-.438.438v5.625a.5.5 0 01-.5.5H5.439a.438.438 0 000 .874h5.625a.5.5 0 01.5.5v5.626a.438.438 0 00.874 0v-5.625a.5.5 0 01.5-.5h5.626a.438.438 0 000-.876h-5.625a.5.5 0 01-.5-.5V5.439A.438.438 0 0012 5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
