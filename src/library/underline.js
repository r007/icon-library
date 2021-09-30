import { COLORS } from '../utils';

export default {
	id: 'underline',
	paths: [
		{
			d: 'M4.5 4.5h15v15h-15v-15z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M6 5.5v13h13.5v1h-15v-15l1.5 1z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M4.5 4a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5h-15zM5 19V5h14v14H5zM6.75 6.25a.5.5 0 000 1h.75v4.8c0 2.543 1.842 4.675 4.5 4.675s4.5-2.132 4.5-4.675v-4.8h.75a.5.5 0 000-1h-2.5a.5.5 0 000 1h.75v4.8c0 2.057-1.458 3.675-3.5 3.675s-3.5-1.618-3.5-3.675v-4.8h.75a.5.5 0 000-1h-2.5zm-.25 11a.5.5 0 000 1h11a.5.5 0 000-1h-11z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
