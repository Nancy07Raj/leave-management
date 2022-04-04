import React from "react";
import styled from "styled-components";
import { Flex, Text, Image, Box } from "./atoms";
import notification from "assets/notification.svg";
import hamburger from "./assets/hamburger.svg";
import qrCode from "./assets/qr-code.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.colors.CelticBlue};
  color: ${(props) => props.theme.colors.white};
`;

export default function Header() {
  return (
    <Container>
      <Flex ml="20px">
        <Image src={hamburger} alt="sideButton" />
        <Text ml="20px">Leave Management</Text>
      </Flex>
      <Flex mr="20px" alignItems="center">
        <Box mr="30px" mt="3px">
          <Image src={notification} alt="Notification" width={20} heigth={20} />
        </Box>
        <Image src={qrCode} alt="QRCode" />
      </Flex>
    </Container>
  );
}
