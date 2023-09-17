import '../styles/globals.scss';
import '../styles/custom-bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [componentHeight, setComponentHeight] = useState<string>('calc(100vh - 100px)'); // set initial height
  
  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);
  
  useEffect(() => {
    setComponentHeight(`calc(100vh - ${headerHeight}px)`);
  }, [headerHeight]);

  return (
    <>
      <div style={{ paddingTop: `${headerHeight}px`, height: componentHeight }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}