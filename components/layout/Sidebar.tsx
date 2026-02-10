'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const menuStructure = [
    {
        label: 'Guidelines',
        items: [
            { label: 'Resolution', href: '/guidelines/resolution' },
            { label: 'Pattern', href: '/guidelines/pattern' },
        ],
    },
    {
        label: 'Styles',
        items: [
            { label: 'Color', href: '/styles/color' },
            { label: 'Typography', href: '/styles/typography' },
        ],
    },
    {
        label: 'Components',
        items: [
            { label: 'Button', href: '/components/button' },
            { label: 'Inputfield', href: '/components/inputfield' },
            { label: 'Dropdown/List', href: '/components/dropdown-list' },
            { label: 'Tab', href: '/components/tab' },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [openSections, setOpenSections] = useState<string[]>(['Guidelines', 'Styles', 'Components']);

    const toggleSection = (label: string) => {
        setOpenSections(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    return (
        <aside className="w-64 border-r border-border bg-muted/10 h-screen sticky top-0 overflow-y-auto hidden md:block">
            <div className="p-6">
                <Link href="/">
                    <h1 className="text-xl font-bold text-primary flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        Hey VARCO!
                    </h1>
                </Link>
            </div>
            <div className="px-4 pb-6">
                {menuStructure.map((section, idx) => (
                    <div key={idx} className="mb-4">
                        <button
                            onClick={() => toggleSection(section.label)}
                            className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <span>{section.label}</span>
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 transition-transform duration-200",
                                    openSections.includes(section.label) && "rotate-180"
                                )}
                            />
                        </button>
                        {openSections.includes(section.label) && (
                            <div className="space-y-1 mt-1">
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
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
}
