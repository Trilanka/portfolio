'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface InteractiveCodeProps {
  code: string;
  language: string;
  title?: string;
  explanation?: string;
  className?: string;
}

export default function InteractiveCode({ 
  code, 
  language, 
  title, 
  explanation,
  className = "" 
}: InteractiveCodeProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white">
            {title}
          </h4>
          {explanation && (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="text-purple hover:text-purple/80 text-sm font-medium transition-colors"
            >
              {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
            </button>
          )}
        </div>
      )}
      
      <div className="bg-black-200 rounded-lg border border-neutral-800 overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            background: '#1f2937',
            fontSize: '14px',
            lineHeight: '1.5'
          }}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      
      {explanation && showExplanation && (
        <div className="mt-4 p-4 bg-purple/10 border border-purple/20 rounded-lg">
          <h5 className="text-purple font-medium mb-2">Explanation:</h5>
          <p className="text-white-200 text-sm leading-relaxed">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}


