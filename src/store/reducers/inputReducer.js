const initialState = {
  latLng: {
    lat: 49.2754041,
    lng: -123.1248643,
  },
}

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_ADDRESS':
      return { ...state, latLng: action.latLng }
    default:
      return state
  }
}
