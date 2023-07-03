import { Form } from "react-bootstrap";

const ItemSelect = ({ data, onItemClick }) => {
  const handleSelectChange = (event) => {
    const selectedId = parseInt(event.target.value);
    onItemClick(selectedId);
  };

  return (
    <div>
      <Form.Select size="lg" onChange={handleSelectChange}>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.Name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default ItemSelect;
