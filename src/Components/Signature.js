import { useEffect, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import "../Components/Signature.css";
import editSign from "../Assets/editSign.png";

const Signature = () => {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();
  const [state, setState] = useState({
    Name: "",
    Email: "",
    Date: "",
    isSignatureOpen: false,
    isSignatureFieldOpen: false,
  });

  //   useEffect(() => {}, []);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleClear = () => {
    sign.clear();
    setUrl("");
    setState({ ...state, isSignatureOpen: false });
  };
  const handleSave = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    setState({ ...state, isSignatureOpen: false });
  };

  const handleSubmit = async () => {};

  return (
    <div className="Form">
      <h2>Form</h2>
      <div className="Form_items d-flex m-3">
        <div className="items">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={state.Name}
            onChange={handleFilterChange}
          />
        </div>
        <div className="items">
          <label>Email</label>
          <input
            type="text"
            name="Email"
            value={state.Email}
            onChange={handleFilterChange}
          />
        </div>
        <div className="items">
          <label>Date</label>
          <input
            type="date"
            name="Date"
            value={state.Date}
            onChange={handleFilterChange}
          />
        </div>
        <div className="signature">
          {state.isSignatureOpen && (
            <div style={{ border: "1px solid black", width: 500, height: 200 }}>
              <SignatureCanvas
                ref={(data) => setSign(data)}
                penColor="black"
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: "signCanvas",
                }}
              />
              <button onClick={handleClear}>Clear</button>
              <button onClick={handleSave}>Save</button>
            </div>
          )}

          {!state.isSignatureOpen && (
            <div
              style={{
                border: "1px solid black",
                width: 550,
                height: 250,
                marginTop: "100px",
              }}>
              <div
                onClick={() => {
                  setState({ ...state, isSignatureOpen: true });
                }}>
                <img src={editSign} alt="" height="20px" width="20px" />
              </div>
              <img src={url} alt="" />
            </div>
          )}
        </div>

        <button onClick={handleSubmit} className="submitButton">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signature;
