import * as React from "react";
import Expire from "./expire";
import { Meta } from "@storybook/react";

export default {
    component: Expire,
    title: "Components/Expire",
} as Meta;

export const January: React.FC<{}> = () => <Expire month={"1"} year={2021} />;

export const December: React.FC<{}> = () => <Expire month={"12"} year={2021} />;
