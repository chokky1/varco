'use client';

import * as React from 'react';
import { ComponentPreview } from '@/components/component-preview';
import { Accordion } from '@/components/ui/accordion';

export default function AccordionPage() {
    return (
        <div className="container max-w-4xl py-10 space-y-10">
            <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Accordion</h1>
                <p className="text-lg text-muted-foreground">
                    A vertically stacked set of interactive headings that each reveal a section of content.
                </p>
            </div>

            <ComponentPreview
                title="Basic Usage"
                description="A standard accordion with multiple items."
                code={`import { Accordion } from '@/components/ui/accordion';

export function AccordionDemo() {
  const items = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      title: "Is it styled?",
      content: "Yes. It comes with default styles that matches the other components' aesthetic."
    },
    {
      title: "Is it animated?",
      content: "Yes. It's animated by default, but you can disable it if you prefer."
    }
  ];

  return (
    <Accordion items={items} className="w-[400px]" />
  );
}`}
            >
                <Accordion
                    className="w-[400px]"
                    items={[
                        {
                            title: "Is it accessible?",
                            content: "Yes. It adheres to the WAI-ARIA design pattern."
                        },
                        {
                            title: "Is it styled?",
                            content: "Yes. It comes with default styles that matches the other components' aesthetic."
                        },
                        {
                            title: "Is it animated?",
                            content: "Yes. It's animated by default, but you can disable it if you prefer."
                        }
                    ]}
                />
            </ComponentPreview>
        </div>
    );
}
