import { Container, Row , Col, Image } from "react-bootstrap";

const Guides = () => {
  return (
    <Container fluid="xxl" className="my-4 py-4 bg-light" id="background-container">
      <h2 className="fw-bold pt-2 text-center">Guides</h2>
      <ol>
        <li>
          <a href="#item1">Title 1</a>
          <ol>
            <li>
              <a href="#item1.1">Title 1.1</a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#item2">Title 2</a>
        </li>
        <li>
          <a href="#item3">Title 3</a>
          <ol>
            <li>
              <a href="#item3.1">Title 3.1</a>
            </li>
            <li>
              <a href="#item3.2">Title 3.2</a>
            </li>
          </ol>
        </li>
      </ol>
      
      <h3 id="item1" className="my-3">Title1</h3>
      <Row>
        <Col md="6" className="my-4">
          <Image src="https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-1.2.1" fluid />
        </Col>
        <Col md="6" className="my-4">
          <p className="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequatur accusantium. Sed odio dolorum asperiores ab quisquam, consequatur inventore quae eaque optio temporibus! Deleniti id a voluptatum iure reiciendis veritatis. Cum optio maxime ex sint possimus eos tenetur laborum sequi corrupti, exercitationem sapiente distinctio ab sed autem quod repudiandae quaerat.
          </p>
        </Col>
        <h4 id="item1.1">Title1.1</h4>
        <p className="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequatur accusantium. Sed odio dolorum asperiores ab quisquam, consequatur inventore quae eaque optio temporibus! Deleniti id a voluptatum iure reiciendis veritatis. Cum optio maxime ex sint possimus eos tenetur laborum sequi corrupti, exercitationem sapiente distinctio ab sed autem quod repudiandae quaerat.
        </p>
        <div className="text-center my-3">
          <iframe width="898" height="505" src="https://www.youtube.com/embed/msn0zfdEk58"
          title="Top Table Tennis Points of 2021 | Best of 2021" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen className="text-center" />
        </div>
      </Row>

      <h3 id="item2" className="my-3">Title2</h3>
      <Row>
        <Col md="6" className="my-4">
          <p className="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequatur accusantium. Sed odio dolorum asperiores ab quisquam, consequatur inventore quae eaque optio temporibus! Deleniti id a voluptatum iure reiciendis veritatis. Cum optio maxime ex sint possimus eos tenetur laborum sequi corrupti, exercitationem sapiente distinctio ab sed autem quod repudiandae quaerat.
          </p>
        </Col>
        <Col md="6" className="my-4">
          <Image src="https://images.unsplash.com/photo-1593442808948-b1df0a8f8047?ixlib=rb-1.2.1" fluid />
        </Col>
      </Row>
      <h3 id="item3" className="my-3">Title3</h3>
      <Row>
        <Col md="6" className="my-4">
          <Image src="https://images.unsplash.com/photo-1619385859058-7bfe5029e615?ixlib=rb-1.2.1" fluid />
        </Col>
        <Col md="6" className="my-4">
          <p className="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequatur accusantium. Sed odio dolorum asperiores ab quisquam, consequatur inventore quae eaque optio temporibus! Deleniti id a voluptatum iure reiciendis veritatis. Cum optio maxime ex sint possimus eos tenetur laborum sequi corrupti, exercitationem sapiente distinctio ab sed autem quod repudiandae quaerat.
          </p>
        </Col>
        <h4 id="item3.1" className="my-3">Title3.1</h4>
        <p className="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam est quis voluptatum. Expedita modi alias, temporibus ab quas eveniet minus quibusdam vitae tempora iusto repellat, autem dicta recusandae possimus impedit est numquam dolorum. Debitis error, tempora quaerat quas dolorum fugit delectus veritatis illo? Distinctio, provident animi excepturi nisi ullam neque sint, dolorum laudantium non id corporis eius officiis deleniti autem molestiae corrupti blanditiis libero? Nulla, blanditiis quas nam assumenda incidunt non corporis ipsum est. Voluptatibus sint dolores eius obcaecati rem tempore quos totam, accusantium similique esse id ipsam? Harum vitae in tempora blanditiis, quia reprehenderit maiores vel veniam a?
        </p>
        <h4 id="item3.2" className="my-3">Title3.2</h4>
        <p className="h5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae eum atque dicta et suscipit molestias placeat, ullam laboriosam temporibus, animi pariatur fugit hic, harum unde labore sunt distinctio maxime minus eaque at reiciendis id aliquam quae. Est assumenda, sint odit saepe consequatur aperiam debitis minima, nisi fugiat eum tempore blanditiis. Error laborum quod accusantium labore! Fuga, necessitatibus temporibus facere voluptas, veniam quisquam autem magnam, aliquam odio minus nobis saepe quae recusandae quo nemo sed porro at tempore explicabo ut hic dignissimos placeat modi. Nam ut et natus quo sint quaerat nesciunt, quis rerum porro distinctio autem numquam nihil ullam.
        </p>
        <div className="text-center my-3">
          <iframe width="898" height="505" src="https://www.youtube.com/embed/uiAS444OpRM"
           title="Wang Hao vs. Ma Lin - Table Tennis Condensed Gold Medal Match - Beijing 2008" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen className="text-center" />
        </div>
      </Row>
    </Container>
  );
}
 
export default Guides;