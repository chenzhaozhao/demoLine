import React from "react";
interface Props {
  id: number;
  name: string;
  price: string;
  add: Function;
}
const Product = (props: Props) => {
  //   加入或移除购物车

  return (
    <div className="product">
      <div className="img"></div>
      <div>
        <span
          style={{
            width: "150px",
            display: "inline-block",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {props.name}
        </span>
        <span>
          {props.price}&nbsp;&nbsp;&nbsp;
          <button
            onClick={() =>
              props.add({
                id: props.id,
                price: props.price,
                name: props.name,
                num: 1,
              })
            }
            style={{ cursor: "pointer" }}
          >
            加入购物车
          </button>
        </span>
      </div>
      <style jsx>{`
        .product {
          border: 1px solid #ccc;
          margin: 8px;
          padding: 8px;
        }
        .img {
          width: 200px;
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default Product;
