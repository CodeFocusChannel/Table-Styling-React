import React from "react";

import classes from "./Table.module.scss";

const Table = ({ data }) => {
    const keys = Object.keys(data[0]);
    return (
        <table className={classes.table}>
            <thead className={classes.thead}>
                <tr className={classes.trHead}>
                    {["#", ...keys].map((item, index) => (
                        <th className={classes.th} key={index}>
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className={classes.tbody}>
                {data.map((obj, index) => (
                    <tr className={classes.trBody} key={index}>
                        <td className={classes.td}>{index + 1}</td>
                        {keys.map((item, index) => {
                            const value = obj[item];
                            return (
                                <td className={classes.td} key={index}>
                                    {value}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
