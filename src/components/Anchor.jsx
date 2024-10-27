/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Anch = styled.h2`
    font-size: 2em;
    font-weight: bolder;
    color: var(--PosterfyGreen);
    margin-left: 180px;

    @media (max-width: 900px) {
        margin-left: 40px;
    }
`;

function Anchor({ text }) {
    return (
        <Anch>
            {text}
        </Anch>
    );
}

export default Anchor;
