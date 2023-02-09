import React from 'react';
import { Link } from "gatsby";
import {Box, Flex, List, ListItem} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const Nav = () => {
  return(
    <Box as="nav">
      <Flex justify="space-between" alignItems='center'>
        <Flex alignItems='center'>
          <Link to='/'>
            <StaticImage width={100} height={100} src="../images/logo.png" alt='Логотип.' />
          </Link>
        </Flex>
        <List 
          display="flex"
          alignItems='center'
          color="teal.500" 
          textTransform='uppercase' 
          fontWeight='700'
        >
          <ListItem><Link to="/">Главная</Link></ListItem>
          <ListItem ml="20px"><Link to="/blog">Блог</Link></ListItem>
          <ListItem ml="20px"><Link to="/review">Обзоры</Link></ListItem>
        </List>
      </Flex>
    </Box>
  )
}

export default Nav