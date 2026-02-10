import tokens from './default-tokens.json';

export type DesignTokens = typeof tokens;

export function getTokens(): DesignTokens {
    // In a real app, this might fetch from a DB or API
    return tokens;
}

export function generateCssVariables(tokens: DesignTokens): string {
    const cssVars: string[] = [];

    Object.entries(tokens.colors).forEach(([key, value]) => {
        cssVars.push(`--color-${key}: ${hexToRgb(value)};`);
    });

    Object.entries(tokens.borderRadius).forEach(([key, value]) => {
        cssVars.push(`--radius-${key}: ${value};`);
    });

    return cssVars.join('\n');
}

// Helper to convert hex to rgb (for Tailwind opacity support)
function hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
        : '0 0 0';
}
