interface takePhoto { //a guideline to implement set variables and methods in the child classes
    cameraMode: string
    filter: string
    burst: number
}

interface story {
    createStory():void

}

class instagram implements takePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number

    ) { }
}

class youtube implements takePhoto,story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short:string

    ) { }
    createStory(): void {
        console.log("Story created");
    }
}
