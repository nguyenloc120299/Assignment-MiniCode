import { Row, Input, Col, Spin } from "antd";
import CardProduct from "components/element/CardProduct";
import LoadingScreen from "components/element/LoadingScreen";
import { useSwrInfiniteProducts } from "hooks/swr/products";
import useDebounce from "hooks/useDebounce";
import { ChangeEvent, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from "styles/Layout";
import { ProductType } from "types/product.type";

const { Search } = Input;
const Home = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const textSearchDebounce = useDebounce(textSearch, 500);
  const {
    setSize: setSizeProducts,
    size: sizeProducts,
    dataShowing: listProducts,
    isLoadingInitialData,
    isLoadingMore
  } = useSwrInfiniteProducts({
    search: textSearchDebounce,
  });
  const handleOnchangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };
  return (
    <Container>
      <Row style={{ marginBottom: "1rem" }}>
        <Search
          placeholder="Tìm kiếm sản phẩm"
          enterButton="Tìm kiếm"
          size="large"
          value={textSearch}
          onChange={handleOnchangeSearch}
          loading={isLoadingInitialData}
        />
      </Row>

      <div>
        <InfiniteScroll
          next={() => setSizeProducts(sizeProducts + 1)}
          hasMore
          loader={<LoadingScreen loading={isLoadingMore} />}
          dataLength={listProducts?.length}
          scrollableTarget="scrollableDiv"
          style={{ width: "100%", overflow: "unset" }}
        >
          <Row gutter={[16, 16]}>
            {listProducts.map((product: ProductType, index: number) => (
              <Col span={6} key={index}>
                <CardProduct
                  description={product.description}
                  image_url={product.images[0]}
                  title={product.title}
                  key={index}
                />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </div>
    </Container>
  );
};

export default Home;
