// npm run build
import * as BABYLON from "babylonjs";
//import "./src/Game.js";
import { Game } from "./src/Game.ts";
//import { Engine, Scene, FreeCamera, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";

/*
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
*/


window.addEventListener('DOMContentLoaded', () =>
{
    console.log("starg game...");
    // Create the game using the 'renderCanvas'
    //let game = new Game('renderCanvas');

    //let greeter = new Greeter( "world" );
    let game = new Game('renderCanvas');

    // Create the scene
    game.createScene();

    // start animation
    game.animate();


    // Create the scene
    //game.createScene();
    // start animation
    //game.animate();
});
