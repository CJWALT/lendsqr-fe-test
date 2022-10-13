export function getData(){ 
    return fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ')
    .then((res) => res.json())
    
    }
