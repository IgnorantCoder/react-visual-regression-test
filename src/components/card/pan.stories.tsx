import * as React from "react";
import Pan from "./pan";
import { Meta } from "@storybook/react";

export default {
    component: Pan,
    title: "Components/Pan",
} as Meta;

export const Digits16: React.FC<{}> = () => <Pan value={"1234567890123456"} />;

export const Digits19: React.FC<{}> = () => (
    <Pan value={"1234567890123456789"} />
);
