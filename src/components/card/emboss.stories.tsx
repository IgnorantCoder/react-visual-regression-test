import * as React from "react";
import Emboss from "./emboss";
import { Meta } from "@storybook/react";

export default {
    component: Emboss,
    title: "Components/Emboss",
} as Meta;

export const Number: React.FC<{}> = () => <Emboss>1234</Emboss>;

export const Alphabet: React.FC<{}> = () => <Emboss>ABCD</Emboss>;

export const Symbol: React.FC<{}> = () => <Emboss>*-/</Emboss>;
