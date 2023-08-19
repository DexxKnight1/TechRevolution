ServerEvents.recipes(event => {

    modifyShaped(event, 'ftbic:machine_block', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'ftbic:advanced_alloy',
        B: 'ftbic:industrial_grade_metal',
        C: 'ftbic:fuse'
    })

    modifyShaped(event, 'ftbic:iron_furnace', 1, ['AAA', 'ACA', 'ABA'], {
        A: '#forge:ingots/iron',
        B: '#misctags:furnace',
        C: 'ftbic:machine_block'
    })

    modifyShaped(event, 'ftbic:powered_furnace', 1, ['ABA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: 'ftbic:industrial_grade_metal',
        C: 'ftbic:iron_furnace',
        D: 'ftbic:lv_cable',
        E: 'ftbic:electronic_circuit'
    })

    modifyShaped(event, 'ftbic:macerator', 1, ['AAA', 'BCB', 'DED'], {
        A: 'minecraft:flint',
        B: 'ftbic:reinforced_stone',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit'
    })

    modifyShaped(event, 'ftbic:compressor', 1, ['AFA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: 'ftbic:reinforced_stone',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit',
        F: 'minecraft:piston'
    })

    modifyShaped(event, 'ftbic:reprocessor', 1, ['AAA', 'ABA', 'DED'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'minecraft:composter',
        D: 'ftbic:electronic_circuit',
        E: 'ftbic:compressor'
    })

    modifyShaped(event, 'ftbic:extruder', 1, ['ABA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: '#forge:rods/iron',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit'
    })

    modifyShaped(event, 'ftbic:quarry', 1, ['ABA', 'DCD', 'AEA'], {
        A: 'ftbic:advanced_alloy',
        B: 'thermal:flux_drill',
        C: 'ftbic:advanced_machine_block',
        D: 'ftbic:advanced_circuit',
        E: 'immersiveengineering:drillhead_steel'
    })

    modifyShaped(event, 'ftbic:mv_transformer', 1, ['ABA', 'ACA', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:mv_cable',
        C: 'ftbic:machine_block'
    })

    modifyShaped(event, 'ftbic:hv_transformer', 1, ['ABA', 'DCE', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:hv_cable',
        C: 'ftbic:mv_transformer',
        D: 'ftbic:electronic_circuit',
        E: 'ftbic:energy_crystal'
    })

    modifyShaped(event, 'ftbic:ev_transformer', 1, ['ABA', 'DCE', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:ev_cable',
        C: 'ftbic:hv_transformer',
        D: 'ftbic:advanced_circuit',
        E: 'ftbic:advanced_alloy'
    })

    modifyShaped(event, 'ftbic:ejector_upgrade', 1, ['ABA', 'BCB', 'ADA'], {
        A: '#forge:ingots/tin',
        B: 'ftbic:advanced_alloy',
        C: 'minecraft:piston',
        D: 'ftbic:electronic_circuit'
    })

    modifyShaped(event, 'ftbic:fuse', 12, ['AAA', 'BBB', 'AAA'], {
        A: '#forge:glass',
        B: 'ftbic:industrial_grade_metal'
    })

    event.shaped('2x ftbic:fluid_cell', [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/tin',
        B: '#forge:glass'
    }).id(`kubejs:ftbic/fluid_cell_empty`)

    modifyShaped(event, 'ftbic:roller', 1, ['AAA', 'HMH', 'PCP'], {
        A: 'ftbic:industrial_grade_metal',
        H: '#forge:gears/aluminum',
        P: 'minecraft:piston',
        M: 'ftbic:machine_block',
        C: 'ftbic:electronic_circuit'
    })

    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"ftbic:ftbic_guide"}'), ['minecraft:book', 'ftbic:industrial_grade_metal']).id(`kubejs:ftbic/ftbic_guide`)

    //Rolling missing plate recipes
    //Thermal
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/rose_gold"}}],
        outputItems: [{item: "thermal:rose_gold_plate"}]
    }).id(`kubejs:thermal/rose_gold_plate`)
    //Thermal Extra
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/soul_infused"}}],
        outputItems: [{item: "thermal_extra:soul_infused_plate"}]
    }).id(`kubejs:thermal_extra/soul_infused_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/shellite"}}],
        outputItems: [{item: "thermal_extra:shellite_plate"}]
    }).id(`kubejs:thermal_extra/shellite_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/twinite"}}],
        outputItems: [{item: "thermal_extra:twinite_plate"}]
    }).id(`kubejs:thermal_extra/twinite_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/dragonsteel"}}],
        outputItems: [{item: "thermal_extra:dragonsteel_plate"}]
    }).id(`kubejs:thermal_extra/dragonsteel_plate`)
    //Allthemodium
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/allthemodium"}}],
        outputItems: [{item: "allthemodium:allthemodium_plate"}]
    }).id(`kubejs:allthemodium/allthemodium_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/vibranium"}}],
        outputItems: [{item: "allthemodium:vibranium_plate"}]
    }).id(`kubejs:allthemodium/vibranium_plate`)
    event.custom({type: "ftbic:rolling", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/unobtainium"}}],
        outputItems: [{item: "allthemodium:unobtainium_plate"}]
    }).id(`kubejs:allthemodium/unobtainium_plate`)

    //Extruder missing gear recipes
    //Allthemodium
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/allthemodium"}}],
        outputItems: [{item: "allthemodium:allthemodium_gear"}]
    }).id(`kubejs:allthemodium/allthemodium_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/vibranium"}}],
        outputItems: [{item: "allthemodium:vibranium_gear"}]
    }).id(`kubejs:allthemodium/vibranium_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/unobtainium"}}],
        outputItems: [{item: "allthemodium:unobtainium_gear"}]
    }).id(`kubejs:allthemodium/unobtainium_gear`)
    //Thermal
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/rose_gold"}}],
        outputItems: [{item: "thermal:rose_gold_gear"}]
    }).id(`kubejs:thermal/rose_gold_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:gems/lapis"}}],
        outputItems: [{item: "thermal:lapis_gear"}]
    }).id(`kubejs:thermal/lapis_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:gems/emerald"}}],
        outputItems: [{item: "thermal:emerald_gear"}]
    }).id(`kubejs:thermal/emerald_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:gems/quartz"}}],
        outputItems: [{item: "thermal:quartz_gear"}]
    }).id(`kubejs:thermal/quartz_gear`)
    //Thermal Extra
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/soul_infused"}}],
        outputItems: [{item: "thermal_extra:soul_infused_gear"}]
    }).id(`kubejs:thermal_extra/soul_infused_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/shellite"}}],
        outputItems: [{item: "thermal_extra:shellite_gear"}]
    }).id(`kubejs:thermal_extra/shellite_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/twinite"}}],
        outputItems: [{item: "thermal_extra:twinite_gear"}]
    }).id(`kubejs:thermal_extra/twinite_gear`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:plates/dragonsteel"}}],
        outputItems: [{item: "thermal_extra:dragonsteel_gear"}]
    }).id(`kubejs:thermal_extra/dragonsteel_gear`)
    //Redstone Arsenal
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:ingots/flux"}}],
        outputItems: [{item: "redstone_arsenal:flux_gear"}]
    }).id(`kubejs:redstone_arsenal/flux_gear`)
    //Pneumatic Craft
    event.custom({type: "ftbic:extruding", inputItems: [{count: 4, ingredient: {tag: "forge:ingots/compressed_iron"}}],
        outputItems: [{item: "pneumaticcraft:compressed_iron_gear"}]
    }).id(`kubejs:pneumaticcraft/compressed_iron_gear`)

    //Extruder missing rod recipes
    //Allthemodium
    event.custom({type: "ftbic:extruding", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/allthemodium"}}],
        outputItems: [{count: 1, item: "allthemodium:allthemodium_rod"}]
    }).id(`kubejs:allthemodium/allthemodium`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/vibranium"}}],
        outputItems: [{count: 1, item: "allthemodium:vibranium_rod"}]
    }).id(`kubejs:allthemodium/vibranium`)
    event.custom({type: "ftbic:extruding", inputItems: [{count: 1, ingredient: {tag: "forge:ingots/unobtainium"}}],
        outputItems: [{count: 1, item: "allthemodium:unobtainium_rod"}]
    }).id(`kubejs:allthemodium/unobtainium`)

    removeRecipeByID(event, [
        'ftbic:shaped/fluid_cell',
        'ftbic:shaped/ingots/aluminum_to_aluminum_rod',
        'ftbic:shaped/ingots/iridium_to_iridium_rod',
        'ftbic:shaped/ingots/lead_to_lead_rod',
        'ftbic:shaped/ingots/tin_to_tin_rod',
        'ftbic:shaped/ingots/uranium_to_uranium_rod',
        'ftbic:shaped/ingots/bronze_to_bronze_rod',
        'ftbic:shaped/ingots/iron_to_iron_rod',
        'ftbic:shaped/ingots/gold_to_gold_rod',
        'ftbic:shaped/ingots/copper_to_copper_rod',
        'ftbic:shaped/ingots/enderium_to_enderium_rod',
    ])

})
