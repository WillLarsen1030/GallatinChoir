const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('is-open');
  });
});

const entry = (date, time, focus, group, kind = 'rehearsal', detail = '', track = 'musical') => ({
  date, time, focus, group, kind, detail, track,
});

const choirEntry = (date, time, focus, group, kind = 'choir', detail = '') => (
  entry(date, time, focus, group, kind, detail, 'choir')
);

const schedule = [
  {
    key: '2026-09', label: 'September 2026', short: 'Sep', events: [
      choirEntry('Sep 18', 'All day; evening concert', 'Festival of Voices', 'Performers only', 'festival', 'Tennessee Tech University in Cookeville'),
      choirEntry('Sep 25-26', 'Time TBA', 'Mid-State auditions', 'Auditions', 'audition', 'Smyrna High School'),
      choirEntry('Sep 28', '6:00 PM', 'Fall Concert', 'Full choir', 'concert', 'Gallatin High School'),
    ],
  },
  {
    key: '2026-10', label: 'October 2026', short: 'Oct', events: [
      entry('Oct 12', '1:00-4:00 PM', 'Finale / Megamix kickoff', 'Full cast', 'rehearsal', 'Waterloo; Honey, Honey; Lay All Your Love on Me; Does Your Mother Know; The Winner Takes It All; Slipping Through My Fingers'),
      entry('Oct 14', '3:30-4:30 PM', 'Dancing Queen / Super Trouper', 'Female numbers'),
      entry('Oct 19', '3:30-4:30 PM', 'Money, Money, Money / Voulez-Vous', 'Big ensemble'),
      entry('Oct 21', '3:30-4:30 PM', 'Gimme! Gimme! Gimme! / Under Attack', 'Big ensemble'),
      entry('Oct 26', '3:30-4:30 PM', 'Act 1 music review and ensemble harmonies', 'Full cast'),
      choirEntry('Oct 27-Nov 5', 'Submission window', 'All-State second-tier recording window', 'All-State', 'audition'),
      entry('Oct 28', '3:30-4:30 PM', 'Mamma Mia / Thank You for the Music', 'Leads / small group'),
    ],
  },
  {
    key: '2026-11', label: 'November 2026', short: 'Nov', events: [
      entry('Nov 2', '3:30-4:30 PM', 'Act 1 music review and clean-up', 'Full cast'),
      entry('Nov 4', '3:30-4:30 PM', 'Chiquitita / One of Us', 'Female solos / duets'),
      entry('Nov 9', '3:30-4:30 PM', 'Take a Chance on Me / I Do (x5) / I Have a Dream', 'Leads & wedding ensemble'),
      choirEntry('Nov 10', 'Time TBA', 'TTBB Day', 'TTBB singers', 'festival', 'Western Kentucky University'),
      entry('Nov 11', '3:30-4:30 PM', 'S.O.S. / The Name of the Game', 'Lead duets / trio'),
      choirEntry('Nov 13', 'Time TBA', 'Dollywood', 'Choir trip', 'trip'),
      entry('Nov 16', 'No rehearsal', 'Midstate', 'No rehearsal', 'break'),
      choirEntry('Nov 16-17', 'Time TBA', 'Mid-State event', 'Selected performers', 'festival', 'Murfreesboro'),
      entry('Nov 18', '3:30-4:30 PM', 'Dynamos and Sophie / Ali / Lisa choreography', 'Choreography'),
      entry('Nov 19', '3:30-4:30 PM', 'Our Last Summer / Knowing Me, Knowing You', 'Male solos / duets'),
      choirEntry('Nov 21', 'Time TBA', 'Winterfest Concert with WKU', 'Choir concert', 'concert', 'First United Methodist Church, Gallatin'),
      entry('Nov 23-27', 'No school', 'Thanksgiving break', 'No rehearsal', 'break'),
      entry('Nov 30', '3:30-4:30 PM', 'Act 2 review and finale touch-up', 'Full cast'),
    ],
  },
  {
    key: '2026-12', label: 'December 2026', short: 'Dec', events: [
      entry('Dec 2', '3:30-4:30 PM', 'Full Act 1 vocal run-through', 'Full cast'),
      choirEntry('Dec 5', 'Time TBA', 'Candlelight Concert', 'Choir concert', 'concert', 'Tennessee Tech University in Cookeville'),
      entry('Dec 7', '3:30-4:30 PM', 'Full Act 2 vocal run-through', 'Full cast'),
      choirEntry('Dec 8', '6:00 PM', 'Holiday Concert', 'Full choir', 'concert', 'Gallatin High School'),
      entry('Dec 9', '3:30-4:30 PM', 'Ensemble harmonies and polish', 'Ensemble'),
      entry('Dec 14', '3:30-4:30 PM', 'Lead vocals and duets polish', 'Leads'),
      entry('Dec 16', '3:30-4:30 PM', 'Final full music run-through', 'Full cast'),
      entry('Dec 19', '8:00 AM-12:00 PM', 'Super Saturday choreography', 'Full cast', 'special', 'Finale Megamix, Money Money Money, and Voulez-Vous'),
      entry('Dec 19', '12:00-1:00 PM', 'Cast holiday party', 'Cast party', 'special', 'Lunch and White Elephant gift exchange'),
    ],
  },
  {
    key: '2027-01', label: 'January 2027', short: 'Jan', events: [
      entry('Jan 9', '8:00 AM-12:00 PM', 'Super Saturday choreography review', 'Super Saturday', 'special', 'Lay All Your Love on Me; Does Your Mother Know; Gimme! Gimme! Gimme!'),
      choirEntry('Jan 11-13', 'Conference schedule', 'TMEA All-State Conference', 'All-State', 'festival', 'Opryland Hotel'),
      entry('Jan 11', '3:30-4:30 PM', 'Act 1 read-through', 'Read-through'),
      entry('Jan 13', '3:30-4:30 PM', 'Act 2 read-through', 'Read-through'),
      entry('Jan 18', 'No rehearsal', 'Martin Luther King Jr. Day', 'No rehearsal', 'break'),
      entry('Jan 20', '3:30-4:30 PM', 'Act 1, scenes 1-3 blocking / acting', 'Blocking / acting'),
      entry('Jan 25', '3:30-4:30 PM', 'Act 1, scenes 4-5 blocking / acting', 'Blocking / acting'),
      entry('Jan 27', '3:30-4:30 PM', 'Act 1, scenes 6-7 and finale blocking / acting', 'Blocking / acting'),
    ],
  },
  {
    key: '2027-02', label: 'February 2027', short: 'Feb', events: [
      entry('Feb 1', '3:30-4:30 PM', 'Act 2, scenes 1-2 blocking / acting', 'Blocking / acting'),
      entry('Feb 3', '3:30-4:30 PM', 'Act 2, scenes 3-4 blocking / acting', 'Blocking / acting'),
      entry('Feb 8', '3:30-4:30 PM', 'Act 2, scene 5 and wedding scene blocking', 'Blocking / acting'),
      entry('Feb 10', '3:30-4:30 PM', 'Full Act 2 blocking run and transitions', 'Blocking / acting'),
      choirEntry('Feb 12 or 13', '6:00 PM', 'Valentine Coffeehouse', 'Choir event', 'concert', 'Gallatin High School; final date to be confirmed'),
      entry('Feb 15', '8:00 AM-12:00 PM', 'Super Monday choreography review', 'Super Monday', 'special', 'Presidents\' Day; Under Attack and remaining dance numbers'),
      entry('Feb 17', '3:30-4:30 PM', 'Full show blocking polish and integration', 'Blocking / acting'),
      entry('Feb 20', '8:00 AM-12:00 PM', 'Super Saturday choreography review and finishing touches', 'Super Saturday', 'special'),
      choirEntry('Feb 22-26', 'Event window', 'Choir CPA', 'Performers only', 'festival'),
      entry('Feb 22', '3:30-4:30 PM', 'Final February full show blocking run', 'Full show run'),
      entry('Feb 24', '3:30-4:30 PM', 'Acting / music refinement and clean-up', 'Rehearsal'),
    ],
  },
  {
    key: '2027-03', label: 'March 2027', short: 'Mar', events: [
      entry('Mar 1-4', '3:30-5:00 PM', 'Intensive rehearsals: Act 1 and Act 2 polish', 'Rehearsal', 'rehearsal', 'Monday through Thursday'),
      entry('Mar 8-11', '3:30-5:00 PM', 'Intensive rehearsals: pacing and transitions', 'Rehearsal', 'rehearsal', 'Monday through Thursday'),
      choirEntry('Mar 9', 'Time TBA', 'Sumner County Honor Choir', 'Honor choir', 'festival', 'Auditions required for performers; all others are welcome. Event at Hendersonville Church of Christ.'),
      entry('Mar 13-14', 'Time TBA', 'Optional set-building help', 'Set build', 'optional', 'Saturday and Sunday'),
      entry('Mar 15', '3:30-5:00 PM', 'Full show run-through', 'Full show run'),
      entry('Mar 16-18', '3:30-5:00 PM', 'Show runs and final adjustments before break', 'Rehearsal', 'rehearsal', 'Tuesday through Thursday'),
      entry('Mar 19-21', 'Time TBA', 'Optional set-building help', 'Set build', 'optional', 'Friday through Sunday'),
      entry('Mar 20-27', 'No school', 'Spring break', 'No rehearsal', 'break'),
      entry('Mar 29', '1:00 PM call; 3:30-6:00 PM run', 'Full tech run', 'Full cast', 'special', 'Call at GHS at 1:00 PM; hair, makeup, and costume by 3:00 PM; sound and lights'),
      entry('Mar 30-31', '3:30-8:00 PM', 'Dress rehearsals / tech polish', 'Dress rehearsal', 'special', 'Tuesday and Wednesday'),
    ],
  },
  {
    key: '2027-04', label: 'April 2027', short: 'Apr', events: [
      entry('Apr 1', '3:30-8:00 PM', 'Final dress rehearsal', 'Final dress', 'special'),
      entry('Apr 2', 'Daytime and 6:00 PM', 'School show and Show #2', 'Performances', 'show', 'School show during the day; evening performance at 6:00 PM'),
      entry('Apr 3', '6:00 PM', 'Show #3', 'Performance', 'show'),
      entry('Apr 4', '3:00 PM', 'Show #4 matinee', 'Performance', 'show'),
      entry('Apr 5', '6:00 PM', 'Closing night: Show #5', 'Performance', 'show'),
    ],
  },
  {
    key: '2027-05', label: 'May 2027', short: 'May', events: [
      choirEntry('May 4', 'Time TBA', 'May the 4th Be With You', 'Fine arts night', 'special-event'),
      choirEntry('May 6', '6:00 PM', 'Spring Concert', 'Full choir', 'concert', 'Gallatin High School'),
    ],
  },
];

const monthControls = document.querySelector('#schedule-months');
const trackFilters = document.querySelector('#schedule-filters');
const scheduleView = document.querySelector('#schedule-view');
const today = new Date();
const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
let selectedMonth = schedule.find((month) => month.key >= currentMonth)?.key ?? 'all';
let selectedTrack = 'all';

function renderSchedule() {
  const availableMonths = schedule.filter((month) => (
    selectedTrack === 'all' || month.events.some((event) => event.track === selectedTrack)
  ));
  const choices = [{ key: 'all', short: 'All dates' }, ...availableMonths];
  monthControls.replaceChildren();
  choices.forEach((month) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'schedule-month';
    button.dataset.month = month.key;
    button.textContent = month.short;
    button.setAttribute('aria-pressed', String(selectedMonth === month.key));
    button.addEventListener('click', () => {
      selectedMonth = month.key;
      renderSchedule();
    });
    monthControls.append(button);
  });

  scheduleView.replaceChildren();
  const visible = selectedMonth === 'all'
    ? availableMonths
    : availableMonths.filter((month) => month.key === selectedMonth);
  visible.forEach((month) => {
    const section = document.createElement('section');
    section.className = 'schedule-month-panel';
    const heading = document.createElement('h3');
    heading.textContent = month.label;
    section.append(heading);

    const list = document.createElement('div');
    list.className = 'schedule-list';
    month.events.filter((event) => (
      selectedTrack === 'all' || event.track === selectedTrack
    )).forEach((event) => {
      const row = document.createElement('article');
      row.className = 'schedule-item';
      row.dataset.kind = event.kind;
      row.dataset.track = event.track;

      const date = document.createElement('div');
      date.className = 'schedule-date';
      date.textContent = event.date;
      const body = document.createElement('div');
      body.className = 'schedule-body';
      const focus = document.createElement('h4');
      focus.textContent = event.focus;
      body.append(focus);
      if (event.detail) {
        const detail = document.createElement('p');
        detail.textContent = event.detail;
        body.append(detail);
      }
      const meta = document.createElement('div');
      meta.className = 'schedule-meta';
      const time = document.createElement('strong');
      time.textContent = event.time;
      const group = document.createElement('span');
      group.textContent = event.group;
      meta.append(time, group);
      row.append(date, body, meta);
      list.append(row);
    });
    section.append(list);
    scheduleView.append(section);
  });
}

if (monthControls && scheduleView) {
  trackFilters?.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      selectedTrack = button.dataset.track;
      selectedMonth = 'all';
      trackFilters.querySelectorAll('button').forEach((filter) => {
        filter.setAttribute('aria-pressed', String(filter === button));
      });
      renderSchedule();
    });
  });
  renderSchedule();
}
