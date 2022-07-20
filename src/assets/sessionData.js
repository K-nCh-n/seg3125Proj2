const session1 = [
  {day: "Monday", type: "Practice", status: "4 spots available", players: ["Brice", "Roy", "John", "Mike", "Chris", "Hassan", "Ali", "Ryan"]},
  {day: "Tuesday", type: "Practice", status: "6 spots available", players: ["Nadia", "Bill", "Francis", "Louis", "Aron", "Eden"]},
  {day: "Wednesday", type: "Practice", status: "12 spots available", players: []},
  {day: "Thursday", type: "Practice", status: "12 spots available", players: []},
  {day: "Friday", type: "Practice", status: "12 spots available", players: []},
  {day: "Saturday", type: "Practice", status: "9 spots available", players: ["Richard", "Nadia", "Aron"]},
  {day: "Sunday", type: "Practice", status: "12 spots available", players: []},
  {"time": "08:00-10:00"}
];
const session2 = [
  {day: "Monday", type: "Practice", status: "7 spots available", players: ["Gia", "Brandon", "Paul", "Andrew", "Stanley"]},
  {day: "Tuesday", type: "Practice", status: "12 spots available", players: []},
  {day: "Wednesday", type: "Practice", status: "10 spots available", players: ["Bobby", "Alan"]},
  {day: "Thursday", type: "Practice", status: "1 spots available", players: ["Leo", "Raphael", "Ernest", "Adil", "James", "Seth", "Doug", "Maxim", "Bobby", "Alan"]},
  {day: "Friday", type: "Practice", status: "7 spots available", players: ["Todd", "Martin", "Kevin", "Bobby", "Alan"]},
  {day: "Saturday", type: "Beginner Match", status: "12 spots available", players: []},
  {day: "Sunday", type: "Beginner Match", status: "10 spots available", players: ["Bobby", "Alan"]},
  {"time": "10:00-12:00"}
];
const session3 = [
  {day: "Monday", type: "Practice", status: "2 spots available", players: ["Jim", "Travis", "Leo", "Raphael", "Ernest", "Adil", "James", "Seth", "Doug", "Maxim"]},
  {day: "Tuesday", type: "Practice", status: "10 spots available", players: ["Bobby", "Alan"]},
  {day: "Wednesday", type: "Practice", status: "9 spots available", players: [ "Seth", "Doug", "Maxim"]},
  {day: "Thursday", type: "Practice", status: "9 spots available", players: [ "Oscar", "Mohamed", "Umar"]},
  {day: "Friday", type: "Practice", status: "12 spots available", players: []},
  {day: "Saturday", type: "Practice", status: "10 spots available", players: ["Bobby", "Alan"]},
  {day: "Sunday", type: "Practice", status: "9 spots available", players: [ "Seth", "Doug", "Maxim"]},
  {"time": "12:00-14:00"}
];
const session4 = [
  {day: "Monday", type: "Practice", status: "9 spot available", players: ["Bobby", "Alan", "Phillip"]},
  {day: "Tuesday", type: "Practice", status: "12 spots available", players: []},
  {day: "Wednesday", type: "Practice", status: "12 spots available", players: []},
  {day: "Thursday", type: "Practice", status: "12 spots available", players: []},
  {day: "Friday", type: "Practice", status: "10 spots available", players: ["Raymond", "Stanley"]},
  {day: "Saturday", type: "Intermediate Match", status: "12 spots available", players: []},
  {day: "Sunday", type: "Intermediate Match", status: "12 spots available", players: []},
  {"time": "14:00-16:00"}
];
const session5 = [
  {day: "Monday", type: "Practice", status: "12 spots available", players: []},
  {day: "Tuesday", type: "Practice", status: "4 spots available", players: ["Marcel", "Simon", "Robin", "Julia", "Jim", "Leo", "Raphael", "Ernest"]},
  {day: "Wednesday", type: "Practice", status: "10 spots available", players: ["Gia", "Stanley"]},
  {day: "Thursday", type: "Practice", status: "10 spots available", players: ["Gia", "Stanley"]},
  {day: "Friday", type: "Practice", status: "12 spots available", players: []},
  {day: "Saturday", type: "Advanced Match", status: "10 spots available", players: ["Gia", "Stanley"]},
  {day: "Sunday", type: "Advanced Match", status: "10 spots available", players: ["Gia", "Stanley"]},
  {"time": "16:00-18:00"}
];
const session6 = [
  {day: "Monday", type: "Practice", status: "10 spots available", players: ["Marcel", "Simon"]},
  {day: "Tuesday", type: "Find A Partner", status: "10 spots available", players: ["Ernest", "Adil"]},
  {day: "Wednesday", type: "Practice", status: "8 spots available", players: ["Roy", "John", "Mike", "Chris"]},
  {day: "Thursday", type: "Find A Partner", status: "8 spots available", players: ["Roy", "John", "Mike", "Chris"]},
  {day: "Friday", type: "Practice", status: "10 spots available", players: ["Jeremy", "Erika"]},
  {day: "Saturday", type: "Closed", status: "0 spots available", players: []},
  {day: "Sunday", type: "Closed", status: "0 spots available", players: []},
  {"time": "18:00-20:00"}
];

const sessions = [session1, session2, session3, session4, session5, session6];

export default sessions;