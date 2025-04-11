"use client"

import styled from "styled-components"
import Icon from "./icons/icon"
import { useTranslation } from "react-i18next"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import DivAlbum from "./DivAlbum"

const HeroDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin-inline: auto;
    position: relative;
    text-align: center;
    height: 100vh;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    margin-block: auto;

    @media (max-width: 550px) {
        padding: 0;
    }
`

const ContainerIcon = styled.div`
    max-width: 100%;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    animation: heartbeat 1.85s infinite;
    margin-top: 100px;

    &:before {
        content: '';
        position: absolute;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: #01b755;
        filter: blur(100px);
        z-index: -10;
        margin-top: -50px;
    }

    @keyframes heartbeat {
        0%, 50%, 90%, 100% { opacity: 0.1; transform: scale(1); }
        30%, 70% { opacity: 0.25; transform: scale(1.05); }
    }
`

const Title = styled.h1`
    font-size: 5em;
    margin-bottom: 20px;

    @media (max-width: 900px) {
        font-size: 4.5em;
    }

    @media (max-width: 600px) {
        font-size: 4em;
    }
`

const Paragraph = styled.p`
    font-size: 1em;
    opacity: 0.5;
    width: 80%;
    font-weight: 500;
    margin: 2px 0;

    @media (max-width: 900px) {
        width: 90%;
    }
`

const HeroIcon = styled(MdOutlineKeyboardDoubleArrowDown)`
    font-size: 2em;
    color: white;
    margin: 10px;
    opacity: 0.2;
    position: absolute;
    bottom: 7%;
`

function Hero() {
  const { t } = useTranslation()

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    })
  }

  return (
    <>
      <HeroDiv>
        <Container>
          <Title>Posterfy</Title>
          <Paragraph>{t("paragraphHero1")}</Paragraph>
          <Paragraph>{t("paragraphHero2")}</Paragraph>

          <ContainerIcon>
            <Icon fill={"white"} width={"180px"} height={"198.23px"} />
          </ContainerIcon>

          <HeroIcon onClick={handleScroll} />
        </Container>
      </HeroDiv>
      <DivAlbum />
    </>
  )
}

export default Hero
