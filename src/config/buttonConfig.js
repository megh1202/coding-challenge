export const buttonConfig = [
    ['sin', 'cos', 'tan', 'log'],
    ['^', 'sqrt', '(', ')'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
    ['=', 'π', 'e', '!']
];

export const operations = {
    'sin': (expr) => `sin(${expr})`,
    'cos': (expr) => `cos(${expr})`,
    'tan': (expr) => `tan(${expr})`,
    'log': (expr) => `log10(${expr})`,
    '^': (base, exponent) => `pow(${base}, ${exponent})`,
    'sqrt': (expr) => `sqrt(${expr})`,
    'π': 'pi',
    'e': 'e',
    '!': (expr) => `factorial(${expr})`,
    '(': '(',
    ')': ')'
};
