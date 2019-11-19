(async () => {
  // retrieving events list
  const eventsRes = await fetch('events.json')
  const events = await eventsRes.json();

  // sorting it in descending order by date
  events.sort((a, b) => new Date(b.date) - new Date(a.date));

  // split up into array of previous and upcoming events
  const [past, upcoming] = events.reduce((accum, curr) => {
    if (new Date(curr.date) - new Date() < 0) return [[...accum[0], curr], accum[1]];
    return [accum[0], [...accum[1], curr]];
  }, [[], []]);

  const getName = (name, link) => link ? `<a href="${link}">${name}</a>` : name;
  const getEventsHTML = events => events.length 
    ? events.map(event => `
      <tr>
        <td>${event.date}</td>
        <td style="min-width: 200px">${getName(event.name, event.link)}</td>
        <td style="max-width: 300px">${event.desc}</td>
        <td style="max-width: 200px">${event.loc}</td>
      </tr>
    `).join('') 
    : '<tr><td>TBA</td></tr>';
  const getHTML = events => (`
    <tr>
      <td>Date</td>
      <td>Event</td>
      <td>Description</td>
      <td>Location</td>
    </tr>
  ` + getEventsHTML(events))

  const previousTable = document.querySelector('.previous-events')
  const pastHTML = getHTML(past)
  previousTable.innerHTML = pastHTML;

  const upcomingTable = document.querySelector('.upcoming-events')
  const upcomingHTML = getHTML(upcoming)
  upcomingTable.innerHTML = upcomingHTML;
})()