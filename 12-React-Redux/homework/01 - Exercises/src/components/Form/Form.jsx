import React, { useState } from "react";
import { connect } from "react-redux";
import Caja from "../../assets/caja.png";
import "./form.css";
import { addProduct } from "../../redux/actions/actions";


function Form({ addProduct}) {
  const [product, setProduct] = useState({ name: "", price: "", id: "" });

  function handleInputChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(){
   addProduct({...product, id : Date.now()})
  }

  return (
    <div className="formBg">
      <div className="inputBox">
        <label>Nombre: </label>
        <input name="name" onChange={handleInputChange} value={product.name} />
      </div>
      <div className="inputBox">
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          onChange={handleInputChange}
          value={product.price}
        />
      </div>
      <button onClick={handleSubmit} 
      className="formBtn">¡ADD!</button>
      <img src={Caja} alt="" className="logo" />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
return{
  addProduct:(product)=> dispatch(addProduct(product))
}
}

export default connect(null, mapDispatchToProps)(Form);
