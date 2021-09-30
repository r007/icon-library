import { COLORS } from '../utils';

export default {
	id: 'chevron-left',
	paths: [
		{
			d: 'M8.204 11.796l6 6 1.591-1.591-3.283-3.284-1.058-1.125 1.057-1.125 3.285-3.285-1.591-1.59-6 6z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M15.472 15.872l-4.42-4.419a1 1 0 000 1.414l3.713 3.712.707-.707z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M14.558 5.442a.5.5 0 00-.707 0l-6 6a.5.5 0 000 .707l6 6a.5.5 0 00.707 0l1.591-1.59a.5.5 0 000-.708l-3.278-3.278-.73-.777.729-.777 3.28-3.279a.5.5 0 000-.707l-1.592-1.59zm-.353 1.06l.883.884-2.93 2.932-.011.01-1.057 1.125a.5.5 0 000 .685l1.057 1.125.011.012 2.93 2.93-.883.884-5.293-5.293 5.293-5.293z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
