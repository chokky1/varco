'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    disabled?: boolean;
}

export function AccordionItem({
    title,
    children,
    isOpen,
    onToggle,
    disabled,
}: AccordionItemProps) {
    return (
        <div className={cn("border-b border-border", disabled && "opacity-50 pointer-events-none")}>
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline"
                aria-expanded={isOpen}
            >
                {title}
                <ChevronDown
                    className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 pt-0 text-sm text-muted-foreground">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({
    items,
    allowMultiple = false,
    className,
    ...props
}: {
    items: { title: string; content: React.ReactNode; disabled?: boolean }[];
    allowMultiple?: boolean;
    className?: string;
}) {
    const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className={cn("w-full", className)} {...props}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => handleToggle(index)}
                    disabled={item.disabled}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
