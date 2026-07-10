import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Anchor from '../../Common/Anchor';
import { SiKofi } from "react-icons/si";

const Container = styled.section`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 124px;
`;

const Content = styled.div`
  width: 80%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 10px;
  margin-bottom: auto;
`;

const Title = styled.h2`
  margin: 0;
  color: var(--textColor);
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1.04;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

const Paragraph = styled.p`
  width: min(100%, 700px);
  margin: 0;
  color: var(--textColor);
  font-size: 1.08rem;
  line-height: 1.7;
  opacity: 0.72;
  max-width: none;
  text-align: justify;
`;

const Actions = styled.div`
  width: min(100%, 700px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;
  margin-top: 8px;
`;

const GoalCard = styled.div`
  width: 100%;
  border-radius: 18px;
  background: var(--PosterfyWhite);
  margin-bottom: 12px;
`;

const GoalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
`;

const GoalLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--textColor);
  font-weight: 800;
  font-size: 1rem;
`;

const GoalText = styled.span`
  color: var(--textColor);
  font-weight: 800;
  font-size: 1rem;
  text-align: right;
`;

const GoalBar = styled.div`
  width: calc(100% - 6px);
  height: 18px;
  border: 3px solid var(--textColor);
  border-radius: 999px;
  background: var(--textColor);
  overflow: hidden;
`;

const GoalFill = styled.div`
  width: ${props => props.$progress}%;
  height: 100%;
  border-radius: inherit;
  background: var(--AccentColor);
  transition: width 0.3s ease;
`;

const GoalTitle = styled.span`
  white-space: nowrap;
`;

const KoFiButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 0px;
  border-radius: 999px;
  background: var(--AccentColor);
  color: var(--PosterfyWhite);
  text-decoration: none;
  font-weight: 800;
  letter-spacing: -0.01em;
  transition: all 1s;
  width: 100%;
  font-size: 0.92rem;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
  }
`;

const ButtonIcon = styled(SiKofi)`
  width: 25px;
  height: 25px;
`;

const Note = styled.p`
  margin: 0;
  color: var(--textColor);
  opacity: 0.58;
  font-size: 0.92rem;
  line-height: 1.5;
  width: 100%;
  text-align: center;
`;

const Visual = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`;

const SupportImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 500px;
  margin-left: auto;

    @media (max-width: 900px) {
        margin-left: 0;
    }
`;

function Support() {
  const { t } = useTranslation();
  const goalProgress =  0;

  return (
    <Container id="support">
      <Anchor text={t('SupportAnchor')} type={1} />
      <Content>
        <Copy>
          <Title>{t('SupportTitle')}</Title>
          <Paragraph>{t('SupportDescription')}</Paragraph>

          <Actions>
            <iframe src="https://ko-fi.com/streamalerts/goaloverlay/sa_902f0026-9fe8-4f95-87a6-7c72cbe4351d" frameBorder="0" style={{ border: 0, overflow: 'hidden', width: "100%", height: "60px" }} />
            
            {/* <GoalCard>
              <GoalTop>
                <GoalLabel>
                  <GoalTitle>{t('SupportGoalLabel')}</GoalTitle>
                </GoalLabel>
                <GoalText>{t('SupportGoalProgress')}</GoalText>
              </GoalTop>
              <GoalBar aria-hidden="true">
                <GoalFill $progress={goalProgress} />
              </GoalBar>
            </GoalCard> */}

            <KoFiButton href="https://ko-fi.com/V2F621CAVZ" target="_blank" rel="noopener noreferrer">
              <ButtonIcon />
              {t('SupportButton')}
            </KoFiButton>
            <Note>{t('SupportNote')}</Note>
          </Actions>
        </Copy>

        <Visual>
          <SupportImage src="/support.png" alt={t('SupportImageAlt')} />
        </Visual>
      </Content>
    </Container>
  );
}

export default Support;