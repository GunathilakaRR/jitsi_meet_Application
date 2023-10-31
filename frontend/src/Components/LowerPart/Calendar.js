import React from 'react'

import '../CssFiles/MeetingsSchedule.css'

function Calendar() {
  return (
    <div className='container'>
      <div className='calendar'>
      <h3 className="todo-list">Set important dates, events to keep <br></br> your schedule on track </h3>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%2333B679&ctz=Asia%2FColombo&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=1&showTz=0&src=cnVzaXJ1Z3VuYXRoaWxha2ExMThAZ21haWwuY29t&src=ZWUxOTcxYTIwNGVmNDkxODViY2ExODgyOWRkY2NkMGExMGJmYjc1MzBkMWQxZWE1NGFhYTQ2MmU0M2I4NmQ2YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MTA3NTU1MzQ1MTE4MDAzMDMxNTlAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4ubGsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23A79B8E&color=%2333B679&color=%23EF6C00&color=%230B8043" style={{border:"solid 1px #777", width:"500px", height:"300px"}}></iframe>

      </div>

    </div>
  )
}

export default Calendar
