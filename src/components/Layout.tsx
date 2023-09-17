import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div style={{minHeight: '100svh'}}>{children}</div>
      <Footer />
    </>
  );
}
