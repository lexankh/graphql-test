class ServerApi {
    constructor() {}
    getCards = () => {
        return fetch(`http://localhost:4000/graphql`,  {
            method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{ lists { title, subtitle, image} }`
          })
        })
        
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
    })
    
    }
}