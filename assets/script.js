// Necessario per dopo richiamare constante

const app = Vue.createApp({

 data(){
    return{
        message: 'Hello Boys',
        title: ['text-danger', 'text-center'],
        image: 'https://eidec2hct28.exactdn.com/uploads/Original_WW223791-scaled.jpg?strip=all&lossy=1&ssl=1',
    }
 },
});

app.mount('#root');