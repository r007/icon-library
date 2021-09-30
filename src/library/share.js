import { COLORS } from '../utils';

export default {
	id: 'share',
	paths: [
		{
			d: 'M16.504 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-10 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm12.5 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d:
				'M4.754 10.25a2.5 2.5 0 01.075-.6 2.5 2.5 0 104.1 2.45 2.5 2.5 0 01-4.175-1.85zM16.504 9a2.5 2.5 0 002.425-1.9 2.5 2.5 0 01-4.1-2.45A2.5 2.5 0 0016.504 9zm-1.75 6.25c.001-.202.026-.404.075-.6a2.5 2.5 0 104.1 2.45 2.5 2.5 0 01-4.175-1.85z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M16.504 4.5a2 2 0 00-1.818 2.834.508.508 0 01.069.135 2 2 0 101.75-2.969zm-3 2c0 .308.047.605.133.885L8.921 9.722a3 3 0 100 3.556l4.716 2.337a3 3 0 10.45-.893l-4.715-2.337a3 3 0 000-1.77l4.716-2.337a3 3 0 10-.583-1.778zm1.182 9.166a.506.506 0 00.069-.135 2 2 0 11-.069.135zM8.254 10.53a.508.508 0 00.069.136 1.993 1.993 0 010 1.668.5.5 0 00-.069.136 2 2 0 110-1.94z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
