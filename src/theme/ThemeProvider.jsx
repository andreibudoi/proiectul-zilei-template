import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { brandColors } from './brandColors'

const theme = extendTheme({
  colors: brandColors,
  fonts: {
    heading: 'Geomanist',
    body: 'Geomanist'
  }
})

const ThemeProvider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider
