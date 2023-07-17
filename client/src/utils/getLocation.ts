const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return position;
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
          default:
            alert('An unknown error occurred.');
        }
      }
    );
  } else {
    alert('Geolocation is not supported by this browser.');
  }
};
