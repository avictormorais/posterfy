/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Anch1 = styled.h2`
    font-size: 2em;
    font-weight: bolder;
    color: var(--PosterfyGreen);
    margin-left: 180px;

    @media (max-width: 900px) {
        margin-left: 40px;
    }
`;

const Anch2 = styled.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: white;
    margin-left: 180px;
    margin-block: 10px;

    @media (max-width: 900px) {
        margin-left: 40px;
    }
`;

function Anchor({ text, type }) {
    return (
        <>
            {type == 1 ? (
                    <Anch1>
                        {text}
                    </Anch1>
            ) : (
                <Anch2>
                    {text}
                </Anch2>
            )}
        </>
    );
}

export default Anchor;
