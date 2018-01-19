import Terrain from "react-icons/lib/md/terrain"
import Calendar from "react-icons/lib/fa/calendar"
import SnowFlake from "react-icons/lib/ti/weather-snow"
import {SkiDayRow} from './SkiDayRow'
import PropTypes from 'prop-types';

import React, {Component} from 'react';

class SkiDayList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Resort</th>
                        <th>Powder</th>
                        <th>Backcountry</th>
                    </tr>
                </thead>
                <tbody>
                    {this
                        .props
                        .days
                        .map((day, i) => <SkiDayRow
                            key={i}
                            {...day}/>)}
                </tbody>
            </table>
        )
    }
}
SkiDayList.propTypes = {
    days: PropTypes.array
}

export default SkiDayList