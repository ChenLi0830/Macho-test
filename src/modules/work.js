// Action types
const WORK_IMAGE_MOUSE_ENTER = "WORK_IMAGE_MOUSE_ENTER";
const WORK_IMAGE_MOUSE_LEAVE = "WORK_IMAGE_MOUSE_LEAVE";

//Action creators
export const imageHovered = (number) => {
  return {
    type: WORK_IMAGE_MOUSE_ENTER,
    payload: number
  }
};

export const imageUnhovered = () => {
  return {
    type: WORK_IMAGE_MOUSE_LEAVE
  }
};

// Reducer
const initialState = {
  hovered: -1,
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case "WORK_IMAGE_MOUSE_ENTER":
      console.log(`Redux reducer: Image ${action.payload} is hovered`);
      return {hovered: action.payload};
    case "WORK_IMAGE_MOUSE_LEAVE":
      console.log(`Redux reducer: Image is un-hovered`);
      return initialState;
    default: return state;
  }
};

export default reducer;