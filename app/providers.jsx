'use client'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
export const theme=extendTheme({
    body:{
        bg:'white',
        color:'black'
    }
})

export function Providers({children}){
    return(
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}