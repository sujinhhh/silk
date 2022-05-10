import React from "react";

function AddItem({ handleSubmit, newItem, setNewItem }) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add your travel</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Where would you like to Go?"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        Let's go!
      </button>
    </form>
  );
}

export default AddItem;
