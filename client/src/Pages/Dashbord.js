import React, { useEffect } from "react";
import { Button, ButtonGroup, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "../Components/Loading";
import {  delProduct, getProductList } from "../Store/Actions/productActions";

function Dashbord() {
    const productList = useSelector((state) => state.productList);
    const del_Product = useSelector((state) => state.delProduct);
    const {delSuccess} = del_Product;
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      dispatch(getProductList());
    }, []);

    const deleteProduct = (productId) => {
      const del_confirm = window.confirm("Are your sure want to delete item?");
      if(del_confirm){
        dispatch(delProduct(productId));
        if(delSuccess){
          dispatch(getProductList());
        }
      }
    }

  return ( loading ? <Loading/> : error ? <div>{error}</div> :
    <div>
    <Button className="m-3" variant="primary" size="lg" onClick={()=>history.push("/create-product")}>
      Add New Product
    </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {products.map((item)=>
            
            <tr>
            <td width="90"><Image width="70" src={item.image}></Image></td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>Rs. {item.price}</td>
            <td>
              <ButtonGroup size="sm">
                <Button onClick={()=>history.push(`/view-item/${item._id}/${item.name}`)}>View</Button>
                <Button onClick={()=>history.push(`/edit-product/${item._id}`)}>Edit</Button>
                <Button onClick={()=>deleteProduct(item._id)}>Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  );
}

export default Dashbord;
