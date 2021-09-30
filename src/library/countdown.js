import { COLORS } from '../utils';

export default {
	id: 'countdown',
	paths: [
		{
			d:
				'M15.75 15.628v1.622c-.821 0-1.97-.952-2.777-1.62a20.76 20.76 0 00-.471-.384 1.278 1.278 0 00-1.506.004c-.123.097-.266.216-.423.347-.805.67-1.986 1.653-2.823 1.653v-1.622a3.5 3.5 0 011.489-2.864l1.381-.97a.248.248 0 00.084-.101c.57.145.868.727.988.96.03.06.05.097.058.097.006 0 .017-.028.036-.075.085-.214.329-.828.988-1.099a.25.25 0 00.106.217l1.382.971a3.501 3.501 0 011.488 2.864zm-1.424-5.26A3.501 3.501 0 0015.75 7.55V4h-8v3.55a3.5 3.5 0 001.423 2.817 3.491 3.491 0 01-.412-.365L8.77 10c.954-.382 1.829-.192 2.741.007.997.216 2.039.443 3.279-.057a3.495 3.495 0 01-.465.418z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d:
				'M11.152 11.794l-1.036.97A3.95 3.95 0 009 15.628V19H7.75v-3.372a3.5 3.5 0 011.488-2.864l1.382-.97a.249.249 0 00.078-.32.25.25 0 00-.078-.09l-1.382-.97A3.5 3.5 0 017.75 7.55V4H9v3.55a3.95 3.95 0 001.116 2.864l1.037.97a.302.302 0 010 .41zm2.803 1.045c.695.76 1.07 1.76 1.045 2.79V18.5h-1.766v-.252c.001-1.44.002-3.054-.234-3.998-.248-.99.24-1.978.954-1.41zm-.071-2.425l-.405.379c-.784.61-.645-.631-.54-1.578.032-.284.061-.542.061-.715v-4h2v3.05a3.95 3.95 0 01-1.116 2.864z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M7 3.5a.5.5 0 000 1h.25v14H7a.5.5 0 000 1h9.5a.5.5 0 000-1h-.25v-14h.25a.5.5 0 000-1H7zm8.25 13.118v-.99a3 3 0 00-1.276-2.455l-1.33-.934a1.36 1.36 0 00-.243.303 1.906 1.906 0 00-.127.26l-.021.051-.002.005-.018.045a.54.54 0 01-.198.258.503.503 0 01-.285.089c-.199 0-.322-.115-.344-.135v-.001a.552.552 0 01-.123-.163l-.041-.08-.016-.03a2.445 2.445 0 00-.157-.268 1.195 1.195 0 00-.273-.292l-1.27.892a3 3 0 00-1.276 2.455v.992c.034-.015.07-.031.106-.049a5.7 5.7 0 00.817-.503c.386-.277.741-.573 1.058-.837a23.85 23.85 0 01.47-.384 1.779 1.779 0 012.094-.006l.014.01c.16.125.33.266.51.415.304.252.638.53 1.01.799.284.205.562.381.817.505.036.018.07.034.104.048zm-7 1.132h7v.75h-7v-.75zm2.937-6.402a1.9 1.9 0 01.528.43c.158-.203.372-.41.662-.568a.749.749 0 01.216-.235l.333-.234a6.499 6.499 0 01-.6-.066 13.189 13.189 0 01-.788-.151l-.086-.019c-.569-.123-1.06-.23-1.536-.226l.991.696a.75.75 0 01.28.373zm-2.28-1.924c.962-.281 1.853-.094 2.645.08l.04.008.157.034c.918.199 1.767.348 2.761-.023a3.002 3.002 0 00.74-1.973V4.5h-7v3.05a3 3 0 00.658 1.874zm6.252.872a3.933 3.933 0 00.091-.1v2.786a4.003 4.003 0 00-.7-.627l-1.091-.766 1.09-.766c.221-.155.426-.332.61-.527zM8.95 12.355a4.003 4.003 0 00-.701.627v-2.786c.207.235.443.446.701.627l1.09.766-1.09.766zm2.799 3.148c.162 0 .32.05.452.143.112.087.256.207.42.342.28.231.616.51.951.762h-3.64c.354-.264.7-.553.984-.789.147-.122.276-.23.381-.313a.78.78 0 01.452-.145z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
