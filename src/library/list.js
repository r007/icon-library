import { COLORS } from '../utils';

export default {
	id: 'list',
	paths: [
		{
			d:
				'M6.375 5.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm15-1.246h-11.25v2.5h11.25v-2.5zm0 13.75h-11.25v2.5h11.25v-2.5zm-11.25-6.879h11.25v2.5h-11.25v-2.5zm-5.625 10a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM6.375 12a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M6.375 12a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm15-1.25h-11.25v2.5h11.25v-2.5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M3.25 5.125a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm1.25-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.625.629a.625.625 0 00-.625.625v2.5c0 .345.28.625.625.625h11.25c.345 0 .625-.28.625-.625v-2.5a.625.625 0 00-.625-.625h-11.25zm.625 2.5v-1.25h10v1.25h-10zm-.625 4.371a.625.625 0 00-.625.625v2.5c0 .345.28.625.625.625h11.25c.345 0 .625-.28.625-.625v-2.5a.625.625 0 00-.625-.625h-11.25zm.625 2.5v-1.25h10v1.25h-10zm-.625 4.379a.625.625 0 00-.625.625v2.5c0 .345.28.625.625.625h11.25c.345 0 .625-.28.625-.625v-2.5a.625.625 0 00-.625-.625h-11.25zm.625 2.5v-1.25h10v1.25h-10zM4.5 17.625a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM2 18.875a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM3.25 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM4.5 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};