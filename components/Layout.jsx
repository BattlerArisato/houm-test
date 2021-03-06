import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="100%" m="auto">
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </Box>
    </Box>
  );
}

export default Layout;