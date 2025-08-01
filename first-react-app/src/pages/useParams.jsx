
import { useParams } from "react-router-dom";

function UseParams() {
  let { productID } = useParams();
  return <div>
    Product - {productID}
  </div>;
}

export default UseParams;
