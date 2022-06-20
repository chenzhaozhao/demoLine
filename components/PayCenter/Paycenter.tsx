import React, { useMemo, useEffect, useState } from "react";
interface Props {
  products: [any];
  deleteAll: Function;
}
interface Product {
  id: number;
  name: string;
  num: number;
  price: string;
}
const PayCenter = (props: Props) => {
  const { products } = props;
  const [total, setTotal] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(props.products);
    const products = props.products;
    const prices = products.map((product) => product.num * product.price);
    let total=0;
    for(let i=0;i<prices.length;i++){
        total+=prices[i]
    }
    setTotal(total)
  }, [props.products]);
  return (
    <div className="center">
      {show ? (
        <div className="paycenter"
        onMouseMove={()=>{setShow(true)}}
        onMouseLeave={()=>setShow(false)}
        >
          <h1>购物车</h1>
          {products.map((product: Product) => {
            return (
              <div key={product.id} className="shoping">
                <span
                  style={{
                    flex: 1,
                    display: "inline-block",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {product.name}
                </span>
                <span>
                  {product.price}*{product.num}
                  <button onClick={() => props.deleteAll(product.id)}>
                    删除
                  </button>
                </span>
              </div>
            );
          })}
          <div className="center">
            <button
              style={{ width: "100%", marginTop: "20px" }}
              onClick={() => {
                window.alert(`总计需要付款${total}`);
              }}
            >
              购买
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "1px solid #ccc",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:"pointer"
          }}
          onMouseEnter={()=>{setShow(true)}}
       
        >
          购物车
        </div>
      )}
      <style jsx>{`
        .paycenter {
          margin: 0 auto;
          width: 20%;
        }
        .shoping {
          display: flex;
          justify-content: space-around;
          margin: 10px;
        }
        .center {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default PayCenter;
