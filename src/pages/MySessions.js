import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const MySessions = () => {
  const sessions = [
    {
      id: "session1",
      name: "Practice 08:00 - 10:00",
      date: "Wednesday, July 27",
    },
    {
      id: "session2",
      name: "Intermediate Match 14:00 - 16:00",
      date: "Saturday, July 30",
    },
    {
      id: "session3",
      name: "Intermediate Match 14:00 - 16:00",
      date: "Sunday, July 31",
    }
  ];

  const CancelSession = (id) => {
    console.log(id);
    const sessionToDelete = document.getElementById("id");
    sessionToDelete.classList.toggle("d-none");
  }

  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2">My Sessions</h2>
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Session</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        {sessions.map((session) => (
          <tbody id={session.id} key={session.id}>
            <tr>
              <td>{session.name}</td>
              <td>{session.date}</td>
              <td><Button onClick={() => CancelSession(session.id)}>Cancel session</Button></td>
            </tr>
          </tbody>
        ))}
        </Table>
    </Container>
  );
}
 
export default MySessions;