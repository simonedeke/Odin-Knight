export const knightMoves = (start, end) => {
    function _isOnBoard(x, y) {
        return (x >= 0 && x < 8 && y >= 0 && y < 8);
    }
    function knightNode(coords) {
        let x = coords[0];
        let y = coords[1];
        let parent = null;
        return {parent, coords, x, y}
    }
    function returnPath(path){
        let fullPath = [];
        while(path != null){
            fullPath.push([path.x, path.y]);
            path = path.parent;
        }
        console.log('The shortest path is:');
        console.log(fullPath);
        return fullPath;
    }
    const _moveX = [1, 2, -1, -2, 2, 1, -1, -2];
    const _moveY = [2, 1, 2, 1, -1, -2, -2, -1];
    let startNode = knightNode(start);
    let endNode = knightNode(end);
    
    let que = [];
    que.push(startNode);
    while(que.length > 0){
        let currentNode = que.shift();
        if(currentNode.x == end[0] && currentNode.y == end[1]){
            return returnPath(currentNode);
        }
        for(let i = 0; i < 8; i++){
            let nextX = currentNode.x + _moveX[i];
            let nextY = currentNode.y + _moveY[i];
            if(_isOnBoard(nextX,nextY)){
                let childNode = knightNode([nextX,nextY]);
                childNode.parent = currentNode;
                if(nextX == endNode.x && nextY == endNode.y){
                    i = 10;
                    return returnPath(childNode);
                }
                else {
                    que.push(childNode);
                }
            }            
        }
    }
    return "not possible";
};