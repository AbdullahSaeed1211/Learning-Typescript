abstract class takePhoto {
    constructor(public cameraMode: string, public filter: String) {
    }
    abstract getSepia(): void //necessary to define in child class
}
class instagram extends takePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number) { 

            super(cameraMode, filter)
        }
        getSepia(): void {
            console.log("Sepia");
        }
        getReelTime():number{
            //complex calc lol
            return 2
        }
}
// const Luffy = new takePhoto("test","also Test")
// can't create obj from abstract class make from child class instead
const Luffy = new instagram("test","also Test",4) 