import React from 'react';
import {render} from "react-dom";
import SkiDayList from './components/SkiDayList';
import SkiDayCount from './components/SkiDayCount';

window.React = React;

render(
    <SkiDayCount/>, document.getElementById("react-container")
)

 render(<SkiDayList
    days={[
    {
        resort: "Løvstakken",
        date: new Date("1/1/2018"),
        powder: true,
        backcountry: false
    }, {
        resort: "Ulrikken",
        date: new Date("2/1/2018"),
        powder: true,
        backcountry: true
    }, {
        resort: "Fløyen",
        date: new Date("3/1/2018"),
        powder: false,
        backcountry: false
    }
]}/>, document.getElementById("react-container")); 