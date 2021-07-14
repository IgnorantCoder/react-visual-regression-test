import * as React from "react";
import styled from "styled-components";

export type Props = {
    month: Month;
    year: number;
};

export type Month =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";

const Expire: React.FC<Props> = ({ month, year }) => {
    return (
        <div>
            <MonthWrapper month={month} />
            <Separator />
            <YearWrapper year={year} />
        </div>
    );
};

export default Expire;

const MonthWrapper: React.FC<{ month: Month }> = ({ month }) => {
    return <span>{month.padStart(2, "0")}</span>;
};

const YearWrapper: React.FC<{ year: number }> = ({ year }) => {
    return <span>{`${year}`.slice(2, 4)}</span>;
};

const Separator = styled.span`
    :after {
        content: "/";
    }
    padding: 0 3px;
`;
