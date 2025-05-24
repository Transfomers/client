// src/components/ui/card.jsx
import React from 'react';
import classNames from 'classnames';

export function Card({ children, className }) {
  return (
    <div className={classNames("rounded-xl bg-white border shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={classNames("p-4", className)}>
      {children}
    </div>
  );
}
a