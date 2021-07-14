import * as React from "react";
import CardAmount from "./card_amount";
import { Meta } from "@storybook/react";

export default {
    component: CardAmount,
    title: "Components/CardAmount",
} as Meta;

export const SmallNumber: React.FC<{}> = () => <CardAmount balance={20} />;

export const BigNumber: React.FC<{}> = () => <CardAmount balance={2000000} />;
