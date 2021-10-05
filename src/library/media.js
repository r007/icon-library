import { COLORS } from '../utils';

export default {
	id: 'media',
	paths: [
		{
			d:
				'M2.625 18.875a.625.625 0 00.625.625h17.5a.624.624 0 00.625-.625v-12.5H9.5V4.5H2.625v14.375zm5-8.125a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.875 2.5c-1.563 0-3.125 3.094-3.125 3.75h11.25c0-.531-2.031-6.25-3.75-6.25-1.072 0-1.536 1.46-1.886 2.557-.21.662-.379 1.193-.614 1.193-.242 0-.344-.188-.468-.418-.196-.363-.45-.832-1.407-.832z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M5 18.016a.589.589 0 01-.412-.168.568.568 0 01-.171-.405V5.125H3.25v13.75h16.917c.154 0 .303-.06.412-.168a.568.568 0 00.171-.405v-.286H5z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2.625 3.875A.625.625 0 002 4.5v14.375a1.25 1.25 0 001.25 1.25h17.5a1.25 1.25 0 001.25-1.25v-12.5a.625.625 0 00-.625-.625h-11.25V4.5a.625.625 0 00-.625-.625H2.625zm.625 15V5.125h5.625v1.25c0 .345.28.625.625.625h11.25v11.875H3.25zm4.375-10a.625.625 0 100 1.25.625.625 0 000-1.25zM5.75 9.5a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0zm6.364 5.182c-.09.135-.323.443-.739.443-.432 0-.696-.246-.847-.46a2.573 2.573 0 01-.159-.263l-.01-.02a3.163 3.163 0 00-.1-.176.61.61 0 00-.21-.221c-.085-.05-.243-.11-.549-.11-.186 0-.439.096-.751.352-.305.25-.609.607-.882 1.005-.266.39-.49.797-.645 1.143h9.595a21.347 21.347 0 00-.986-2.427c-.352-.73-.744-1.415-1.134-1.908a2.806 2.806 0 00-.531-.535c-.158-.113-.252-.13-.291-.13-.165 0-.332.077-.53.338-.205.272-.38.664-.541 1.12-.079.223-.15.447-.22.668v.002l-.002.003c-.068.215-.138.433-.208.624a2.76 2.76 0 01-.26.552zm.235-3.723c.335-.443.831-.834 1.526-.834.39 0 .736.162 1.018.363.284.204.546.477.783.775.473.597.911 1.375 1.281 2.14.373.772.689 1.558.913 2.187.111.314.202.595.265.818.032.111.059.214.078.303.016.075.037.184.037.289 0 .345-.28.625-.625.625H6.375A.625.625 0 015.75 17c0-.179.048-.372.098-.535a5.35 5.35 0 01.225-.583c.186-.415.448-.896.763-1.356.313-.457.693-.915 1.12-1.266.42-.344.948-.635 1.544-.635.475 0 .864.096 1.18.28.285.168.47.383.597.574l.115-.355.003-.01c.069-.216.145-.456.23-.698.171-.48.397-1.026.724-1.457zm-1.291 3.052s.002-.005.008-.011a.058.058 0 01-.008.01z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
