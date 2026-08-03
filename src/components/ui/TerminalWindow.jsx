import { useEffect, useMemo, useState } from 'react';

const getReducedMotionPreference = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const TerminalWindow = ({ title, prompt, lines, className = '' }) => {
  const prefersReducedMotion = getReducedMotionPreference();

  const renderedLines = useMemo(
    () =>
      lines.map((line) => ({
        key: line.key,
        command: line.command,
        output: line.output,
      })),
    [lines]
  );

  const [visibleCount, setVisibleCount] = useState(prefersReducedMotion ? renderedLines.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCount(renderedLines.length);
      return undefined;
    }

    setVisibleCount(0);
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleCount(index);
      if (index >= renderedLines.length) {
        window.clearInterval(interval);
      }
    }, 420);

    return () => window.clearInterval(interval);
  }, [renderedLines, prefersReducedMotion]);

  return (
    <div className={`terminal-window ${className}`.trim()} aria-label={title}>
      <div className="terminal-window__header">
        <div className="terminal-window__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="terminal-window__title">{title}</p>
      </div>
      <div className="terminal-window__body">
        <p className="terminal-window__prompt">{prompt}</p>
        <div className="terminal-window__output">
          {renderedLines.slice(0, visibleCount).map((line) => (
            <div key={line.key} className="terminal-line">
              <span className="terminal-line__command">{line.command}</span>
              <span className="terminal-line__value">{line.output}</span>
            </div>
          ))}
          {!prefersReducedMotion && visibleCount < renderedLines.length && (
            <span className="terminal-cursor" aria-hidden="true">
              ▋
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
