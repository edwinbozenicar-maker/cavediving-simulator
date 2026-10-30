controller.down.onEvent(ControllerButtonEvent.Released, function () {
    // normales Bild
    lubert.setImage(image.create(16, 16))
})
// A: Jump
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lubert.isHittingTile(CollisionDirection.Bottom)) {
        lubert.vy = -150
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    // normales Bild
    lubert.setImage(assets.image`Lubert baseform`)
})
// Oben: Bücken
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    // Bild "Bücken" einsetzen
    lubert.setImage(assets.image`Lubert Rollform`)
})
// Links laufen
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lubert.vx = -80
})
// Unten: Rollen
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    // Bild "Rollen" einsetzen
    lubert.setImage(image.create(12, 12))
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    lubert.vx = 0
})
// Rechts laufen
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lubert.vx = 80
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    lubert.vx = 0
})
let lubert: Sprite = null
lubert = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . 8 b 8 . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . f 9 9 9 9 9 f . . . . . 
    . . . f . 9 9 9 9 9 . f . . . . 
    . . f . . 9 9 9 9 9 . . f . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
lubert.ay = 300
tiles.setCurrentTilemap(tilemap`Level 1 template`)
scene.cameraFollowSprite(lubert)
