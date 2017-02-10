// Action types
const DOWNLOAD_PRODUCT_CLICKED = "DOWNLOAD_PRODUCT_CLICKED";

//Action creators
export const downloadClicked = () => {
  return {
    type: DOWNLOAD_PRODUCT_CLICKED
  }
};

// Reducer
const initialState = {
  downloadClicked:false,
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case "DOWNLOAD_PRODUCT_CLICKED":
      alert("Message from redux reducer: Download button is clicked.");
      return {downloadClicked: true};
    default: return state;
  }
};

export default reducer;