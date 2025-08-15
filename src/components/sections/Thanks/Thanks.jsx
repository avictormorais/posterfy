import styled from "styled-components";
import Anchor from "../../Commom/Anchor";
import { useTranslation } from 'react-i18next';
import { FaHeart } from "react-icons/fa";
import infos from "./ThanksInfos.json";

const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-inline: auto;
  margin-top: 80px;
`;

const DivThanks = styled.div`
    width: 79%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-inline: auto;
`;

const TopInfos = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;


const Circle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: var(--textColor);
    opacity: 0.8;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`;

const HeartIcon = styled(FaHeart)`
    fill: var(--AccentColor);
    width: 17px;
    height: 17px;
    margin-left: -1px;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
`;


const Title = styled.h1`
    font-size: 1.2rem;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`;

const Text = styled.p`
    font-size: 1rem;
    margin-top: 10px;
    opacity: 0.7;
    font-weight: bolder;
    margin-left: 25px;
`;

const ContributeArea = styled.div`
    width: 79%;
    margin: 40px auto 0 auto;
    padding: 18px 20px;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const ContributeTitle = styled.h2`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--AccentColor);
`;

const ContributeText = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
    opacity: 0.8;
`;

const GithubLink = styled.a`
    color: var(--textColor);
    background: var(--AccentColor);
    padding: 7px 18px;
    border-radius: 6px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    display: inline-block;
    margin-top: 5px;
    &:hover {
        background: #1a1a1a;
        color: #fff;
    }
`;

function Thanks() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const lang = i18n.language?.split("-")[0] || "en";

    const thanksInfos = infos.filter(i => i.key !== "contribute_area");
    const contributeInfo = infos.find(i => i.key === "contribute_area");

    return (
        <Container id="thanks">
            <Anchor text={t('Thanks')} type={1} />

            {thanksInfos.map((info, idx) => (
                <DivThanks key={info.key}>
                    <TopInfos>
                        <Circle className="circle" />
                        <HeartIcon className="heart" />
                        <Title
                            tabIndex={0}
                            role="button"
                            onClick={() => window.open(info.url, '_blank', 'noopener,noreferrer')}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    window.open(info.url, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            onMouseEnter={e => {
                                const parent = e.target.parentNode;
                                parent.querySelector('.circle').style.opacity = 0;
                                parent.querySelector('.heart').style.opacity = 1;
                            }}
                            onMouseLeave={e => {
                                const parent = e.target.parentNode;
                                parent.querySelector('.circle').style.opacity = 0.8;
                                parent.querySelector('.heart').style.opacity = 0;
                            }}
                        >{info.title[lang] || info.title.en}</Title>
                    </TopInfos>
                    <Text>{info.text[lang] || info.text.en}</Text>
                </DivThanks>
            ))}

            {contributeInfo && (
                <ContributeArea>
                    <ContributeTitle>{contributeInfo.title[lang] || contributeInfo.title.en}</ContributeTitle>
                    <ContributeText>{contributeInfo.text[lang] || contributeInfo.text.en}</ContributeText>
                    <GithubLink href={contributeInfo.url} target="_blank" rel="noopener noreferrer">
                        {contributeInfo.button?.[lang] || contributeInfo.button?.en || 'Github'}
                    </GithubLink>
                </ContributeArea>
            )}
        </Container>
    );
}

export default Thanks;