import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { GoosfrabaLogotype } from './assets'

const App = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      h="100%"
    >
      <Box w="300px" mb="4">
        <GoosfrabaLogotype />
      </Box>
      <Text>Spor la cafeluta</Text>
    </Flex>
  )
}

export default App
