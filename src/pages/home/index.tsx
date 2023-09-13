import { Row, Input, Card, Col } from "antd";
import { useSwrInfiniteProducts } from "hooks/swr/products";
import useDebounce from "hooks/useDebounce";
import { useState } from "react";
import { Container } from "styles/Layout";

const { Search } = Input;
const Home = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const textSearchDebounce = useDebounce(textSearch, 500);
  useSwrInfiniteProducts({
    search: textSearchDebounce,
  });
  return (
    <Container>
      <Row style={{ marginBottom: "1rem" }}>
        <Search
          placeholder="Tìm kiêm tên sản phẩm"
          enterButton="Search"
          size="large"
        />
      </Row>
      <Row gutter={[16, 16]} id="scrollableDiv">
        <Col span={6}>
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
