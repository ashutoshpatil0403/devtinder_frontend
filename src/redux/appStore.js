import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/UserSlice";
import feedReducer from "../redux/slices/FeedSlice";
import connectionReducer from "../redux/slices/ConnectionSlice";
import requestReducer from "../redux/slices/RequestSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer,
    request: requestReducer,
  },
});

export default appStore;
