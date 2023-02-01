class BossBullet {
    constructor(ctx, canvasSize, bossSize, bossPos) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.bossSize = bossSize
        this.bossPos = bossPos
        this.bossBulletSize = { w: 100, h: 25 }
        this.bossBulletPos = { x: bossPos.x, y: ((Math.random() * 350) + 225) }
    }

    draw() {
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(this.bossBulletPos.x, this.bossBulletPos.y, this.bossBulletSize.w, this.bossBulletSize.h)
        this.move()
    }

    move() {
        this.bossBulletPos.x -= 10

    }
}