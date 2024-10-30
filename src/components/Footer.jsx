import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import Icon from "./icons/icon";
import { FaGithub } from "react-icons/fa";

const Container = styled.div`
    width: 100%;
    padding-block: 50px;
    background-color: rgba(255, 255, 255, 0.025);
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 100px;

    @media (max-width: 600px) {
        flex-direction: column;
        padding-block: 25px;
    }
`

const ContainerIcon = styled.div`
    width: 80px;
    animation: rotation 5s linear infinite;
    opacity: 0.25;
    margin-left: 180px;

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 900px) {
        margin-left: 40px;
    }

    @media (max-width: 600px) {
        margin-inline: auto;
        margin-block: 35px;
    }
`

const TagBy = styled.p`
    white-space: pre-line;
    font-weight: bolder;
    margin-left: 50px;
    font-size: 1em;
    opacity: 0.5;

    @media (max-width: 600px) {
        margin-left: 0px;
    }
`

const Iconcontainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;

    @media (max-width: 600px) {
        justify-content: center;
    }
`

const GithubIcon = styled(FaGithub)`
    font-size: 2.5em;
    cursor: pointer;
    padding: auto;
    margin-right: 180px;

    @media (max-width: 900px) {
        margin-right: 40px;
    }

    @media (max-width: 600px) {
        margin-right: 0px;
        margin-top: 25px;
    }
`

const Anchor = styled.a`
    text-decoration: none;
    color: var(--PosterfyGreen);
`

function Footer(){
    const { t } = useTranslation();

    return(
        <Container>
            <ContainerIcon>
                <Icon color={'white'} width={'80px'}/>
            </ContainerIcon>
            <TagBy>
                    {t('MadeBy')} <Anchor href="https://github.com/avictormorais" target="blank">Victor</Anchor>
            </TagBy>
            <Iconcontainer>
                <Anchor href="https://github.com/avictormorais/posterfy" target="blank">
                        <GithubIcon/>
                </Anchor>
            </Iconcontainer>
        </Container>
    )
}

export default Footer;