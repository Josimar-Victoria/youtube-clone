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
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,

      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
