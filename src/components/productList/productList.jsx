import { Product } from "../product/product";
import "./productList.css";
import { profile } from "../../data/manifest";

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Lorem ipsum dolor sit amet</h1>
        <p className="pl-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          accusamus cum amet ea cumque reiciendis modi voluptatem doloribus
          neque perferendis. Est architecto minima accusantium rerum facilis
          incidunt quibusdam iste reiciendis!
        </p>
      </div>
      <div className="pl-list">
        {profile.portfolio.map((item) => (
          <Product key={item.id} img={process.env.PUBLIC_URL + item.image} link={item.gitlink} />
        ))}
      </div>
    </div>
  );
};
