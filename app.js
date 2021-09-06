const App = {
 data() {
     return {
         placeholder:"Введите название заметки",
         title: 'Список Заметок',
         inputValue:'',
         notes:['заметка 1','заметка 2','заметка 3']
     }
 },
 methods:{
    inputValueChangeHandler(event){
      this.inputValue= event.target.value
    },
    addNewNote (){
      if(this.inputValue!==''){
        this.notes.push(this.inputValue)
        this.inputValue=''
      }
      
    },
    toUpperCase(item){
    return   item.toUpperCase()

    },
     clearNote(i){
     this.notes.splice(i,1)
     
     }

 },
 computed:{
   doubleCount(){
    return this.notes.length*2
   }
 },
 watch:{
  inputValue(value){
    if(value.length>15){
      this.inputValue=''
    }
  }
 }
}

 Vue.createApp (App).mount('#app')

// app.mount('#app')