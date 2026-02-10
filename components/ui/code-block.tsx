'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';
import { createHighlighter } from 'shiki';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
    const [html, setHtml] = React.useState<string>('');
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        async function highlight() {
            const highlighter = await createHighlighter({
                themes: ['github-dark'],
                langs: ['tsx', 'typescript', 'javascript', 'css', 'json', 'html'],
            });
            const html = highlighter.codeToHtml(code, {
                lang: language,
                theme: 'github-dark',
            });
            setHtml(html);
        }
        highlight();
    }, [code, language]);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <div className="relative group rounded-md overflow-hidden bg-[#24292e] text-sm">
            <button
                onClick={onCopy}
                className="absolute right-4 top-4 z-10 p-2 text-zinc-400 hover:text-zinc-100 bg-[#24292e]/50 hover:bg-[#24292e] rounded-md transition-all opacity-0 group-hover:opacity-100"
            >
                {hasCopied ? (
                    <Check className="h-4 w-4 text-green-500" />
                ) : (
                    <Copy className="h-4 w-4" />
                )}
            </button>
            <div
                className="p-4 overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: html || `<pre><code>${code}</code></pre>` }}
            />
        </div>
    );
}
