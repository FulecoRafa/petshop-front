<template>
    <div id="calendar">
        <div id="calendar-content">
            <table>
                <tbody>
                    <tr>
                        <th v-for='i in numDays' :key='i'>
                            <p>{{ calcWeekday(now.getDay() + i) }}</p>
                            <p>{{ addDays(now, i).getDate() }} </p>
                        </th>
                    </tr>
                    <tr v-for='i in hours' :key='i'>
                        <td v-for='j in numDays' :key='j'><router-link to='404'>{{ calcHour(i + 8) }}</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    data: ()=> ({
        weekdays: ['Sunday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
        hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        numDays: 10,
        now: new Date()
    }),
    methods: {
        calcWeekday(w){
            return this.weekdays[w % 7]
        },

        addDays(date, days) {
            const copy = new Date(Number(date))
            copy.setDate(date.getDate() + days)
            return copy
        },

        calcHour(h) {
            if(h > 12) {
                return `${h - 12}:00 pm`
            } else if( h == 12) {
                return `${h}:00 pm`
            } else {
                return `${h}:00 am`
            }
        }
    }
}
</script>

<style>
#calendar * {
  --calendarcolor: blue;
}

#calendar-content {
  max-width: 900px;
  height: 100%;
  text-align: center;
  overflow-x: scroll;
  border: rgb(150, 150, 150) solid 3px;
}

#calendar table {
  border-spacing: 0px;
  border-collapse: collapse;
}

#calendar td {
  height: 100px;
  min-width: 150px;
  background-color: white;
  border: var(--calendarcolor) solid 5px;
}

#calendar .reserved {
  background-color: lightgray;
  display: table;
  flex-direction: column;
  border: none;
}

#calendar .reserved .user {
  width: 100px;
  height: auto;
  margin: 0;
}

#calendar .reserved p {
  font-size: 17pt;
}

#calendar .reserved .pet {
  width: 50px;
  height: auto;
}

#calendar .reserved .service {
  width: 50px;
  height: auto;
}

#calendar th {
  background-color: whitesmoke;
  border: var(--calendarcolor) solid 5px;
  height: initial;
}
#calendar td:hover{
  background-color: lightgray;
  cursor: pointer;
}
</style>