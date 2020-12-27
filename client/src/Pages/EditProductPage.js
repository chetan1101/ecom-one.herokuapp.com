import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getProduct, editProduct } from "../Store/Actions/productActions";

class EditProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: false,
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      product: nextProps.view.product,
      loading: nextProps.view.loading,
      error: nextProps.view.error,
    });
  }

  handleChange(event, inputName) {
    var inputValue = event.target.value;
    this.setState({
      product: {
        ...this.state.product,
        [inputName]: inputValue,
      },
    });
  }

  sumbitHandler = (e) => {
    e.preventDefault();
    this.props.editProduct(this.props.match.params.id, this.state.product);
    this.props.history.push("/dashbord");
  };

  render() {
    console.log(this.props);

    const { product, loading, error } = this.state;
    return loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>{error}</div>
    ) : (
      <div className="form_container">
        <h4 className="mb-4 bg-light p-2">Edit Product</h4>

        <Form onSubmit={(e) => this.sumbitHandler(e)}>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              name="name"
              onChange={(event) => this.handleChange(event, "name")}
              value={product.name}
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
              onChange={(event) => this.handleChange(event, "image")}
              value={product.image}
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
              onChange={(event) => this.handleChange(event, "price")}
              value={product.price}
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
              onChange={(event) => this.handleChange(event, "category")}
              value={product.category}
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
              onChange={(event) => this.handleChange(event, "brand")}
              value={product.brand}
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
              onChange={(event) => this.handleChange(event, "qty")}
              value={product.qty}
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
              onChange={(event) => this.handleChange(event, "description")}
              value={product.description}
            />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Update
          </Button>
          <Button
            onClick={()=>this.props.history.push('/dashbord')}
            variant="outline-info"
            type="button"
            block
          >
            Cancel
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  edit: state.productEdit,
  view: state.productDetails,
});

const mapDispatchToProps = {
  editProduct,
  getProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProductPage);
