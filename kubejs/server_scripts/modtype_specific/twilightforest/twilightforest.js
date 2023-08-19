ServerEvents.recipes(event => {

    event.shaped('twilightforest:moon_dial', [' A ', 'BCB', 'ADA'], {
        A: '#forge:ingots/gold',
        B: '#forge:nuggets/brass',
        C: '#forge:nuggets/silver',
        D: '#forge:dusts/redstone'
    }).id(`kubejs:twilightforest/moon_dial`)

    event.shaped('2x twilightforest:fiery_blood', [' A ', ' B ', ' C '], {
        A: '#minecraft:wooden_buttons',
        B: 'alexsmobs:blood_sac',
        C: 'ars_nouveau:mob_jar'
    }).id(`kubejs:twilightforest/fiery_blood`)

    event.shaped('8x twilightforest:red_thread', ['ACA', 'CBC', 'ACA'], {
        A: '#forge:string',
        B: 'twilightforest:carminite',
        C: 'twilightforest:torchberries'
    }).id(`kubejs:twilightforest/red_thread`)

    event.shaped('twilightforest:moonworm_queen', ['ABA', 'CDC', 'ABA'], {
        A: 'blue_skies:moonstone',
        B: 'twilightforest:transformation_powder',
        C: 'ars_nouveau:manipulation_essence',
        D: 'twilightforest:torchberries'
    }).id(`kubejs:twilightforest/moonworm_queen`)

    event.shaped('twilightforest:transformation_powder', ['ABA', 'CDC', 'ABA'], {
        A: '#forge:pixie_dust',
        B: 'twilightforest:transformation_leaves',
        C: 'ars_nouveau:manipulation_essence',
        D: 'thermal:satchel'
    }).id(`kubejs:twilightforest/transformation_powder`)

    removeRecipeByID(event, [
        'twilightforest:moon_dial',
        'twilightforest:fiery_blood',
        'twilightforest:red_thread',
        'twilightforest:moonworm_queen',
        'twilightforest:transformation_powder'
    ])

})
