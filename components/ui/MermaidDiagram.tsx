'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
  className?: string;
}

export default function MermaidDiagram({ chart, title, className = "" }: MermaidDiagramProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#8b5cf6',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#8b5cf6',
        lineColor: '#6b7280',
        secondaryColor: '#374151',
        tertiaryColor: '#1f2937',
        background: '#111827',
        mainBkg: '#1f2937',
        secondBkg: '#374151',
        tertiaryBkg: '#4b5563'
      }
    });

    if (chartRef.current) {
      chartRef.current.innerHTML = '';
      mermaid.render('mermaid-' + Math.random().toString(36).substr(2, 9), chart, (svgCode) => {
        if (chartRef.current) {
          chartRef.current.innerHTML = svgCode;
        }
      });
    }
  }, [chart]);

  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <h4 className="text-lg font-semibold text-white mb-4 text-center">
          {title}
        </h4>
      )}
      <div 
        ref={chartRef} 
        className="flex justify-center items-center bg-black-200 rounded-lg p-6 border border-neutral-800"
      />
    </div>
  );
}


