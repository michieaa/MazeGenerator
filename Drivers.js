console.log("Page loading complete!\n You are running Maze Generator V0.2.2\nWritten by Angus Michie.")
dimension = 3
DimensionMaze(dimension);
ResetMaze();
let index = 0;
while(mazefront.length>0){
    index = RandIndex();
    CheckAdj(index)
    ProgressAdj(index);
}
console.log("Completed test")