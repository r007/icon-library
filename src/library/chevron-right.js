import { COLORS } from '../utils';

export default {
	id: 'arrow-up',
	paths: [
		{
			d: 'M15.796 11.796l-6 6-1.592-1.591 3.284-3.284 1.058-1.125-1.057-1.125-3.285-3.285 1.591-1.59 6 6z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M8.528 15.872l4.42-4.419a1 1 0 010 1.414L9.234 16.58l-.707-.707z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M9.442 5.442a.5.5 0 01.707 0l6 6a.5.5 0 010 .707l-6 6a.5.5 0 01-.707 0L7.85 16.56a.5.5 0 010-.708l3.278-3.278.73-.777-.73-.777-3.276-3.28a.5.5 0 010-.707l1.59-1.59zm.353 1.06l-.883.884 2.93 2.932.011.01 1.057 1.125a.5.5 0 010 .685l-1.057 1.125-.011.012-2.93 2.93.883.884 5.293-5.293-5.293-5.293z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
