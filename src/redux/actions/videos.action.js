import request from "../../service/api";
import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionType";

// llamando datos de videos mas populares
export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 20,
        pageToken: "",
      },
    });
    console.log("==>", data);
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
