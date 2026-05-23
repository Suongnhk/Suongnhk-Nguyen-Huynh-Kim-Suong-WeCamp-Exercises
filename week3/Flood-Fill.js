/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let originalColor = image[sr][sc];
    if (originalColor === color) return image;
    let queue = [[sr,sc]];
    while (queue.length > 0) {
        const [r, c] = queue.shift();
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) continue;
        if (image[r][c] !== originalColor) continue;
        image[r][c] = color;
        queue.push([r + 1, c]);
        queue.push([r - 1, c]);
        queue.push([r, c + 1]);
        queue.push([r, c - 1]);
    }
    return image;
};
