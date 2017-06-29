class Clock{
  constructor(){
    this.currentTime = new Date();
    this.hours = this.currentTime.getHours();
    this.minutes = this.currentTime.getMinutes();
    this.seconds = this.currentTime.getSeconds();

    setInterval(this._tick.bind(this),1000);
  }
  printTime(){
    console.log(this.hours + ' ' + this.minutes  + ' ' + this.seconds);
  }
  _tick(){
    this.seconds += 1;
    if (this.seconds === 60){
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 60){
        this.minutes = 0;
        this.hours += 1;
        if (this.hours === 24){
          this.hours = 0;
        }
      }
    }
    this.printTime();
  }
}
const clock = new Clock();
