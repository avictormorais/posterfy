import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import Icon from "./icons/icon";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

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
`;

const ContainerIcon = styled.div`
    width: 80px;
    height: 88.103448276px;
    animation: rotation 5s linear infinite;
    opacity: 0.25;
    margin-left: 180px;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(0deg);
        }
        100% {
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
`;

const TagBy = styled.p`
    white-space: pre-line;
    font-weight: bold;
    margin-left: 50px;
    font-size: 1em;
    opacity: 1;
    margin-right: 50px;
    min-width: 170px;

    @media (max-width: 600px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`;

const Iconcontainer = styled.div`
    display: flex;
    justify-content: end;

    @media (max-width: 600px) {
        justify-content: center;
    }
`;

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
`;

const Anchor = styled.a`
    text-decoration: none;
    color: var(--PosterfyGreen);
`;

const ThemeSelector = styled.div`
    display: flex;
    gap: 10px;
`;

const ThemeButton = styled.button`
    background-color: ${(props) => props.color};
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    outline: ${(props) => (props.active ? "2px solid white" : "none")};
`;

const ContainerTheme = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: column; 
    margin-left: auto;
    margin-right: 50px;
    margin-bottom: 5px;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 7px 15px;
    border-radius: 10px;

    @media (max-width: 600px) {
        margin: 20px auto 0;
    }
`

const TitleTheme = styled.p`
    font-size: 0.75em;
    font-weight: bold;
    margin-bottom: 7px;
`

function Footer() {
    const { t } = useTranslation();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme-dark");

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <Container>
            <ContainerIcon>
                <Icon fill={'white'} width={'80px'} height={'88.1px'} />
            </ContainerIcon>
            <TagBy>
                {t('MadeBy')} <Anchor href="https://github.com/avictormorais" target="blank">Victor</Anchor>
            </TagBy>
            <ContainerTheme>
                <TitleTheme>{t('Theme')}</TitleTheme>
                <ThemeSelector>
                    <ThemeButton color="#070815" $active={theme === "theme-dark"} onClick={() => handleThemeChange("theme-dark")} />
                    <ThemeButton color="#151515" $active={theme === "theme-fy"} onClick={() => handleThemeChange("theme-fy")} />
                    <ThemeButton color="#232136" $active={theme === "theme-rose"} onClick={() => handleThemeChange("theme-rose")} />
                    <ThemeButton color="#1f0c19" $active={theme === "theme-carmesin"} onClick={() => handleThemeChange("theme-carmesin")} />
                    <ThemeButton color="#1e1516" $active={theme === "theme-brown"} onClick={() => handleThemeChange("theme-brown")} />
                </ThemeSelector>
            </ContainerTheme>
            <Iconcontainer>
                <Anchor href="https://github.com/avictormorais/posterfy" target="blank">
                    <GithubIcon />
                </Anchor>
            </Iconcontainer>
        </Container>
    );
}

export default Footer;