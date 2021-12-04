import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styled-components-table/theme";

import CssTable from "./components/css-table/Table";
import ScssTable from "./components/scss-table/Table";
import ScTable from "./components/styled-components-table/Table";

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <div className="table-container">
                <CssTable data={data} />
                <ScssTable data={data} />
                <ScTable data={data} />
            </div>
        </ThemeProvider>
    );
};

const data = [
    {
        name: "James",
        email: "james@hotmail.com",
        age: "32",
        food: "pizza",
    },
    {
        name: "Jennifer",
        email: "jennifer@hotmail.com",
        age: "23",
        food: "sushi",
    },
    {
        name: "Markus",
        email: "markus@hotmail.com",
        age: "21",
        food: "chicken parm",
    },
    {
        name: "Sarah",
        email: "sarah@hotmail.com",
        age: "30",
        food: "burritos",
    },
    {
        name: "Stella",
        email: "stella@hotmail.com",
        age: "27",
        food: "samosa",
    },
];

export default App;
