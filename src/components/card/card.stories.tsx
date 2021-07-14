import * as React from "react";
import Card from "./card";
import { Meta } from "@storybook/react";

export default {
    component: Card,
    title: "Components/Card",
} as Meta;

export const Sample: React.FC<{}> = () => (
    <Card
        pan={"1234567890123456"}
        expire={{ month: "11", year: 2021 }}
        balance={2000}
    />
);
