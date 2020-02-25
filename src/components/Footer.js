import React from 'react';

export const Footer = () => (
  <footer className="bg-rouge pin-b">
    <div className="container mx-auto py-6">
      <p className="text-gold text-center">
        &copy; Copyright {new Date().getFullYear()} <a className="text-bold no-underline text-gold px-2" href="//coconnell.dev">coconnell.dev</a>
      </p>
    </div>
  </footer>
)
