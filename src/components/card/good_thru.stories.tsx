import * as React from "react";
import GoodThru from "./good_thru";
import { Meta } from "@storybook/react";

export default {
    component: GoodThru,
    title: "Components/GoodThru",
} as Meta;

export const Smaple: React.FC<{}> = () => <GoodThru>12/21</GoodThru>;
