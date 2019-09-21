class Chronometer {
  constructor() {
    this.currentTime=0
    this.currentTimeMili=0
    this.intervalId=0
    this.intervalIdMili=0

  }
  
  addSecond = () => {
    this.currentTime += 1
 
    printTime()
  }
  addMiliSecond = () => {
  
    this.currentTimeMili += 1
    printTime()
  }

  startClick(){
    this.intervalId=setInterval(this.addSecond, 1000)
    this.intervalIdMili=setInterval(this.addMiliSecond, 10)
  }
    
   getMinutes() {
     const minute= Math.floor(this.currentTime/60)
     return minute
   }
   getSeconds() {
    const seconds=this.currentTime%60
    return seconds
   }
   getMiliseconds(){
    if(this.currentTimeMili===100){
      this.currentTimeMili=0
    }
    return this.currentTimeMili
   }
   twoDigitsNumber(number) {
     if(number<10){
       number="0"+number
       return number
     }
     else{
      return String(number)
     }
    
   }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMili)
    }
   resetClick() {
     
    this.currentTime=0
    this.currentTimeMili=0
    printTime()
   }
   splitClick(){
     printSplit()
   }
}
