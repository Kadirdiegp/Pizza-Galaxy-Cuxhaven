import React, { useState } from 'react';
import { X, Tag, Copy, Check } from 'lucide-react';

interface CouponBannerProps {
  code: string;
  discount: string;
  description: string;
  expiryDate: string;
}

export function CouponBanner({ code, discount, description, expiryDate }: CouponBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      // Kurz die Bestätigung anzeigen und dann Banner schließen
      setTimeout(() => {
        setCopied(false);
        setIsVisible(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-red-500 text-white relative overflow-hidden z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              <p className="font-semibold text-sm">{discount}</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 -mr-2 text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm mb-2">{description}</p>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/80">Gültig bis {expiryDate}</p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg hover:bg-white/30 active:bg-white/40 transition-colors text-sm"
            >
              <span className="font-mono font-bold">{code}</span>
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Tag className="w-6 h-6" />
            <div>
              <p className="font-semibold">{discount} - {description}</p>
              <p className="text-sm text-white/80">Gültig bis {expiryDate}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              <span className="font-mono font-bold">{code}</span>
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white/10 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white/10 to-transparent" />
    </div>
  );
} 