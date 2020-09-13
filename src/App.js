import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css'
const localizer = momentLocalizer(moment);
function test(e) {
  console.log(e.target)
}
export default class App extends Component {
  constructor() {
    super();
    const now = new Date();
    const events = [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1),
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
      },

      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
      },

      {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
      },

      {
        id: 4,
        title: 'Some Event',
        start: new Date(2015, 3, 9, 0, 0, 0),
        end: new Date(2015, 3, 10, 0, 0, 0),
      },
      {
        id: 5,
        title: 'Conference',
        start: new Date(2015, 3, 11),
        end: new Date(2015, 3, 13),
        desc: 'Big conference for important people',
      },
      {
        id: 6,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
      },
      {
        id: 7,
        title: 'Lunch',
        start: new Date(2015, 3, 12, 12, 0, 0, 0),
        end: new Date(2015, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
      },
      {
        id: 8,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 14, 0, 0, 0),
        end: new Date(2015, 3, 12, 15, 0, 0, 0),
      },
      {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2015, 3, 12, 17, 0, 0, 0),
        end: new Date(2015, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
      },
      {
        id: 10,
        title: 'Dinner',
        start: new Date(2015, 3, 12, 20, 0, 0, 0),
        end: new Date(2015, 3, 12, 21, 0, 0, 0),
      },
      {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2015, 3, 13, 7, 0, 0),
        end: new Date(2015, 3, 13, 10, 30, 0),
      },
      {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 18, 2, 0, 0),
      },
      {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 17, 23, 30, 0),
      },
      {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2015, 3, 20, 19, 30, 0),
        end: new Date(2015, 3, 22, 2, 0, 0),
      },
      {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
      },
      {
        id: 15,
        title: 'Point in Time Event',
        start: now,
        end: now,
      },
    ]
    this.state = {
      name: 'React',
      events
    };
  }
  CustomDateHeader = ({ label, drilldownView, onDrillDown }) => {
    return (
      <span>
        <button> {label}</button>
      </span>
    )
  }
  test = (e) => {
    console.log(e)
    console.log(e.target)
    // console.log(e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none")
    console.log(e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)

    console.log(e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children)
    let lst = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children;
    for (let i = 0; i < lst.length; i++) {
      if(lst[i] !== e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode){
      lst[i].classList.add('hidden')}
    }
    console.log(lst)
  }

  CustomDateHeader = ({ label, drilldownView, onDrillDown }) => {
    return (
      <span>
        <button className="ee" onClick={

          this.test
        }> {label}</button>
      </span>
    )
  }
  returnEle = () => {
    let x = document.getElementsByClassName("rbc-month-view")[0].children;
    for (let i = 0; i < x.length; i++) {

      x[i].classList.remove('hidden')
    }
  }
  getCustomToolbar = (toolbar) => {
  }
  render() {
    const formats = {
      weekdayFormat: (date, culture, localizer) => {
        let d = localizer.format(date, 'ddd', culture)
        switch (d) {
          case "Sun":
            return "CN"
          case "Mon":
            return "Hai"
          case "Tue":
            return "Ba"
          case "Wed":
            return "Tư"
          case "Thu":
            return "Năm"
          case "Fri":
            return "Sáu"
          case "Sat":
            return "Bảy"
          default:
            break;
        }
      }
    }
    return (
      <div>
        <button onClick={this.returnEle}> return </button>
        <div style={{ height: '350pt' }}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end" formats={formats}

            defaultDate={moment().toDate()}
            localizer={localizer}
            components={{
              month: {
                dateHeader: this.CustomDateHeader
              },
              week: {
                header: this.CustomDateHeader
              },
              day: {
                toolbar: this.getCustomToolbar
              }

            }}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
