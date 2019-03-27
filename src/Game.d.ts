export declare class Game {
    private _canvas;
    private _engine;
    private _scene;
    private _camera;
    private _light;
    constructor(canvasElement: string);
    createScene(): void;
    animate(): void;
}
