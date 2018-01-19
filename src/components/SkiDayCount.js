import {Component} from "react"
import PropTypes from 'prop-types';
import "../stylesheets/ui.scss"
import Terrain from "react-icons/lib/md/terrain"
import Calendar from "react-icons/lib/fa/calendar"
import SnowFlake from "react-icons/lib/ti/weather-snow"

class SkiDayCount extends Component {

    percentToDecimal(decimal) {
        return ((decimal * 100) + "%")
    }

    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total / goal)
    }

    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <Calendar/>

                    <span>
                        days</span>
                </div>
                <div className="power-days">
                    <span>{this.props.power}</span>
                    <SnowFlake/>
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                    <Terrain/>
                    <span>days</span>
                </div>
                <div className="goal">
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}
                    </span>
                </div>
            </div>
        )

    }

}
SkiDayCount.propTypes  = {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}

SkiDayCount.defaultProps = {
    total: 0,
    powder: 0,
    backcountry: 0,
    goal: 100
}

export default SkiDayCount;