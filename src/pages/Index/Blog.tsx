import {
  Card,
  Container,
  Image,
  Overlay,
  ScrollArea,
  Spoiler,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export default function Blog() {
  return (
    <Container mih="100vh" size="xl">
      <Stack gap="xl" justify="center" align="center">
        <Title className="text-center">My Blog</Title>
        <Carousel
          w="100%"
          slideSize={{ base: "100%", md: "60%" }}
          slideGap="md"
          controlsOffset="md"
          controlSize={24}
          loop
          withIndicators
          align="center"
          styles={{
            control: {
              backgroundColor: "white",
            },
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Slide key={index}>
              <Card>
                <Card.Section>
                  <Image h="100%" src="https://placehold.co/600x400" />
                  <Overlay p="lg">
                    <ScrollArea h="100%">
                      <Stack justify="end" c="white">
                        <Title
                          order={2}
                          className="hover:underline hover:cursor-pointer"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </Title>
                        <Spoiler
                          showLabel="Read more"
                          hideLabel="Read less"
                          maxHeight={100}
                          styles={{
                            control: {
                              color: "lightblue",
                            },
                          }}
                        >
                          <Text>
                            Donec gravida sodales augue, vitae tristique urna
                            fermentum sit amet. Etiam a sem nec ex interdum
                            ultrices. Vivamus eu magna mi. Phasellus vehicula
                            nec erat id venenatis. Donec ac eleifend massa, quis
                            dictum lacus. Praesent blandit dapibus lectus, non
                            dapibus velit. Fusce ac malesuada est, vitae lacinia
                            urna. Curabitur sed ipsum dui. Aliquam at ultricies
                            est, nec tempus risus. Curabitur nibh eros, eleifend
                            at dolor non, rhoncus suscipit sem. Nulla ac enim id
                            tellus feugiat euismod. Curabitur maximus justo quis
                            est rhoncus, eu auctor lacus interdum. Sed porttitor
                            leo arcu, vel viverra orci facilisis et.
                          </Text>
                        </Spoiler>
                      </Stack>
                    </ScrollArea>
                  </Overlay>
                </Card.Section>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
}
