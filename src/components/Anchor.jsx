/* eslint-dconst Anch2 = styled.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
`;`act/prop-types */
import styled from 'styled-components';

const Anch1 = styled.h2`
    font-size: 2em;
    width: 80%;
    font-weight: bolder;
    color: var(--PosterfyGreen);
    margin-inline: auto;
`;

const Anch2 = styled.h3`
    font-size: 1.35em;
    opacity: .5;
    font-weight: bolder;
    color: var(--textColor);
    width: 80%;
    margin-inline: auto;
    margin-block: 10px;
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
