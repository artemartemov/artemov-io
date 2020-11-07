export const BASE_FONT = 32;
export const BASE_LINE_HEIGHT = 1.5;
export const BASELINE = BASE_FONT * BASE_LINE_HEIGHT;

export const RATIO = 1.33;

// [ 16, 23, 32, 45, 64, 90 ]
export const FONT_SIZES = [0, 1, 2, 3, 4, 5].map((n) => Math.round(BASE_FONT * RATIO ** n));

// [ 1.5, 1.0435, 1.5, 1.0667, 1.125, 1.0667 ]
export const LINE_HEIGHTS = FONT_SIZES.map((f) => (Math.ceil(f / BASELINE) * BASELINE) / f);

export const baselineMultiple = (w) => (theme) => theme.baseline * w;

export const SPACE = [0, 1, 2, 4, 8].map((s) => s * BASELINE);
