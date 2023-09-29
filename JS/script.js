const { createApp } = Vue;

createApp({
  data(){
    return{
      hello: 'Pika! Pikàh!',
      imageUrl: './img/pika.jpg'
    }
  }  
}).mount('#app')