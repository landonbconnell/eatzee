import axios from 'axios';

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
    'http://localhost:5000/api/kroger/locations/getLocations',
    params
  );
  return data;
};
