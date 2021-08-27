import {
    Box,
    Text,
    Heading,
    Center,
    Container,
    VStack,
    Button,
    Avatar,
    FormControl,
    Input,
    Checkbox,
    Flex,
    Spacer,
} from "@chakra-ui/react";

import Bruh from "../components/bruh";

export default function Landing() {
    const asd = "asd";

    return (
        <Box width="100vw" height="100vh" bg="#F5E2DE">
            <Center p="100px">
                <Heading as="h1" size="4xl">
                    Kanban
                </Heading>
            </Center>
            <Center>
                <Container maxW="container.sm" bg="tomato" centerContent>
                    <Avatar src="/" />
                    <VStack bg="white">
                        <Heading as="h2" size="2xl">
                            Have an account?
                        </Heading>
                        <FormControl id="register">
                            <Input placeholder="Username" />
                            <Input placeholder="Password" />
                            <Flex>
                                <Checkbox>Remember me</Checkbox>
                                <Spacer />
                                <Text>Forgotten Password</Text>
                            </Flex>
                        </FormControl>
                    </VStack>
                    <Button colorScheme="teal" size="lg">
                        Button
                    </Button>
                </Container>
            </Center>
        </Box>
    );
}
