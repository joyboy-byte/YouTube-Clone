export const API_KEY = 'AIzaSyCYHwZUqAQI_-nhX03Wzfoa2goKI87hwFk';

export const value_convterter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value/1000000)+"M";
    }

    else if(value >= 1000) {
        return Math.floor(value/1000)+"K"
    }
    else {
        return value;
    }
}