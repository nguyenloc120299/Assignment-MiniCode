import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
type PropsType={
    title:string,
    image_url:string,
    description:string
}
const CardProduct = (data:  PropsType ) => {
    const {title,description,image_url}= data
  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={image_url}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "contain",
          }}
        />
      }
    >
      <Meta
        title={title}
        description={
          <p
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </p>
        }
      />
    </Card>
  );
};

export default CardProduct