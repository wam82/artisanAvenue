import './SellForm.css'
import './ArticleCard.css'

const ArticleCard = (props) => {

    const article = props.content;


    return (
<form className="sell-form article-card-form">
      <span className="sell-text">
        <span>{article.title}</span><br />
      </span>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter the name of your article"
        className="sell-textinput input"
      />
      
      <label htmlFor="description">Description</label>
      <input
        id="description"
        placeholder="Enter a description for your article"
        className="sell-input1 input"
        style={{ width: "90%" }}
      />

      <div>
        <label htmlFor="quantity">Willing to sell</label>
        <input
          type="number"
          id="quantity"
          placeholder="quantity"
          className="sell-input input fill-the-blank"
          style={{ marginTop: "26px" }}
        />
        
        <label htmlFor="value">articles at</label>
        <input
          type="number"
          id="value"
          placeholder="price"
          className="sell-input input fill-the-blank"
        />
        $

        <label htmlFor="quantity">each</label>
      </div>

      <label htmlFor="image_link">Image</label>
      <input
        type="text"
        id="image_link"
        placeholder="Enter a link as your image"
        className="sell-textinput input"
      />

      <button type="button" className="sell-button button" onClick={() => alert("Thank you for your purchase!\n\nCheck your emails to proceed for payment;\nyou may be put in contact with the seller.")}>
        Buy
      </button>
    </form>
    )
}

export default ArticleCard;