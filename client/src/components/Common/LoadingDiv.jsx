import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const LoadDiv = styled.div`
    display: flex;
    width: 80%;
    margin-inline: auto;
    justify-content: center;
    padding-block: 25px;
    align-items: center;
    flex-direction: column;
    opacity: 0.25;
`

const LoadTitle = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 20px;
`

const LoadText = styled.p`
    font-size: .9em;
    font-weight: bold;
    margin-top: 5px;
    opacity: 0.5;
    text-align: center;
`

const LoadIcon = styled(AiOutlineLoading3Quarters)`
    font-size: 5em;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

function LoadingDiv(){
    const { t } = useTranslation();

    return(
        <LoadDiv>
            <LoadIcon/>
            <LoadTitle>
                {t('Loading')}
            </LoadTitle>
            <LoadText>
                {t('LoadingText')}
            </LoadText>
        </LoadDiv>
    )
}

export default LoadingDiv;