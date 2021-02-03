const app ={

    data(){

        return {
            msg: 'Hello,Vue3',
            firstname: 'Surapong',
            lastname : 'Chamalai',
            position : 'Sorcerer Supreme',
            pathimage : './images/mypic.jpg'
        }
    }
} 
    Vue.createApp(app).mount('#app')
