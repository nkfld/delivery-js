const renderItems = (data) => {
   data.forEach(element => {
       console.log(element);
   });
}


fetch ('https://js-project-27c10-default-rtdb.firebaseio.com/db/partners.json')
.then((response) => response.json()) 
.then ((data) => {
    renderItems(data)
})
.catch ((error) => {
    console.log(error);
})
