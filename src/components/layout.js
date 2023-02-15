import React from "react";
import {Box, Flex, Container, Heading, Divider} from '@chakra-ui/react';
import Header from "./header";
import Footer from "./footer";

const Layout = ({pageTitle, children}) => {

  return (
    <Box pos='relative'>
      <Header />
      <Container maxW='container.xl'>
        <Box as="main">
          <Heading my={5} as='h1'>{pageTitle}</Heading>
          <Divider />
          {children}
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout