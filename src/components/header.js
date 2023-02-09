import React from "react";
import { Box } from "@chakra-ui/react";
import Nav from "./nav";

const Header = () => {
  return(
    <Box as="header"
      px={[2.5, 5, 10]} 
      bgColor="gray.100" 
      boxShadow='md'
    >
      <Nav />
    </Box>
  )
}

export default Header