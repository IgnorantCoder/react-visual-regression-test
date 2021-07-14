import * as React from "react";
import styled from "styled-components";

import Card, { Props as CardProps } from "./card";

export type Props = {
    cards: CardProps[];
};

const Cards: React.FC<Props> = ({ cards }) => {
    return (
        <Container>
            {cards.map((card, i) => (
                <Card key={`card-${i}`} {...card} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    gap: 16px;
`;

export default Cards;
