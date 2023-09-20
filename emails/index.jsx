import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export const ThanksEmail = () => (
  <Html>
    <Head />
    <Preview>Thanks for your inquiry!</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thanks for getting in touch</Heading>

          <Text style={{ ...text, marginBottom: "14px" }}>
            I wanted to express my sincere thanks for reaching out through my
            website&apos;s contact form. Your interest in my Art and Concept
            Design services is greatly appreciated.
          </Text>
          {/* <code style={code}>{loginCode}</code> */}
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "14px",
              marginBottom: "16px",
            }}
          >
            If you didn&apos;t try to login, you can safely ignore this email.
          </Text>
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "12px",
              marginBottom: "38px",
            }}
          >
            Hint: You can set a permanent password in Settings & members → My
            account.
          </Text>

          <Text style={footer}>
            Subject: Thank You for Getting in Touch! Dear [Recipients Name], I
            wanted to express my sincere thanks for reaching out through our
            websites contact form. Our team is eager to assist you and will
            respond promptly. Should you have any further questions or requests,
            feel free to let us know. We look forward to the possibility of
            working together! Warm regards, [Your Name] [Your Company/Brand
            Name]
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

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
