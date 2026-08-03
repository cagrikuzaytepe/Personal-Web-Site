import { useEffect, useState } from 'react';

const loadingMessages = [
  'Compiling portfolio...',
  'Initializing modules...',
  'Loading project data...',
  'Building components...',
  'Optimizing bundle...',
  'Ready.',
];

const LoadingScreen = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= loadingMessages.length) {
      const timer = setTimeout(() => {
        setDone(true);
        setTimeout(onComplete, 400);
      }, 500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleLines((prev) => [...prev, loadingMessages[currentLine]]);
      setCurrentLine((prev) => prev + 1);
    }, 200 + Math.random() * 300);

    return () => clearTimeout(timer);
  }, [currentLine, onComplete]);

  return (
    <div className={`loading-screen ${done ? 'loading-screen--done' : ''}`}>
      <div className="loading-screen__content">
        <div className="loading-screen__ascii">{`
   _____ _   _ ______ _____ _____
  / ____| \\ | |  ____/ ____|  __|
 | (___ |  \\| | |__ | |    | |__
   \\___ \\| . \\ |  __|| |    |  __|
   ____) | |\\  | |___| |____| |____
  |_____/|_| \\_|______\\_____|______|  v2.0.0
        `}</div>
        <div className="loading-screen__terminal">
          {visibleLines.map((line, i) => (
            <div key={i} className="loading-screen__line">
              <span className="loading-screen__prefix">$</span>
              <span className="loading-screen__text">{line}</span>
              {i === visibleLines.length - 1 && !done && (
                <span className="terminal-cursor">▋</span>
              )}
            </div>
          ))}
        </div>
        <div className="loading-screen__progress">
          <div
            className="loading-screen__bar"
            style={{ width: `${(visibleLines.length / loadingMessages.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
