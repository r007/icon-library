import { COLORS } from '../utils';

export default {
	id: 'trash',
	paths: [
		{
			d: 'M18.25 5.75l-.915 13.587a1.405 1.405 0 01-.435.981c-.272.263-.64.417-1.028.432H8.128a1.568 1.568 0 01-1.048-.422 1.405 1.405 0 01-.446-.991L5.75 5.75h12.5z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M18.25 5.75H5.75l.884 13.587c.008.372.168.727.446.99.279.264.654.416 1.048.423h1.555L8.89 6.904h9.268l.092-1.154z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M9.5 2a.625.625 0 00-.625.625V4.5h-5a.625.625 0 100 1.25h.962c0 .026 0 .051.002.077l.835 13.564A2.692 2.692 0 008.312 22h7.376a2.692 2.692 0 002.638-2.609l.835-13.564c.002-.026.002-.051.002-.077h.962a.625.625 0 100-1.25h-5V2.625A.625.625 0 0014.5 2h-5zm4.375 2.5V3.25h-3.75V4.5h3.75zM6.923 19.337a1.442 1.442 0 001.414 1.413h7.327a1.443 1.443 0 001.413-1.413l.836-13.587H6.087l.836 13.587zM9.724 7.59a.625.625 0 10-1.248.068l.577 10.5a.625.625 0 101.248-.068l-.577-10.5zm5.77.068a.625.625 0 10-1.249-.068l-.577 10.5a.625.625 0 001.248.068l.577-10.5zM11.983 7c.346 0 .626.28.626.625v10.5a.625.625 0 01-1.25 0v-10.5c0-.345.28-.625.625-.625z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
