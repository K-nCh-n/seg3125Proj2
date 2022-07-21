import { Container, Row , Col, Image } from "react-bootstrap";

const Guides = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Guides</h2>
      <h1 className="fw-bold">Work in Progress</h1>
      <ol>
        <li>
          <a href="#item1">Basic Rules</a>
          <ol>
            <li>
              <a href="#item1.1">Difference between Ping Pong and Table Tennis</a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#item2">Spin</a>
          <ol>
            <li>
              <a href="#item2.1">Topspin</a>
            </li>
            <li>
              <a href="#item2.2">Backspin</a>
            </li>
            <li>
              <a href="#item2.3">Sidespin</a>
            </li>
          </ol>
        </li>
      </ol>
      
      <h3 id="item1" className="my-3">Basic Rules</h3>
      <Row>
        <Col md="4" className="my-4">
          <Image src="https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-1.2.1" fluid />
        </Col>
        <Col md="8" className="my-4">
          <p>
            Table Tennis(or Ping Pong as explained below) is a sport played on a rectangular table (9' long by 5' wide and 2.5' high) with a net. The objective of the game is to hit the net with the ball so that the ball bounces off the net and returns to the player who hit it. The player who returns the ball to the net is the winner.
          </p>
          <p>
            Similar to tennis, each Match has multiple games. Each game is played until a player reaches 11 points (unless both players tie at 10 points, called a deuce). Matches have an odd number of games (3, 5, 7).
          </p>
          <p>
            Players take turn to serve, alternating every two serves (every serve during deuces). For a serve, the ball must bounce once on the servers side and once on the opposite side. For any other shots during a rally, the ball must only bounce on the opposite side of the table.
          </p>  

        </Col>
        <h4 id="item1.1">Difference Between Ping Pong and Table Tennis</h4>
        <p>When the game started in the 1890s, various patented or trademarked names were being used by different manufacturers.</p>
        <p>So when the English sports company John Jaques &amp; Son became the market leader in the 1920s with their version of the game called "Ping Pong", they decided that they would only allow their trademarked name to be used if their brand of equipment was specified exclusively.</p>
        <p>As more and more ping pong tournaments were now being organised, they also threatened legal action against anybody who used their proprietary trademarked name of Ping Pong without specifying the use of their equipment.</p>
        <p>Therefore an alternative name was required for this burgeoning international sport and the name Table Tennis was chosen. So, since that time, and particularly since the establishment of the International Table Tennis Federation (ITTF) in 1926, the modern game has been known as table tennis.</p>
        <p className="alert alert-secondary m-3">Note: We have decided Ping Pong Lovers as the name for the club even though we play Table Tennis because many people still call the sport Ping Pong and Table Tennis Lovers isn't as catchy 😂</p>
      </Row>

      <h3 id="item2" className="my-3">Spin</h3>
      <p className="h4">
        There are three main types of spin that the ball can have, topspin, backspin and sidespin. Each one of them willl be explained below.
      </p>
      <div className="my-3">
        <h4 id="item2.1">Topspin</h4>
        <Row>
          <Col md="2" className="my-4">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Topspin.png/220px-Topspin.png" fluid />
          </Col>
          <Col md="10" className="my-4">
          <p>
            Topspin or overspin is a property of a ball that rotates forwards as it is moving. Topspin on a ball propelled through the air imparts a downward force that causes the ball to drop, due to its interaction with the air.
            Topspin will cause the ball to bounce up when the player tries to return it. Therefore, the player who returns the ball should close th racket angle when returning a topspin ball.
          </p>
          </Col>
        </Row>
      </div>
      <div className="my-3">
        <h4 id="item2.2">Backspin</h4>
        <Row>
          <Col md="2" className="my-4">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/6/62/Backspin.png" fluid />
          </Col>
          <Col md="10" className="my-4">
          <p>
          Backspin or underspin refers to the reverse rotation of a ball, in relation to the ball's trajectory, that is imparted on the ball by a slice or chop shot. Backspin generates an upward force that lifts the ball causing a "levitating" effect on the ball.
          When returning a backpin shot, the ball will tend to shoot off downwards, towards the net, hence the racket angle should be opened.
          </p>
          </Col>
        </Row>
      </div><div className="my-3">
        <h4 id="item2.3">Sidespin</h4>
        <Row>
          <Col md="2" className="my-4">
            <Image src="https://www.allabouttabletennis.com/images/spin-effect-diagram-sidespin-right.gif" fluid />
          </Col>
          <Col md="10" className="my-4">
          <p>
            Sidespin causing the ball to shoot off to the side. This may cause a player to miss the table completely.
            Sidespin is a bit more tricky to return than topspin or backspin.
          </p>
          </Col>
        </Row>
      </div>

      <h1 className="fw-bold">Work in Progress</h1>

      <p className="mt-5">Sources:</p>
      <ul>
        <li>
          <a href="https://www.allabouttabletennis.com/">All About Table Tennis</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Topspin">Wikipedia Topspin page</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Backspin">Wikipedia Backspin page</a>
        </li>
      </ul>
    </Container>
  );
}
 
export default Guides;