import * as React from "react";
import styled from "styled-components";

export type Props = {
    balance: number;
};

const CardAmount: React.FC<Props> = (props) => {
    return <Container>{props.balance.toLocaleString()}</Container>;
};

export default CardAmount;

const Container = styled.div`
    font-weight: 100;
    color: rgba(255, 255, 255, 0.4);
    text-shadow: 1px 2px 3px #eee, 0 0 0 #000, 1px 2px 3px #eee;
    :before {
        content: "¥";
        color: rgba(255, 255, 255, 0.4);
        text-shadow: 1px 2px 3px #eee, 0 0 0 #000, 1px 2px 3px #eee;
    }
`;
