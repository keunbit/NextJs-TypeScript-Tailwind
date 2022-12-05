import Head from './head';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head />
      <body>
        <nav>Next.js 13</nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
