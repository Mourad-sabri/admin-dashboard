import { createGlobalStyle, ThemeProps } from "styled-components"
import { BaseThemeProps } from "./types"

export const GlobalStyle = createGlobalStyle<ThemeProps<BaseThemeProps>>`


*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family:  Merriweather, cursive;
}


button, input {
    background-color: transparent;
    border: none;
    outline: none;
}

html {
    /* light mode */
    --text-color: ${(p) => p.theme.lightMode.textColor};
    /* backgound color variables */
    --bg-default: ${(p) => p.theme.lightMode.bgDefault};
 
    --bg-secondary: ${(p) => p.theme.lightMode.bgSecondary};

    --bg-primary: ${(p) => p.theme.lightMode.bgPrimary};
    --bg-primary-A: ${(p) => `${p.theme.lightMode.bgPrimary}8C`};

}


html[data-theme="dark"] {
    /* dark mode */
    --text-color:${(p) => p.theme.darkMode.textColor};
      /* backgound color variables */


    --bg-default:${(p) => p.theme.darkMode.bgDefault};
    --bg-secondary:${(p) => p.theme.darkMode.bgSecondary};


    --bg-primary:${(p) => p.theme.darkMode.bgPrimary};
    --bg-primary-A:${(p) => `${p.theme.darkMode.bgPrimary}8C`};
}



body {
    background-color: var(--bg-default);
    color: var(--text-color);
    transition: background-color .3s ease-in, color .3s ease-in;
}


 .tippy-box[data-theme~="asmaa"] {
    background-color: var(--bg-secondary);
    color: var(--text-color);
    padding: 0px
  }

  .tippy-box > .tippy-content {
    padding: 0px;
  }

   .tippy-box[data-theme~="asmaa"][data-placement^="top"] > .tippy-arrow::before {
    border-top-color: var(--bg-secondary);
  }

   .tippy-box[data-theme~="asmaa"][data-placement^="bottom"] > .tippy-arrow::before {
    border-bottom-color: var(--bg-secondary);
  }

   .tippy-box[data-theme~="asmaa"][data-placement^="left"] > .tippy-arrow::before {
    border-left-color: var(--bg-secondary);
  }

   .tippy-box[data-theme~="asmaa"][data-placement^="right"] > .tippy-arrow::before {
    border-right-color: var(--bg-secondary);
  }


  .flatpickr-calendar.flatpickr-calendar {
    background: var(--bg-secondary);
    color: green;
  }

  .flatpickr-day.flatpickr-day {
    color: var(--text-color);
  }
  .flatpickr-months.flatpickr-months .flatpickr-month {
    color: var(--text-color);
  }
  .flatpickr-weekday.flatpickr-weekday {
    color: var(--text-color);
  }
  .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month, .flatpickr-months .flatpickr-next-month.flatpickr-next-month {
    fill: var(--text-color);
  }

  .flatpickr-day.flatpickr-disabled.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover.flatpickr-disabled:hover, .flatpickr-day.prevMonthDay.prevMonthDay, .flatpickr-day.nextMonthDay.nextMonthDay, .flatpickr-day.notAllowed.notAllowed, .flatpickr-day.notAllowed.prevMonthDay.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay.nextMonthDay {
    color: rgb(175, 175, 175);
  }

  .flatpickr-day.inRange.inRange, .flatpickr-day.prevMonthDay.inRange.inRange, .flatpickr-day.nextMonthDay.inRange.inRange, .flatpickr-day.today.inRange.inRange, .flatpickr-day.prevMonthDay.today.inRange.inRange, .flatpickr-day.nextMonthDay.today.inRange.inRange, .flatpickr-day:hover.flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover.nextMonthDay:hover, .flatpickr-day:focus.flatpickr-day:focus, .flatpickr-day.prevMonthDay:focus.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus.nextMonthDay:focus {
    background: var(--bg-primary);

  }

  .flatpickr-current-month .flatpickr-monthDropdown-months.flatpickr-monthDropdown-months {
     background: var(--bg-secondary);
  }
  .flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month.flatpickr-monthDropdown-month {
    background-color: var(--bg-secondary);
  }

  .flatpickr-time.flatpickr-time input {
    color: var(--text-color);
  }
  .flatpickr-time .flatpickr-time-separator.flatpickr-time-separator, .flatpickr-time .flatpickr-am-pm.flatpickr-am-pm {
    color: var(--text-color);
  }

  .flatpickr-time.flatpickr-time input:hover, .flatpickr-time .flatpickr-am-pm:hover.flatpickr-am-pm:hover, .flatpickr-time.flatpickr-time input:focus, .flatpickr-time .flatpickr-am-pm:focus.flatpickr-am-pm:focus {
    background: var(--bg-primary);
  }

  .flatpickr-day.selected.flatpickr-day.selected, .flatpickr-day.startRange.startRange, .flatpickr-day.endRange.endRange, .flatpickr-day.selected.inRange.inRange, .flatpickr-day.startRange.inRange.inRange, .flatpickr-day.endRange.inRange.inRange, .flatpickr-day.selected:focus.selected:focus, .flatpickr-day.startRange:focus.startRange:focus, .flatpickr-day.endRange:focus.endRange:focus, .flatpickr-day.selected:hover.selected:hover, .flatpickr-day.startRange:hover.startRange:hover, .flatpickr-day.endRange:hover.endRange:hover, .flatpickr-day.selected.prevMonthDay.prevMonthDay, .flatpickr-day.startRange.prevMonthDay.prevMonthDay, .flatpickr-day.endRange.prevMonthDay.prevMonthDay, .flatpickr-day.selected.nextMonthDay.nextMonthDay, .flatpickr-day.startRange.nextMonthDay.nextMonthDay, .flatpickr-day.endRange.nextMonthDay.nextMonthDay {
    color: var(--text-color);
  }

  .flatpickr-day.today:hover.flatpickr-day.today:hover, .flatpickr-day.today:focus.flatpickr-day.today:focus {
    color: var(--text-color);
  }

`
