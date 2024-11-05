import React from 'react';
import { cn } from '../../lib/utils';

interface MenuSectionProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function MenuSection({ title, description, className, children }: MenuSectionProps) {
  return (
    <div className={cn('py-12', className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}