let resolution = isLandscape(1920,1080);
console.log(resolution);

function isLandscape(width,height){
    return (width > height) ? 'Landscape' : 'Portrait';
}

//in another way
/*
console.log(isLandscape(1920,1080));

function isLandscape(width,height){
    return (width > height);
}
 */