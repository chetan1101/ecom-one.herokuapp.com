import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import { addNewProduct } from "../Store/Actions/productActions";

function CreateProduct(props) {
  const productSave = useSelector((state) => state.productSave);
  const { success: successSave, loading: loadingSave, error: errorSave } = productSave;


  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  
  const dispatch = useDispatch();

  useEffect(() => {
  
  }, []);

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewProduct({name,image,price,category,brand,qty,description}));
    props.history.push("/dashbord")
  };
  return ( loadingSave ? <Loading/> :
    <div className="form_container">
    <h4 className="mb-4 bg-light p-2">Add Product</h4>
    {successSave && <div>success</div>}
    {errorSave && <div>error...</div>}
    <Form onSubmit={(e) => sumbitHandler(e)}>
      <Form.Group>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Name"
          name="name"
          onChange={(e)=>setName(e.target.value)}
        />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Image"
          name="image"
          onChange={(e)=>setImage(e.target.value)}
        />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Price"
          name="price"
          onChange={(e)=>setPrice(e.target.value)}
        />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product category"
          name="category"
          onChange={(e)=>setCategory(e.target.value)}
        />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Brand"
          name="brand"
          onChange={(e)=>setBrand(e.target.value)}
        />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Qty</Form.Label>
        <Form.Control
          type="number"
          placeholder="Product qty"
          name="qty"
          onChange={(e)=>setQty(e.target.value)}
        />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          as="textarea" 
          rows={4}
          placeholder="Product Description"
          name="description"
          onChange={(e)=>setDescription(e.target.value)}
        />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Add
      </Button>
      <Button
            onClick={()=>props.history.push('/dashbord')}
            variant="outline-info"
            type="button"
            block
          >
            Cancel
          </Button>
    </Form>
  </div>
  )
 
}

export default CreateProduct;
