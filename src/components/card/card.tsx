import * as React from "react";
import styled from "styled-components";

import Pan from "./pan";
import Expire, { Month } from "./expire";
import Emboss from "./emboss";
import GoodThru from "./good_thru";
import CardAmount from "./card_amount";

export type Props = {
    pan: string;
    expire: {
        month: Month;
        year: number;
    };
    balance: number;
};

const Card: React.FC<Props> = (props) => {
    return (
        <Container>
            <CardType />
            <Emboss>
                <Pan value={props.pan} />
            </Emboss>
            <GoodThru>
                <Emboss>
                    <Expire {...props.expire} />
                </Emboss>
            </GoodThru>
            <CardAmountWrapper>
                <CardAmount balance={props.balance} />
            </CardAmountWrapper>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 180px;
    border-radius: 10px;
    background-color: #e1f5fe;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const CardType = styled.div`
    position: absolute;
    top: 5px;
    left: 8px;
    :before {
        content: "◀ Prepaid Card";
        font-size: 0.5rem;
        color: #00acc1;
        font-weight: 700;
    }
`;

const CardAmountWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
