import * as React from "react";
import styled from "styled-components";

type Props = {
    value: string;
};

const Pan: React.FC<Props> = (props) => {
    return (
        <Container>
            {[...Array(Math.ceil(props.value.length / 4))]
                .map((_, i) => props.value.slice(4 * i, 4 * (i + 1))) // chunk
                .map((e, i) => (
                    <PanChunk key={`${props.value}-${i}`}>{e}</PanChunk>
                ))}
        </Container>
    );
};

export default Pan;

const Container = styled.div`
    padding-bottom: 10px;
    padding-top: 20px;
`;

const PanChunk = styled.span`
    font-size: 120%;
    letter-spacing: 0.1rem;
    padding-right: 10px;
`;
