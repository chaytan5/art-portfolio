import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export const ThanksEmail = ({ name }) => (
  <Html>
    <Head />
    <Preview>Thank You for Getting in Touch!</Preview>
    <Tailwind>
      <Body style={main} className="font-sans ">
        <Container className="text-neutral-800" style={container}>
          <Heading className="my-10 text-2xl">
            Thanks for getting in touch!
          </Heading>
          <Text className="text-base">Hi {name},</Text>

          <Text className="text-base">
            Thank you for taking the time to reach out via my portfolio website.
            Your interest in my work means a great deal to me.
          </Text>
          <Text className="text-base ">
            Your inquiry has been received, and I&apos;m eager to delve into the
            possibilities. Please allow me a little time to carefully review
            your message and ideas. Rest assured, you can expect a response
            soon!
          </Text>

          <Text className="text-base ">
            Feel free to explore my portfolio further, and don&apos;t hesitate
            to reach out if you have any more questions or thoughts you&apos;d
            like to share.
          </Text>
          <Text className="text-base ">
            Looking forward to the possibility of collaborating on something
            extraordinary!
          </Text>

          <Text className="pt-4 text-base">Warm regards, </Text>
          <Text className="text-lg font-medium">Neha Rastogi</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ThanksEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};
