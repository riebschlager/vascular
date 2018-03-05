function Pathfinder(p, path) {

    let velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));

    this.isDead = false;
    this.location = p.createVector(path.location.x, path.location.y);
    this.diameter = path.diameter;
    this.startX = this.location.x;
    this.startY = this.location.y;

    let curvy = Math.random() / 3;

    this.update = () => {
        if (this.diameter > 0.3) {
            this.diameter *= 0.99;
            this.location.add(velocity);
            let bump = p.createVector(p.random(-1, 1), p.random(-1, 1));
            bump.mult(curvy);
            velocity.add(bump);
            velocity.normalize();
        } else {
            this.isDead = true;
        }
    }
}
