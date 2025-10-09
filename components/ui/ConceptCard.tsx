'use client';

import React, { useState } from 'react';

interface ConceptCardProps {
  title: string;
  description: string;
  icon: string;
  details?: string;
  examples?: string[];
  className?: string;
}

export default function ConceptCard({ 
  title, 
  description, 
  icon, 
  details,
  examples,
  className = "" 
}: ConceptCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-black-200 rounded-lg border border-neutral-800 p-6 hover:border-purple/50 transition-all duration-300 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="text-2xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-white-200 mb-4">
            {description}
          </p>
          
          {(details || examples) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple hover:text-purple/80 text-sm font-medium transition-colors"
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
            </button>
          )}
          
          {isExpanded && (
            <div className="mt-4 space-y-4">
              {details && (
                <div>
                  <h4 className="text-white font-medium mb-2">Details:</h4>
                  <p className="text-white-200 text-sm leading-relaxed">
                    {details}
                  </p>
                </div>
              )}
              
              {examples && examples.length > 0 && (
                <div>
                  <h4 className="text-white font-medium mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {examples.map((example, index) => (
                      <li key={index} className="text-white-200 text-sm flex items-start gap-2">
                        <span className="text-purple mt-1">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}





