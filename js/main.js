const sketch = p => {

    const paths = new Set();

    p.mousePressed = function(e) {
        let firstPath = {
            location: {
                x: e.clientX,
                y: e.clientY
            },
            diameter: 40 * Math.random()
        };
        paths.add(new Pathfinder(p, firstPath));
    };

    p.setup = function() {
        let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent('sketch');
        p.background(255);
        p.ellipseMode(p.CENTER);
        p.colorMode(p.HSB);
        p.noStroke();
    };

    p.draw = function() {
        paths.forEach(path => {
            path.update();
            if (p.random(1) > 0.99) paths.add(new Pathfinder(p, path));
            let dist = p.dist(path.location.x, path.location.y, path.startX, path.startY);
            let B = p.map(dist, 0, window.innerWidth / 2, 0, 255);
            p.fill(0, 250, B);
            p.ellipse(path.location.x, path.location.y, path.diameter, path.diameter);
            if (path.isDead) paths.delete(path);
        });
    };

};

const myp5 = new p5(sketch);

document.addEventListener('click', onFirstClick);

function onFirstClick() {
    document.removeEventListener('click', onFirstClick);
    document.getElementById('start').classList.add('hide');
}
