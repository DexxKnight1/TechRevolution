ServerEvents.recipes(event => {
    
    event.shaped('8x pneumaticcraft:pressure_tube', ['ABA'], {
        A: '#forge:ingots/compressed_iron',
        B: 'create:belt_connector'
    }).id(`kubejs:pneumaticcraft/pressure_tube`)

    event.shaped('pneumaticcraft:pressure_gauge', [' A ', 'ABA', ' A '], {
        A: '#forge:plates/bronze',
        B: '#forge:gears/compressed_iron'
    }).id(`kubejs:pneumaticcraft/pressure_gauge`)

    event.shaped('pneumaticcraft:thermopneumatic_processing_plant', ['AAA', 'BCB', 'AAA'], {
        A: 'pneumaticcraft:compressed_stone_slab',
        B: 'fluidtank:tank_iron',
        C: 'pneumaticcraft:pressure_tube'
    }).id(`kubejs:pneumaticcraft/thermopneumatic_processing_plant`)

    event.shaped('2x pneumaticcraft:crop_support', ['AAA', 'B B', 'B B'], {
        A: '#forge:rods/treated_wood',
        B: '#forge:ingots/compressed_iron'
    }).id(`kubejs:pneumaticcraft/crop_support`)

    event.shaped('pneumaticcraft:gas_lift', [' A ', 'ACA', 'BBB'], {
        A: 'pneumaticcraft:pressure_tube',
        B: 'pneumaticcraft:compressed_stone',
        C: 'fluidtank:tank_diamond'
    }).id(`kubejs:pneumaticcraft/gas_lift`)

    event.shaped('pneumaticcraft:charging_station', ['  A', 'BDB', 'CCC'], {
        A: 'pneumaticcraft:pressure_tube',
        B: 'ftbic:copper_coil',
        C: 'pneumaticcraft:compressed_stone_slab',
        D: 'thermal:flux_capacitor'
    }).id(`kubejs:pneumaticcraft/charging_station`)

    event.shaped('2x pneumaticcraft:tube_junction', ['ADA', 'BCB', 'ADA'], {
        A: 'pneumaticcraft:pressure_tube',
        B: 'quark:magenta_rune',
        C: 'pneumaticcraft:compressed_stone',
        D: 'quark:green_rune'
    }).id(`kubejs:pneumaticcraft/tube_junction`)

    event.shaped('3x pneumaticcraft:kerosene_lamp', [' A ', 'BCB', 'ADA'], {
        A: '#forge:ingots/compressed_iron',
        B: 'ae2:quartz_glass',
        C: 'mob_grinding_utils:saw_upgrade_fire',
        D: 'pneumaticcraft:small_tank'
    }).id(`kubejs:pneumaticcraft/kerosene_lamp`)

    event.shaped('pneumaticcraft:minigun', ['ABD', 'BCB', 'EB '], {
        A: 'pneumaticcraft:air_canister',
        B: 'immersiveengineering:gunpart_barrel',
        C: '#forge:gears/compressed_iron',
        D: 'pneumaticcraft:cannon_barrel',
        E: '#forge:wooden_grip'
    }).id(`kubejs:pneumaticcraft/minigun`)

    event.shaped('pneumaticcraft:sentry_turret', [' A ', ' BC', 'DEF'], {
        A: 'immersiveengineering:toolupgrade_railgun_scope',
        B: 'pneumaticcraft:minigun',
        C: 'rftoolscontrol:cpu_core_2000',
        D: 'reliquary:magazines/neutral_magazine',
        E: 'immersiveengineering:turntable',
        F: 'immersiveengineering:rs_engineering'
    }).id(`kubejs:pneumaticcraft/sentry_turret`)

    event.shaped('pneumaticcraft:vacuum_trap', ['ABA', 'CDE', 'FFF'], {
        A: '#forge:gears/netherite',
        B: 'ad_astra:steel_trapdoor',
        C: 'deeperdarker:soul_crystal',
        D: 'thermal:device_collector',
        E: 'pneumaticcraft:pressure_tube',
        F: '#forge:ingots/soul_infused'
    }).id(`kubejs:pneumaticcraft/vacuum_trap`)

    event.shaped('pneumaticcraft:vortex_tube', ['ABA', 'CBC', 'ADA'], {
        A: '#forge:ingots/compressed_iron',
        B: 'pneumaticcraft:pressure_tube',
        C: '#forge:ingots/blaze_gold',
        D: '#forge:storage_blocks/energized_steel'
    }).id(`kubejs:pneumaticcraft/vortex_tube`)

    event.shaped('pneumaticcraft:air_cannon', [' A ', 'CBC', 'DDD'], {
        A: 'pneumaticcraft:cannon_barrel',
        B: 'pneumaticcraft:stone_base',
        C: 'pneumaticcraft:pressure_tube',
        D: 'pneumaticcraft:compressed_stone_slab'
    }).id(`kubejs:pneumaticcraft/air_cannon`)

    event.shaped('pneumaticcraft:cannon_barrel', ['A A', 'A A', 'ABA'], {
        A: 'pneumaticcraft:compressed_stone',
        B: 'pneumaticcraft:pressure_tube'
    }).id(`kubejs:pneumaticcraft/cannon_barrel`)

    event.shaped('pneumaticcraft:air_grate_module', [' A ', 'ABA', ' A '], {
        A: 'quark:grate',
        B: 'pneumaticcraft:pressure_tube'
    }).id(`kubejs:pneumaticcraft/air_grate_module`)

    removeRecipeByID(event, [
        'pneumaticcraft:crop_support',
        'pneumaticcraft:tube_junction',
        'pneumaticcraft:minigun',
        'pneumaticcraft:sentry_turret',
        'pneumaticcraft:vacuum_trap',
        'pneumaticcraft:vortex_tube',
        'pneumaticcraft:air_cannon',
        'pneumaticcraft:pressure_tube',
        'pneumaticcraft:pressure_gauge',
        'pneumaticcraft:thermopneumatic_processing_plant',
        'pneumaticcraft:gas_lift',
        'pneumaticcraft:charging_station',
        'pneumaticcraft:kerosene_lamp',
        'pneumaticcraft:cannon_barrel',
        'pneumaticcraft:air_grate_module',
    ])

})
