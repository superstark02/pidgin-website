export default function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function (position) {
            var location = {
                lat:position.coords.latitude,
                lon:position.coords.longitude
            }
            resolve(location);
        },function(error){
            var location = {
                lat:0,
                lon:0
            }
            reject(location)
        })
    });
}