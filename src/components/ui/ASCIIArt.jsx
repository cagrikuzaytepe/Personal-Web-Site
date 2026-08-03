import { useEffect, useState } from 'react';

const ASCII_NAME = `
 ██████╗  █████╗ ███████╗██╗  ██╗██╗███████╗██╗   ██╗
 ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██║██╔════╝╚██╗ ██╔╝
 ██║  ██║███████║███████╗█████╔╝ ██║█████╗   ╚████╔╝
 ██║  ██║██╔══██║╚════██║██╔═██╗ ██║██╔══╝    ╚██╔╝
 ██████╔╝██║  ██║███████║██║  ██╗██║██║        ██║
 ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝`;

const ASCII_NAME_SMALL = `
 ┬┌─┌─┐┬  ┬ ┬┌─┐┌─┐┬┌─
 ├┴┐├─┤│  └┬┘├┤ │ ┬││
 ┴ ┴┴ ┴┴─┘ ┴ └─┘└─┘┴└─┘`;

const ASCIIArt = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <pre className="ascii-art" aria-label="Kuzaytepe">
      {isSmall ? ASCII_NAME_SMALL : ASCII_NAME}
    </pre>
  );
};

export default ASCIIArt;
