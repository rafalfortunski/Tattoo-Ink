import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../actions";

const initialState = {
  tattooers: [
    {
      id: 1,
      fullName: "Daria Kostinya",
      category: "Characters, Abstract",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, ad. Voluptates nisi quidem, tenetur facere consequuntur placeat doloremque ex accusantium voluptatum expedita optio aspernatur numquam veritatis laudantium molestias, obcaecati aperiam.",
      avatar:
        "https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      rating: 4.5,
      reviews: 50,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {
          token: action.payload.data.token,
          fullName: action.payload.data.user.fullName,
          email: action.payload.data.user.email,
          avatar: action.payload.data.user.avatar,
        },
      };

    case AUTH_FAILURE:
      return state;

    case REGISTER_SUCCESS:
      return state;

    case REGISTER_FAILURE:
      return state;

    case LOGOUT_SUCCESS:
      return {
        initialState,
      };

    case LOGOUT_FAILURE:
      return state;

    default:
      return state;
  }
};

export default rootReducer;
