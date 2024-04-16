import './SellForm.css'


const SellForm = () => {


    return (
<form className="sell-form">
  <span className="sell-text">
    <span>Deploy an article</span><br /></span>

    <label htmlFor="title">Title</label>
    <input
    type="text"
    id="title"
    placeholder="Enter the name of your article"
    className="sell-textinput input"
    />
    <label htmlFor="description">Description</label>
    <input
      type="textarea"
      id="description"
      placeholder="Enter a description for your article"
      className="sell-input1 input"
      style={{width: "90%"}}
    />
        <div>
        <label htmlFor="quantity">Willing to sell</label>
        <input
        type="number"
        id="quantity"
        placeholder="quantity"
        className="sell-input input fill-the-blank"
        style={{marginTop: "30px"}}
        />
        <label htmlFor="value">articles at</label>
        <input
        type="number"
        id="value"
        placeholder="price"
        className="sell-input input fill-the-blank"
        />$
        <label htmlFor="quantity">each</label>
    </div>


    <label htmlFor="image_link">Image</label>
    <input
      type="text"
      id="image_link"
      placeholder="Enter a link as your image"
      className="sell-textinput input"

    />    

  <button type="button" className="sell-button button">
    Submit
  </button>
</form>

    )
}



export default SellForm;