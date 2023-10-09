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

export const ThanksEmail = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>You have a new Enquiry</Preview>
    <Tailwind>
      <Body style={main} className="font-sans ">
        <Container className="text-neutral-800" style={container}>
          <Heading className="my-10 text-xl">New Enquiry from {name}</Heading>
          <Text className="text-base">Hey Neha,</Text>

          <Text className="text-base">
            You have got a new enquiry via contact form on your porfolio site.
          </Text>
          <Text className="text-base ">
            <span className="font-medium">Name:</span> {name}
          </Text>
          <Text className="text-base ">
            <span className="font-medium">Email:</span> {email}
          </Text>
          <Text className="text-base ">
            <span className="font-medium">Message:</span> {message}
          </Text>
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
