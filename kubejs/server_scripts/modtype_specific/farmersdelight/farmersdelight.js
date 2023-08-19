ServerEvents.recipes(event => {

    const replaceInput = (from, to) => {event.replaceInput({}, from, to)}
    const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)}

    replaceInput('minecraft:campfire', '#forge:campfires')
    replaceInputID('farmersdelight:stove', 'minecraft:campfire', '#forge:campfires')

})
