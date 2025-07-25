import styled from "styled-components";
import Anchor from "../../Anchor";
import Question from "./Question";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Container = styled.div`
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`;

const Questions = styled.div`
    width: 80%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
`;

function Faq() {
    const { t } = useTranslation();

    return (
        <Container id="faq">
            <Anchor text={'FAQ'} type={1}/>
            <Questions>
                <Question 
                    q={t('FAQ_HowItWorks_Question')} 
                    a={t('FAQ_HowItWorks_Answer')}
                />
                <Question 
                    q={t('FAQ_Affiliation_Question')} 
                    a={t('FAQ_Affiliation_Answer')}
                />
                <Question 
                    q={t('FAQ_AlbumSearch_Question')} 
                    a={t('FAQ_AlbumSearch_Answer')}
                />
                <Question 
                    q={t('FAQ_SaveData_Question')} 
                    a={t('FAQ_SaveData_Answer')}
                />
                <Question 
                    q={t('FAQ_ReportIssue_Question')} 
                    a={t('FAQ_ReportIssue_Answer')}
                />
            </Questions>
        </Container>
    );
}

export default Faq;