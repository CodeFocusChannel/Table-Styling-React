import React from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./styles";

const Table = ({ data }) => {
    const keys = Object.keys(data[0]);
    return (
        <STable>
            <STHead>
                <STHeadTR>
                    {["#", ...keys].map((item, index) => (
                        <STH key={index}>{item}</STH>
                    ))}
                </STHeadTR>
            </STHead>
            <STBody>
                {data.map((obj, index) => (
                    <STBodyTR key={index}>
                        <STD>{index + 1}</STD>
                        {keys.map((item, index) => {
                            const value = obj[item];
                            return <STD key={index}>{value}</STD>;
                        })}
                    </STBodyTR>
                ))}
            </STBody>
        </STable>
    );
};

export default Table;
