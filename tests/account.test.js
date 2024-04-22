const accounting = require('../accounting.js');

describe('unformat function', () => {
	test('should unformat positive numbers correctly', () => {
		expect(accounting.unformat('$1,234.56')).toBe(1234.56);
	});

	test('should unformat negative numbers correctly', () => {
		expect(accounting.unformat('($1,234.56)')).toBe(1234.56);
	});

	test('should handle non-standard decimal separators', () => {
		expect(accounting.unformat('€1.234,56', ',')).toBe(1234.56);
	});

	test('should return 0 for non-numeric input', () => {
		expect(accounting.unformat('abc')).toBe(0);
	});
});

describe('toFixed function', () => {
	test('should round numbers with correct precision', () => {
		expect(accounting.toFixed(1.005, 2)).toBe('1.01');
	});

	test('should handle negative numbers correctly', () => {
		expect(accounting.toFixed(-1.005, 2)).toBe('-1.00');
	});
});

describe('formatNumber function', () => {
	test('should format numbers with correct precision and separators', () => {
		expect(accounting.formatNumber(1234.5678, 2, ',', '.')).toBe('1,234.57');
	});

	test('should handle negative numbers correctly', () => {
		expect(accounting.formatNumber(-1234.5678, 2, ',', '.')).toBe('-1,234.57');
	});
});

describe('formatMoney function', () => {
	test('should format money with correct currency symbol and precision', () => {
		expect(accounting.formatMoney(1234.5678, '$', 2, ',', '.')).toBe('$1,234.57');
	});

	test('should handle negative numbers correctly', () => {
		expect(accounting.formatMoney(-1234.5678, '$', 2, ',', '.')).toBe('$-1,234.57');
	});
});

describe('formatColumn function', () => {
	test('should format a column of numbers correctly', () => {
		const column = [1000, 20000, 300000];
		const formattedColumn = accounting.formatColumn(column, '$', 2, ',', '.');
		expect(formattedColumn).toEqual(["$  1,000.00", "$ 20,000.00", "$300,000.00"]);
	});
});
