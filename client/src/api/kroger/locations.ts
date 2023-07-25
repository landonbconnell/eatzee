import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

interface LocationParams {
  'filter.zipCode.near'?: string;
  'filter.latLong.near'?: string;
  'filter.lat.near'?: string;
  'filter.lon.near'?: string;
  'filter.radiusInMiles'?: number;
  'filter.limit'?: number;
  'filter.chain'?: string;
  'filter.department'?: string;
  'filter.locationId'?: string;
}

export const getStoreLocations = async (params: LocationParams) => {
  const data = await axios.post(
    `${REACT_APP_API_URL}/api/kroger/locations/getLocations`,
    params
  );
  return data;
};
