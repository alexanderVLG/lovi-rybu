import React from "react";
import {Box, Container} from '@chakra-ui/react';
import Header from "./header";

const Layout = ({pageTitle, children}) => {

  return (
    <>
      <Header />
      <Container maxW='container.xl'>
        <Box as="main">
          <h1>{pageTitle}</h1>
          {children}
        </Box>
      </Container>
    </>
  )
}

export default Layout