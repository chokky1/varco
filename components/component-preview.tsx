'use client';

import * as React from 'react';

import { CodeBlock } from '@/components/ui/code-block';
import { cn } from '@/lib/utils';
import { Monitor, Code } from 'lucide-react';

interface ComponentPreviewProps {
    title?: string;
    description?: string;
    code: string;
    children: React.ReactNode;
    align?: "center" | "start" | "end";
}

export function ComponentPreview({
    title,
    description,
    code,
    children,
    align = "center",
}: ComponentPreviewProps) {
    const [activeTab, setActiveTab] = React.useState("preview");

    return (
        <div className="space-y-4">
            {(title || description) && (
                <div className="space-y-1">
                    {title && <h2 className="text-2xl font-bold tracking-tight">{title}</h2>}
                    {description && <p className="text-muted-foreground">{description}</p>}
                </div>
            )}

            <div className="border border-border rounded-lg overflow-hidden bg-background">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setActiveTab("preview")}
                            className={cn(
                                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                                activeTab === "preview" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Monitor className="h-4 w-4" />
                            Preview
                        </button>
                        <button
                            onClick={() => setActiveTab("code")}
                            className={cn(
                                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                                activeTab === "code" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Code className="h-4 w-4" />
                            Code
                        </button>
                    </div>
                </div>

                <div className="p-0">
                    {activeTab === "preview" && (
                        <div className={cn("p-10 flex min-h-[300px] bg-background", {
                            "justify-center": align === "center",
                            "justify-start": align === "start",
                            "justify-end": align === "end",
                        })}>
                            {children}
                        </div>
                    )}
                    {activeTab === "code" && (
                        <CodeBlock code={code} language="tsx" />
                    )}
                </div>
            </div>
        </div>
    );
}
