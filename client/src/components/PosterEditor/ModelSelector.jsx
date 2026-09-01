/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";
import { IoArrowBack, IoColorPaletteOutline } from "react-icons/io5";
import Standart from "../svgs/PostersModels/Standart";
import Basic from "../svgs/PostersModels/Basic";
import FullCover from "../svgs/PostersModels/FullCover";
import Frame from "../svgs/PostersModels/Frame";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../../services/analytics";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Shell = styled.section`
  width: min(90%, 1240px);
  margin: 28px auto 44px;
  animation: ${fadeInUp} 0.55s cubic-bezier(0.23, 1, 0.32, 1);
`;

const BackButton = styled.button`
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 22px;
  border: 0;
  background: transparent;
  color: var(--textColor);
  font: inherit;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;

  svg {
    width: 26px;
    height: 26px;
    color: currentColor;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }

  &:focus-visible {
    outline: 2px solid var(--AccentColor);
    outline-offset: 4px;
    border-radius: 6px;
  }
`;

const Header = styled.header`
  margin-bottom: 26px;
  width: 100%;
`;

const TitleModels = styled.h1`
  margin: 0 0 7px;
  color: var(--textColor);
  font-size: clamp(2.1rem, 5vw, 3.45rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: 0;
`;

const ModelsText = styled.p`
  max-width: 600px;
  margin: 0;
  color: var(--textSecondary);
  font-size: 0.93rem;
  line-height: 1.6;
  font-weight: 500;
`;

const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ModelCard = styled.button`
  appearance: none;
  width: 100%;
  min-height: 370px;
  padding: 24px 28px 26px;
  border: 1px solid var(--borderColor);
  border-radius: 8px;
  background: color-mix(in srgb, var(--backgroundColor) 90%, var(--textColor) 4%);
  box-shadow: 0 18px 45px color-mix(in srgb, var(--shadowColor) 48%, transparent);
  color: var(--textColor);
  text-align: left;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInUp} 0.55s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: ${props => props.$delay || 0}s;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
    border-color: color-mix(in srgb, var(--textColor) 36%, var(--borderColor));
    background: color-mix(in srgb, var(--backgroundColor) 86%, var(--textColor) 7%);
    box-shadow: 0 24px 55px color-mix(in srgb, var(--shadowColor) 58%, transparent);
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--AccentColor) 42%, transparent);
    outline-offset: 3px;
  }

  @media (max-width: 700px) {
    min-height: 0;
    padding: 22px;
  }
`;

const PreviewWrap = styled.div`
  width: 240px;
  aspect-ratio: 186 / 264;
  margin: 0 auto 22px;
  display: grid;
  place-items: center;
  filter: drop-shadow(0 16px 14px color-mix(in srgb, var(--shadowColor) 54%, transparent));
  background-color: red;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 700px) {
    width: 132px;
    margin-inline: 0;
  }
`;

const ModelName = styled.h2`
  margin: 0 0 9px;
  color: var(--textColor);
  font-size: 1.05rem;
  font-weight: 900;
  line-height: 1.2;
`;

const ModelDescription = styled.p`
  margin: 0;
  color: var(--textSecondary);
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.55;
`;

const FeatureBadge = styled.div`
  margin-top: 24px;
  padding: 18px 24px;
  border: 1px solid var(--borderColor);
  border-radius: 8px;
  background: color-mix(in srgb, var(--backgroundColor) 92%, var(--textColor) 4%);
  box-shadow: 0 14px 35px color-mix(in srgb, var(--shadowColor) 36%, transparent);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const BadgeCopy = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 14px;
`;

const BadgeIcon = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--textColor);
  display: grid;
  place-items: center;

  svg {
    width: 21px;
    height: 21px;
    color: var(--AccentColor);
  }
`;

const BadgeTitle = styled.h2`
  margin: 0 0 4px;
  color: var(--textColor);
  font-size: 0.95rem;
  font-weight: 900;
  line-height: 1.2;
`;

const BadgeDescription = styled.p`
  margin: 0;
  color: var(--textSecondary);
  font-size: 0.78rem;
  line-height: 1.5;
  font-weight: 500;
`;

const PaletteDots = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
`;

const Dot = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${props => props.$color};
  border: 1px solid color-mix(in srgb, var(--textColor) 14%, transparent);
`;

const MODEL_ITEMS = [
  {
    id: 'standart',
    nameKey: 'MODEL_Standard_Name',
    descriptionKey: 'MODEL_Standard_Description',
    Preview: Standart,
    params: {
      coverZoom: 0,
      marginBackground: 0,
      showTracklist: true,
      useFade: true,
    },
  },
  {
    id: 'frame',
    nameKey: 'MODEL_Frame_Name',
    descriptionKey: 'MODEL_Frame_Description',
    Preview: Frame,
    params: {
      coverZoom: -16,
      useFade: false,
      marginTop: 40,
      backgroundColor: '#eee7d7',
      textColor: '#1f1d1d',
    },
  },
  {
    id: 'basic',
    nameKey: 'MODEL_Basic_Name',
    descriptionKey: 'MODEL_Basic_Description',
    Preview: Basic,
    params: {
      coverZoom: 50,
      marginBackground: -700,
      showTracklist: false,
      marginTop: 200,
    },
  },
  {
    id: 'fullcover',
    nameKey: 'MODEL_FullCover_Name',
    descriptionKey: 'MODEL_FullCover_Description',
    Preview: FullCover,
    params: {
      coverZoom: 110,
      marginBackground: -1200,
      useFade: false,
    },
  },
];

const swatches = ['#101214', '#e9e2d9', '#596157', '#df6d40', '#a9332d'];

export default function ModelSelector({ onSelectModel, onBack }) {
  const { t } = useTranslation();

  function handleSelect(model, params) {
    trackEvent('select_model', 'ModelSelector', model);
    if (onSelectModel) onSelectModel(model, params);
  }

  return (
    <Shell>
      <BackButton type="button" onClick={onBack}>
        <IoArrowBack aria-hidden="true" />
        <span>{t('GoBack')}</span>
      </BackButton>

      <Header>
        <TitleModels>{t('ModelTitle')}</TitleModels>
        <ModelsText>{t('ModelText')}</ModelsText>
      </Header>

      <ModelGrid>
        {MODEL_ITEMS.map(({ id, nameKey, descriptionKey, Preview, params }, index) => (
          <ModelCard
            key={id}
            type="button"
            $delay={index * 0.06}
            aria-label={t('MODEL_SelectAria', { model: t(nameKey) })}
            onClick={() => handleSelect(id, params)}
          >
            <PreviewWrap>
              <Preview width={286} />
            </PreviewWrap>
            <ModelName>{t(nameKey)}</ModelName>
            <ModelDescription>{t(descriptionKey)}</ModelDescription>
          </ModelCard>
        ))}
      </ModelGrid>

      <FeatureBadge>
        <BadgeCopy>
          <BadgeIcon aria-hidden="true">
            <IoColorPaletteOutline />
          </BadgeIcon>
          <div>
            <BadgeTitle>{t('MODEL_CustomBadge_Title')}</BadgeTitle>
            <BadgeDescription>{t('MODEL_CustomBadge_Description')}</BadgeDescription>
          </div>
        </BadgeCopy>
        <PaletteDots aria-hidden="true">
          {swatches.map((color) => <Dot key={color} $color={color} />)}
        </PaletteDots>
      </FeatureBadge>
    </Shell>
  );
}
