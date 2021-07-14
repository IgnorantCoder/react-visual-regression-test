import * as React from "react";
import Cards from "./cards";
import { Meta } from "@storybook/react";

export default {
    component: Cards,
    title: "Pages/Cards",
} as Meta;

export const Sample: React.FC<{}> = () => (
    <Cards
        cards={[
            {
                pan: "1234567890123456",
                expire: { month: "11", year: 2021 },
                balance: 2000,
            },
            {
                pan: "6543210987654321",
                expire: { month: "11", year: 2021 },
                balance: 200000,
            },
        ]}
    />
);
