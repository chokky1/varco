'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // We need to create this util

const params = [
    {
        label: 'Guidelines',
        items: [
            { label: 'Introduction', href: '/' },
            { label: 'Principles', href: '/guidelines/principles' },
        ],
    },
    {
        label: 'components',
        items: [
            { label: 'Accordion', href: '/components/accordion' },
            { label: 'Button', href: '/components/button' },
            { label: 'Input', href: '/components/input' },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-border bg-muted/10 h-screen sticky top-0 overflow-y-auto hidden md:block">
            <div className="p-6">
                <h1 className="text-xl font-bold text-primary flex items-center gap-2">
                    Hey VARCO!
                </h1>
            </div>
            <div className="px-4 pb-6">
                {params.map((section, idx) => (
                    <div key={idx} className="mb-6">
                        <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {section.label}
                        </h3>
                        <div className="space-y-1">
                            {section.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'block rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground',
                                        pathname === item.href
                                            ? 'bg-primary/10 text-primary hover:bg-primary/15'
                                            : 'text-muted-foreground'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
