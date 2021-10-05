import { COLORS } from '../utils';

export default {
	id: 'clock',
	paths: [
		{
			d: 'M12 21.375a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M11.572 2A9.158 9.158 0 004.5 5.329 9.177 9.177 0 0117.421 18.25 9.178 9.178 0 0011.572 2z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.625 2.5a.625.625 0 10-1.25 0V6a.625.625 0 101.25 0V4.5zM4.5 11.375a.625.625 0 100 1.25H6a.625.625 0 100-1.25H4.5zm13.5 0a.625.625 0 100 1.25h1.5a.625.625 0 100-1.25H18zm-6 6a.625.625 0 00-.625.625v1.5a.625.625 0 101.25 0V18a.625.625 0 00-.625-.625zm5.442-10.817a.625.625 0 010 .884l-4.234 4.234A1.253 1.253 0 0112 13.25a1.25 1.25 0 01-1.229-1.48L7.218 8.725a.625.625 0 01.814-.95l3.553 3.046a1.248 1.248 0 01.739-.029l4.234-4.234a.625.625 0 01.884 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
