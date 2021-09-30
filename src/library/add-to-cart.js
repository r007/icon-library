import { COLORS } from '../utils';

export default {
	id: 'add-to-cart',
	paths: [
		{
			d:
				'M15.5 13.5a4 4 0 10-4-4H7l1.5 6h8l.8-2.425a4 4 0 01-5.518-2.098A4.001 4.001 0 0015.5 13.5zm-3.982-3.621zM10 17.5a1 1 0 11-2 0 1 1 0 012 0zm6.5 0a1 1 0 11-2 0 1 1 0 012 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M19.5 9.5a4 4 0 11-6.099 3.408 4 4 0 003.899.167l-.125.4a4 4 0 01-6.55-3.975h.875a4 4 0 018 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M4 5.5a.5.5 0 01.5-.5H6a.5.5 0 01.485.379L7.39 9h3.638a4.5 4.5 0 116.685 4.42l-.738 2.237A.5.5 0 0116.5 16h-8a.5.5 0 01-.485-.379L6.518 9.632a.5.5 0 01-.006-.02L5.61 6H4.5a.5.5 0 01-.5-.5zM9 16a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7.86-6h3.388a4.5 4.5 0 005.478 3.887L16.138 15H8.89l-1.25-5zM9 17a.5.5 0 100 1 .5.5 0 000-1zm6 .5a.5.5 0 111 0 .5.5 0 01-1 0zM15.5 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm.5 1.5a.5.5 0 00-1 0V9h-1.5a.5.5 0 000 1H15v1.5a.5.5 0 001 0V10h1.5a.5.5 0 000-1H16V7.5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
