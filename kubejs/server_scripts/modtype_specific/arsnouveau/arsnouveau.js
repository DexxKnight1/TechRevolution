ServerEvents.recipes(event => {

    event.shaped('ars_nouveau:arcane_core', ['CAC', 'BDB', 'CAC'], {
        A: 'ars_nouveau:sourcestone',
        B: '#forge:ingots/energized_steel',
        C: '#forge:ingots/gold',
        D: ['#forge:storage_blocks/lapis', '#forge:storage_blocks/fluorite', '#forge:storage_blocks/sulfur']
    }).id(`kubejs:ars_nouveau/arcane_core`)

    event.shaped('ars_nouveau:arcane_pedestal', ['CAC', 'BDB', 'CDC'], {
        A: 'ars_nouveau:sourcestone',
        B: '#forge:ingots/brass',
        C: '#forge:ingots/gold',
        D: ['#forge:gems/lapis', '#forge:gems/fluorite', '#forge:gems/sulfur']
    }).id(`kubejs:ars_nouveau/arcane_pedestal`)

    event.shaped('ars_nouveau:enchanting_apparatus', ['CAC', 'BDB', 'CAC'], {
        A: 'ars_nouveau:sourcestone',
        B: '#forge:ingots/energized_steel',
        C: '#forge:ingots/gold',
        D: '#forge:gems/fluix'
    }).id(`kubejs:ars_nouveau/enchanting_apparatus`)

    event.shaped('ars_nouveau:spell_prism', ['CAC', 'BDB', 'CAC'], {
        A: '#forge:treated_wood',
        B: 'botania:spell_cloth',
        C: '#forge:storage_blocks/gold',
        D: '#ae2:all_quartz'
    }).id(`kubejs:ars_nouveau/spell_prism`)

    event.shaped('2x ars_nouveau:mob_jar', ['DAD', 'BCB', 'BBB'], {
        A: '#forge:nuggets/bronze',
        B: '#forge:glass',
        C: 'thermal:jar',
        D: 'ars_nouveau:archwood_slab'
    }).id(`kubejs:ars_nouveau/mob_jar`)

    event.shaped('2x ars_nouveau:source_jar', ['DAD', 'BCB', 'EEE'], {
        A: '#forge:nuggets/bronze',
        B: '#forge:glass',
        C: 'thermal:jar',
        D: 'ars_nouveau:archwood_slab',
        E: '#forge:ingots/gold'
    }).id(`kubejs:ars_nouveau/source_jar`)

    event.shaped('ars_nouveau:ring_of_potential', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:nuggets/silver',
        B: '#forge:gems/source'
    }).id(`kubejs:ars_nouveau/ring_of_potential`)

    event.shaped('ars_nouveau:alchemists_crown', [' C ', 'ABA', ' D '], {
        A: 'thermal:jar',
        B: 'minecraft:golden_helmet',
        C: 'botania:cosmetic_red_glasses',
        D: 'ars_nouveau:mundane_belt'
    }).id(`kubejs:ars_nouveau/alchemists_crown`)

    event.shaped('2x ars_nouveau:repository', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:nuggets/electrum',
        B: 'ars_nouveau:archwood_chest',
        C: '#forge:gems/source'
    }).id(`kubejs:ars_nouveau/repository`)

    event.shaped('ars_nouveau:dominion_wand', [' AB', 'DCA', 'CD '], {
        A: '#forge:ingots/allthemodium',
        B: '#forge:gems/source',
        C: '#forge:rods/wooden',
        D: 'botania:mana_string'
    }).id(`kubejs:ars_nouveau/dominion_wand`)

    event.shaped('ars_nouveau:ritual_brazier', [' A ', 'BCB', 'DED'], {
        A: 'ars_nouveau:arcane_pedestal',
        B: '#forge:ingots/energized_steel',
        C: '#forge:storage_blocks/source',
        D: 'ars_nouveau:sourcestone',
        E: '#forge:ingots/allthemodium'
    }).id(`kubejs:ars_nouveau/ritual_brazier`)

    event.shaped('ars_nouveau:basic_spell_turret', [' A ', 'BCB', 'ADA'], {
        A: '#forge:ingots/allthemodium',
        B: '#forge:wires/electrum',
        C: '#forge:storage_blocks/source',
        D: 'botania:spell_cloth'
    }).id(`kubejs:ars_nouveau/basic_spell_turret`)

    //Sourcestone
    event.custom({
        "type": "industrialforegoing:stonework_generate",
        "lavaConsume": 0,
        "lavaNeed": 1000,
        "output": {
            "count": 1,
            "item": "ars_nouveau:sourcestone"
        },
        "waterConsume": 0,
        "waterNeed": 1000
    })

    removeRecipeByID(event, [
        'ars_nouveau:arcane_core',
        'ars_nouveau:arcane_pedestal',
        'ars_nouveau:enchanting_apparatus',
        'ars_nouveau:spell_prism',
        'ars_nouveau:mob_jar',
        'ars_nouveau:source_jar',
        'ars_nouveau:alchemists_crown',
        'ars_nouveau:dominion_wand',
        'ars_nouveau:repository',
        'ars_nouveau:ritual_brazier',
        'ars_nouveau:ring_of_potential',
        'ars_nouveau:basic_spell_turret'
    ])

})
