import { useState } from 'react'

import './SellForm.css'
import './ArticleCard.css'


// The article card component is a card with the shopping information of 
// each article that is available in the store, with name, value, available
// quantity, an image, and inputs to buy each article.


// Weirdly enough, <hr> does not work
// Here's an alternative
const CustomHR = () => {
    return (
    <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }}>
        <div style={{
            backgroundColor: "black",
            width: "95%",
            height: "1px"
        }}/>
    </div>
);
}

const ArticleCard = (props) => {

    // From parent component
    const article = props.content;
    const [quantity, setQuantity] = useState(null);


    // Basic response when buying, needs a quantity though
    const handleSubmit = () => {
        if (quantity)
        {
            alert("Thank you for your purchase!\n\nCheck your emails to proceed for payment;\nyou may be put in contact with the seller.");
            window.location.reload();
        }
        else {
            alert("You must enter a quantity.");
        }
    }

    return (
<form className="sell-form article-card-form" style={{height: "100%"}}>
      <div className="sell-text" style={{display: "flex", justifyContent: "space-between", width: "95%"}}>
        <div>
            <span>{article.title}</span><span style={{marginLeft: "5px",fontSize: "20px"}}> by {article.username}</span><br />
        </div>
        <div>
            <span style={{fontSize: "20px"}}>${article.value}/unit</span>
        </div>
      </div>
      <CustomHR />
      <div style={{width: "100%"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "var(--dl-space-space-unit)"}}>
            <div style={{display:"flex", flexDirection: "row", width: "50%"}}>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        readOnly="true"
                        value={article.description}
                        className="sell-input1 input"
                        style={{ width: "100%", height: "50%", resize: "none", pointerEvents: "none", borderStyle: "dotted"}}
                        />
                </div>
            </div>
            <div style={{marginRight: "10%"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={article.image_link} style={{borderRadius: "15px", width: "200px", boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 8px", border: "1px solid rgba(0,0,0,0.7)"}}/>
                </div>
            </div>
        </div>
      <div style={{ marginTop: "0px" }}>
      <label htmlFor="quantity" >{"["} Availability of {article.quantity} article{article.quantity > 1 ? "s": ""} {"]"}</label>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "15px"}}>
            <div style={{}}>
                <label htmlFor="quantity">Would like to acquire</label>
                <input
                    type="number"
                    id="quantity"
                    placeholder="quantity"
                    className="sell-input input fill-the-blank"
                    style={{ marginTop: "var(--dl-space-space-unit)" }}
                    value={quantity}  // Bind input value to state variable
                    onChange={(e) => setQuantity(e.target.value)}  // Handle input change
                />
            </div>
            <button type="button" className="sell-button button" onClick={handleSubmit}>
                Buy
            </button>
        </div>
      </div>
</form>
    )
}

export default ArticleCard;