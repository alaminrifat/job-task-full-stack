import { Card } from "react-bootstrap";
import { Data } from "./Data";

const ProductCard = ({ id }) => {
  const selectedItem = Data.find((item) => item.id === id);
  return (
    <div className="d-flex justify-content-center ">
      <Card className="text-center  p-4 rounded-3" style={{ width: "30rem" }}>
        <h2 className="py-3">{selectedItem?.Name}</h2>
        <h4>Price: Rs. {selectedItem?.Price} </h4>
        <h4 className="py-3">Item Id: {selectedItem?.id}</h4>
      </Card>
    </div>
  );
};

export default ProductCard;
