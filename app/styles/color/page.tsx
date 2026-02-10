export default function ColorPage() {
    const colorPalettes = [
        {
            name: 'Grey',
            shades: [
                { value: 25, light: '#FAFAFA', dark: '#1A1A1A' },
                { value: 50, light: '#F5F5F5', dark: '#262626' },
                { value: 100, light: '#E5E5E5', dark: '#404040' },
                { value: 200, light: '#D4D4D4', dark: '#525252' },
                { value: 300, light: '#A3A3A3', dark: '#737373' },
                { value: 400, light: '#737373', dark: '#A3A3A3' },
                { value: 500, light: '#525252', dark: '#D4D4D4' },
                { value: 600, light: '#404040', dark: '#E5E5E5' },
                { value: 700, light: '#262626', dark: '#F5F5F5' },
                { value: 800, light: '#1A1A1A', dark: '#FAFAFA' },
                { value: 900, light: '#0F0F0F', dark: '#FFFFFF' },
                { value: 950, light: '#050505', dark: '#FFFFFF' },
            ],
        },
        {
            name: 'Red',
            shades: [
                { value: 25, light: '#FEF2F2', dark: '#450A0A' },
                { value: 50, light: '#FEE2E2', dark: '#7F1D1D' },
                { value: 100, light: '#FECACA', dark: '#991B1B' },
                { value: 200, light: '#FCA5A5', dark: '#B91C1C' },
                { value: 300, light: '#F87171', dark: '#DC2626' },
                { value: 400, light: '#EF4444', dark: '#EF4444' },
                { value: 500, light: '#DC2626', dark: '#F87171' },
                { value: 600, light: '#B91C1C', dark: '#FCA5A5' },
                { value: 700, light: '#991B1B', dark: '#FECACA' },
                { value: 800, light: '#7F1D1D', dark: '#FEE2E2' },
                { value: 900, light: '#450A0A', dark: '#FEF2F2' },
                { value: 950, light: '#2D0505', dark: '#FFF5F5' },
            ],
        },
        {
            name: 'Yellow',
            shades: [
                { value: 25, light: '#FEFCE8', dark: '#422006' },
                { value: 50, light: '#FEF9C3', dark: '#713F12' },
                { value: 100, light: '#FEF08A', dark: '#854D0E' },
                { value: 200, light: '#FDE047', dark: '#A16207' },
                { value: 300, light: '#FACC15', dark: '#CA8A04' },
                { value: 400, light: '#EAB308', dark: '#EAB308' },
                { value: 500, light: '#CA8A04', dark: '#FACC15' },
                { value: 600, light: '#A16207', dark: '#FDE047' },
                { value: 700, light: '#854D0E', dark: '#FEF08A' },
                { value: 800, light: '#713F12', dark: '#FEF9C3' },
                { value: 900, light: '#422006', dark: '#FEFCE8' },
                { value: 950, light: '#2D1503', dark: '#FFFEF0' },
            ],
        },
        {
            name: 'Blue',
            shades: [
                { value: 25, light: '#EFF6FF', dark: '#172554' },
                { value: 50, light: '#DBEAFE', dark: '#1E3A8A' },
                { value: 100, light: '#BFDBFE', dark: '#1E40AF' },
                { value: 200, light: '#93C5FD', dark: '#2563EB' },
                { value: 300, light: '#60A5FA', dark: '#3B82F6' },
                { value: 400, light: '#3B82F6', dark: '#60A5FA' },
                { value: 500, light: '#2563EB', dark: '#93C5FD' },
                { value: 600, light: '#1E40AF', dark: '#BFDBFE' },
                { value: 700, light: '#1E3A8A', dark: '#DBEAFE' },
                { value: 800, light: '#1E40AF', dark: '#EFF6FF' },
                { value: 900, light: '#172554', dark: '#F0F9FF' },
                { value: 950, light: '#0F1729', dark: '#F8FBFF' },
            ],
        },
        {
            name: 'Green',
            shades: [
                { value: 25, light: '#F0FDF4', dark: '#052E16' },
                { value: 50, light: '#DCFCE7', dark: '#14532D' },
                { value: 100, light: '#BBF7D0', dark: '#166534' },
                { value: 200, light: '#86EFAC', dark: '#15803D' },
                { value: 300, light: '#4ADE80', dark: '#16A34A' },
                { value: 400, light: '#22C55E', dark: '#22C55E' },
                { value: 500, light: '#16A34A', dark: '#4ADE80' },
                { value: 600, light: '#15803D', dark: '#86EFAC' },
                { value: 700, light: '#166534', dark: '#BBF7D0' },
                { value: 800, light: '#14532D', dark: '#DCFCE7' },
                { value: 900, light: '#052E16', dark: '#F0FDF4' },
                { value: 950, light: '#021F0C', dark: '#F7FEF9' },
            ],
        },
        {
            name: 'Pink',
            shades: [
                { value: 25, light: '#FDF2F8', dark: '#500724' },
                { value: 50, light: '#FCE7F3', dark: '#831843' },
                { value: 100, light: '#FBCFE8', dark: '#9F1239' },
                { value: 200, light: '#F9A8D4', dark: '#BE123C' },
                { value: 300, light: '#F472B6', dark: '#E11D48' },
                { value: 400, light: '#EC4899', dark: '#EC4899' },
                { value: 500, light: '#E11D48', dark: '#F472B6' },
                { value: 600, light: '#BE123C', dark: '#F9A8D4' },
                { value: 700, light: '#9F1239', dark: '#FBCFE8' },
                { value: 800, light: '#831843', dark: '#FCE7F3' },
                { value: 900, light: '#500724', dark: '#FDF2F8' },
                { value: 950, light: '#350418', dark: '#FEF8FB' },
            ],
        },
    ];

    return (
        <div className="container max-w-6xl py-10 space-y-12">
            <h1 className="text-4xl font-extrabold tracking-tight">Color</h1>

            {colorPalettes.map((palette) => (
                <div key={palette.name} className="space-y-4">
                    <h2 className="text-xl font-semibold">{palette.name}</h2>

                    {/* Light mode gradient */}
                    <div className="relative">
                        <div className="flex h-16 rounded-lg overflow-hidden border border-border">
                            {palette.shades.map((shade) => (
                                <div
                                    key={`${palette.name}-light-${shade.value}`}
                                    className="flex-1 relative group"
                                    style={{ backgroundColor: shade.light }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-mono bg-black/70 text-white px-2 py-1 rounded">
                                            {shade.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-1 px-1">
                            {palette.shades.map((shade) => (
                                <span
                                    key={`label-light-${shade.value}`}
                                    className="text-xs text-muted-foreground"
                                    style={{ width: `${100 / palette.shades.length}%`, textAlign: 'center' }}
                                >
                                    {shade.value}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Dark mode gradient */}
                    <div className="relative">
                        <div className="flex h-16 rounded-lg overflow-hidden border border-border">
                            {palette.shades.map((shade) => (
                                <div
                                    key={`${palette.name}-dark-${shade.value}`}
                                    className="flex-1 relative group"
                                    style={{ backgroundColor: shade.dark }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-mono bg-white/70 text-black px-2 py-1 rounded">
                                            {shade.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-1 px-1">
                            {palette.shades.map((shade) => (
                                <span
                                    key={`label-dark-${shade.value}`}
                                    className="text-xs text-muted-foreground"
                                    style={{ width: `${100 / palette.shades.length}%`, textAlign: 'center' }}
                                >
                                    {shade.value}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
