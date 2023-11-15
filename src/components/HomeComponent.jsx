import { useState } from "react";

const HomeComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };

  const addInvoiceItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      { item: "", quantity: 0, rate: 0, amount: 0 },
    ]);
  };
  const deleteInvoiceItem = (index) => {
    const updatedItems = [...invoiceItems];
    updatedItems.splice(index, 1);
    setInvoiceItems(updatedItems);
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index][field] = value;
    setInvoiceItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return invoiceItems.reduce((total, item) => total + item.amount, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountedTotal = subtotal - discount;
    return discountedTotal >= 0 ? discountedTotal : 0;
  };

  console.log(invoiceItems);

  const images = [
    { id: 1, src: "image1.jpg" },
    { id: 2, src: "image2.jpg" },
    { id: 3, src: "image3.jpg" },
    { id: 4, src: "image4.jpg" },
    { id: 5, src: "image1.jpg" },
    { id: 6, src: "image2.jpg" },
    { id: 7, src: "image3.jpg" },
    { id: 8, src: "image4.jpg" },
    { id: 9, src: "image4.jpg" },
  ];
  return (
    <section className="home_component container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="inner">
            <div className="row">
              <div className="col-md-4">
                <div className="form_group">
                  <label htmlFor="invoice_no">Invoice no:</label>
                  <input id="invoice_no" type="text" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label htmlFor="invoice_no">Invoice date:</label>
                  <input id="invoice_no" type="text" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label htmlFor="invoice_no">Delivery date:</label>
                  <input id="invoice_no" type="text" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="form_group">
                  <label htmlFor="invoice_no">Customer name:</label>
                  <input id="invoice_no" type="text" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label htmlFor="invoice_no">Address:</label>
                  <input id="invoice_no" type="text" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form_group">
                  <label htmlFor="invoice_no">Invoice writer name:</label>
                  <input id="invoice_no" type="text" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <div className="form_group">
                  <label htmlFor="invoice_no">Note:</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
            <br />
            <h4>Invoice items:</h4>
            {invoiceItems.map((item, index) => (
              <div key={index}>
                <label htmlFor={`item${index}`}>Item:</label>
                <input
                  type="text"
                  id={`item${index}`}
                  value={item.item}
                  onChange={(e) =>
                    handleInputChange(index, "item", e.target.value)
                  }
                />

                <label htmlFor={`quantity${index}`}>Quantity:</label>
                <input
                  type="text"
                  id={`quantity${index}`}
                  value={item.quantity}
                  onChange={(e) =>
                    handleInputChange(index, "quantity", e.target.value)
                  }
                />

                <label htmlFor={`rate${index}`}>Rate:</label>
                <input
                  type="text"
                  id={`rate${index}`}
                  value={item.rate}
                  onChange={(e) =>
                    handleInputChange(index, "rate", e.target.value)
                  }
                />

                <label htmlFor={`amount${index}`}>Amount:</label>
                <input
                  type="text"
                  id={`amount${index}`}
                  value={item.amount}
                  onChange={(e) =>
                    handleInputChange(index, "amount", e.target.value)
                  }
                />

                <button onClick={() => deleteInvoiceItem(index)}>
                  Delete Item
                </button>

                <hr />
              </div>
            ))}

            <button onClick={addInvoiceItem}>Add Invoice Item</button>

            <div>
              <label htmlFor="discount">Discount:</label>
              <input
                type="text"
                id="discount"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
              />
            </div>

            <div>
              <p>Subtotal: ${calculateSubtotal()}</p>
              <p>Discount: ${discount}</p>
              <p>Total: ${calculateTotal()}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="template">
            <h3>Choose a template</h3>
            <div className="img_tem">
              {images.map((item, index) => (
                <div key={index}>
                  <img
                    src="/assets/img/1.jpg"
                    alt=""
                    className="img-fluid"
                    onClick={() => handleImageClick(item.id)}
                    style={{
                      border:
                        selectedImage === item.id ? "2px solid red" : "none",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="submit_file">
              <button>
                <span>Button</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
