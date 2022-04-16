import axios from 'axios';
import { addHeroSlides } from "./slices/heroSlice";
import { addOffersHeadlines } from "./slices/offersHeadlineSlice";
import { addDeals } from "./slices/dealSlice";
import { addCollections } from "./slices/collectionSlice";
import { addBanners } from "./slices/bannerSlice";

const baseurl = process.env.REACT_APP_API_URL;

export const fetchHeroSlides = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'hero');
    dispatch(addHeroSlides(res.data));
  } catch (err) {}
};

export const fetchOffersheadlines = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'offers-headlines');
    dispatch(addOffersHeadlines(res.data));
  } catch (err) {}
};

export const fetchDeals = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'deals');
    dispatch(addDeals(res.data));
  } catch (err) {}
};

export const fetchCollections = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'collections');
    dispatch(addCollections(res.data));
  } catch (err) {}
};

export const fetchBanners = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'banners');
    dispatch(addBanners(res.data));
  } catch (err) {}
};