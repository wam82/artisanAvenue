import React, { useState } from 'react'
import db_client from '../supabase'
import './SellForm.css'


// This is the sell form

// See Sell.js for more comments

// This is the component for the form

const SellForm = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        quantity: '',
        value: '',
        image_link: '',
        username: props.user.username
      });

      // Dynamically change the values from inputs
      const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
      };
    

    // Checking if any value is null, otherwise alert and prevent sending
    const handleSubmit = () => {
        if (!formData.title || !formData.description  || !formData.quantity || !formData.value || !formData.image_link) {
            alert("One or more fields are empty.");
            return;
        }
        
        insertArticle()
    }

    // Query to insert into database
    const insertArticle = async () => {
        const { data, error } = await db_client
        .from('articles')
        .insert(formData);

        window.location.reload();
    }

    return (
<form className="sell-form">
      <span className="sell-text">
        <span>Deploy an article</span><br />
      </span>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter the name of your article"
        className="sell-textinput input"
        value={formData.title}
        onChange={handleChange}
      />
      
      <label htmlFor="description">Description</label>
      <input
        id="description"
        placeholder="Enter a description for your article"
        className="sell-input1 input"
        style={{ width: "90%" }}
        value={formData.description}
        onChange={handleChange}
      />

      <div>
        <label htmlFor="quantity">Willing to sell</label>
        <input
          type="number"
          id="quantity"
          placeholder="quantity"
          className="sell-input input fill-the-blank"
          style={{ marginTop: "26px" }}
          value={formData.quantity}
          onChange={handleChange}
        />
        
        <label htmlFor="value">articles at</label>
        <input
          type="number"
          id="value"
          placeholder="price"
          className="sell-input input fill-the-blank"
          value={formData.value}
          onChange={handleChange}
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
        value={formData.image_link}
        onChange={handleChange}
      />

      <button type="button" className="sell-button button" onClick={handleSubmit}>
        Submit
      </button>
    </form>

    )
}



export default SellForm;