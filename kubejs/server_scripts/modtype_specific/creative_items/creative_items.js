ServerEvents.recipes(event => {

    function pressure(inputs, result, rCount, pressure) {
        event.custom({
          type: 'pneumaticcraft:pressure_chamber',
          inputs: inputs,
          pressure: pressure,
          results: [{
            item: result,
            count: rCount
          }]
        }).id(`kubejs:pressure/${result.replace(':', '/')}`)
    }

    //Applied Energistics Creative ME Item Cell
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCCDCCBA',
            'BEFCACFEB',
            'CFEGHGEFC',
            'CCGIJIGCC',
            'KAHJLJHAK',
            'CCGIJIGCC',
            'CFEGHGEFC',
            'BEFCACFEB',
            'ABCCDCCBA',
        ],
        key: {
            A: {item: 'botania:laputa_shard', },
            B: {item: 'ae2:fluix_crystal', },
            C: {item: 'ftbic:silicon', },
            D: {item: 'mekanism:creative_bin', },
            E: {item: 'ae2:calculation_processor', },
            F: {item: 'ae2:engineering_processor', },
            G: {item: 'ae2:logic_processor', },
            H: {item: 'ae2:spatial_storage_cell_128', },
            I: {item: 'megacells:item_storage_cell_16m', },
            J: {item: 'mysticalagradditions:creative_essence', },
            K: {item: 'kubejs:personal_id', },
            L: {item: 'functionalstorage:creative_vending_upgrade',},
        },
        result: {item: 'ae2:creative_item_cell', },
    }).id(`kubejs:ae2/creative_item_cell`)

    //Applied Mekanistics Creative ME Chemical Cell
    pressure([
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:huge_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'megacells:chemical_storage_cell_256m', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'industrialforegoing:supreme_black_hole_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'megacells:chemical_storage_cell_256m', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:huge_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
    ], 'appmek:creative_chemical_cell', 1, 4.9)

    //Applied Energistics Creative ME Fluid Cell
    pressure([
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:huge_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'megacells:fluid_storage_cell_256m', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'industrialforegoing:supreme_black_hole_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'megacells:fluid_storage_cell_256m', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:huge_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
    ], 'ae2:creative_fluid_cell', 1, 4.9)

    //Applied Botanics Creative ME Mana Cell
    pressure([
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:huge_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'megacells:mana_storage_cell_256m', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'industrialforegoing:supreme_black_hole_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'megacells:mana_storage_cell_256m', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:huge_tank', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
    ], 'appbot:creative_mana_cell', 1, 4.9)

    //Applied Energistics Creative Energy Cell
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:ultimate_singularity').toJson(),
            Ingredient.of('powah:reactor_nitro').toJson(),
            Ingredient.of(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),).toJson(),
            Ingredient.of('ae2:dense_energy_cell').toJson(),
        ],
        energy: '2000000000',
        result: Item.of('ae2:creative_energy_cell').toJson()
    }).id(`kubejs:energizing/ae2_creative_energy_cell`)

    //Refined Storage Creative Item Storage Disk
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'NABBBBBAN',
            'ACDBMBDCA',
            'BDCEFECDB',
            'BBEGHGEBB',
            'BMIHJHKMB',
            'BBEGHGEBB',
            'BDCELECDB',
            'ACDBMBDCA',
            'NABBBBBAN',
        ],
        key: {
            A: {item: 'refinedstorage:processor_binding', },
            B: {item: 'ftbic:silicon', },
            C: {item: 'refinedstorage:advanced_processor', },
            D: {item: 'refinedstorage:basic_processor', },
            E: {item: 'refinedstorage:improved_processor', },
            F: {item: 'extrastorage:disk_1024k', },
            G: {item: 'refinedstorage:64k_storage_disk', },
            H: {item: 'mysticalagradditions:creative_essence', },
            I: {item: 'extrastorage:disk_1024k', },
            J: {item: 'functionalstorage:creative_vending_upgrade', },
            K: {item: 'extrastorage:disk_1024k', },
            L: {item: 'extrastorage:disk_1024k', },
            M: {item: 'extradisks:infinite_storage_disk', },
            N: {item: 'extradisks:withering_processor', },
        },
        result: {item: 'refinedstorage:creative_storage_disk', },
    }).id(`kubejs:refinedstorage/creative_storage_disk`)

    //Refined Storage Creative Fluid storage Disk
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'OABBBBBAO',
            'ACDBNBDCA',
            'BDCEFECDB',
            'BBEGHIEBB',
            'BNJHKHLNB',
            'BBEMHGEBB',
            'BDCELECDB',
            'ACDBNBDCA',
            'OABBBBBAO',
        ],
        key: {
            A: {item: 'refinedstorage:processor_binding', },
            B: {item: 'ftbic:silicon', },
            C: {item: 'refinedstorage:advanced_processor', },
            D: {item: 'refinedstorage:basic_processor', },
            E: {item: 'refinedstorage:improved_processor', },
            F: {item: 'extrastorage:disk_65536k_fluid', },
            G: {item: 'refinedstorage:4096k_fluid_storage_disk', },
            H: {item: 'mysticalagradditions:creative_essence', },
            I: {item: 'refinedstorage:4096k_fluid_storage_disk', },
            J: {item: 'extrastorage:disk_65536k_fluid', },
            K: {item: 'functionalstorage:creative_vending_upgrade', },
            L: {item: 'extrastorage:disk_65536k_fluid', },
            M: {item: 'refinedstorage:4096k_fluid_storage_disk', },
            N: {item: 'extradisks:infinite_fluid_storage_disk', },
            O: {item: 'extradisks:withering_processor', },
        },
        result: {item: 'refinedstorage:creative_fluid_storage_disk', },
    }).id(`kubejs:refinedstorage/creative_fluid_storage_disk`)

    //Botania Creative Mana Tablet
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            Item.of('botania:mana_tablet', '{mana:500000}').strongNBT().toJson(),
            {item: "mysticalagradditions:creative_essence"},
            {item: "botania:mana_diamond"},
            {item: "botania:terrasteel_ingot"},
            {item: "botania:gaia_ingot"},
            {item: "ars_nouveau:amulet_of_mana_regen"},
            {item: "kubejs:personal_id"},
            {item: "botania:gaia_ingot"},
            Item.of('botania:mana_ring_greater', '{mana:2000000}').strongNBT().toJson(),
            {item: "botania:terrasteel_ingot"},
            {item: "botania:mana_diamond"},
            {item: "mysticalagradditions:creative_essence"},
            Item.of('botania:mana_tablet', '{mana:500000}').strongNBT().toJson()
        ],
        mana: 50000,
        output: Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').strongNBT().toJson()
    }).id(`kubejs:botania/creative_mana_tablet`)

    //Botania Creative Pool
    event.custom({
        type: "botania:runic_altar",
        ingredients: [
            Item.of('botania:mana_tablet', '{mana:500000}').strongNBT().toJson(),
            {item: "mysticalagradditions:creative_essence"},
            {item: "botania:mana_diamond"},
            {item: "botania:terrasteel_ingot"},
            {item: "botania:gaia_ingot"},
            {item: "bhc:soul_heart_crystal"},
            {item: "kubejs:personal_id"},
            {item: "botania:gaia_ingot"},
            Item.of('botania:mana_ring_greater', '{mana:2000000}').strongNBT().toJson(),
            {item: "botania:terrasteel_ingot"},
            {item: "botania:mana_diamond"},
            {item: "mysticalagradditions:creative_essence"},
            Item.of('botania:mana_tablet', '{mana:500000}').strongNBT().toJson()
        ],
        mana: 100000,
        output: {item: "botania:creative_pool"}
    }).id(`kubejs:botania/creative_pool`)

    //Mekanism Creative Fluid Tank
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCBCBCBA',
            'BCDCECDCB',
            'CDFBGBFDC',
            'BCBHKHBCB',
            'CEGILIGEC',
            'BCBHKHBCB',
            'CJFBGBFJC',
            'BCJCECJCB',
            'ABCBCBCBA',
        ],
        key: {
            A: {item: 'mekanism:dynamic_tank', },
            B: {item: 'mekanism:alloy_atomic', },
            C: {item: 'minecraft:iron_ingot', },
            D: {item: 'fluidtank:tank_diamond', },
            E: {item: 'fluidtank:tank_star', },
            F: {item: 'industrialforegoing:supreme_black_hole_tank', },
            G: {item: 'enderstorage:ender_tank', },
            H: {item: 'extendedcrafting:ultimate_singularity', },
            I: {item: 'mekanism:ultimate_fluid_tank', },
            J: {item: 'kubejs:personal_id', },
            K: {item: 'mysticalagradditions:creative_essence', },
            L: {type: "forge:nbt",
                item: "mekanism:creative_energy_cube",
                count: 1,
                nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
            },
        },
        result: {item: 'mekanism:creative_fluid_tank', },
    }).id(`kubejs:mekanism/creative_fluid_tank`)

    //Mystical Agriculture Creative Essence
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABCDEDFGH",
            "IJDKDLDMN",
            "ODPDQDRDS",
            "DTDUVUDWD",
            "XDYZ123D4",
            "D5DU6UD7D",
            "aDsDdDfDg",
            "hjDkDlDqw",
            "ertDyDuio",
        ],
        key: {
            A: {item: "mysticalagriculture:nickel_seeds", },
            B: {item: "mysticalagriculture:manasteel_seeds", },
            C: {item: "mysticalagriculture:experience_seeds", },
            D: {item: "mysticalagradditions:insanium_essence", },
            E: {item: "mysticalagriculture:diamond_seeds", },
            F: {item: "mysticalagriculture:constantan_seeds", },
            G: {item: "mysticalagriculture:ghast_seeds", },
            H: {item: "mysticalagriculture:lumium_seeds", },
            I: {item: "mysticalagriculture:redstone_seeds", },
            J: {item: "mysticalagriculture:elementium_seeds", },
            K: {item: "mysticalagriculture:queens_slime_seeds", },
            L: {item: "mysticalagriculture:hepatizon_seeds", },
            M: {item: "mysticalagriculture:fluix_seeds", },
            N: {item: "mysticalagriculture:pig_iron_seeds", },
            O: {item: "mysticalagriculture:hop_graphite_seeds", },
            P: {item: "mysticalagriculture:air_seeds", },
            Q: {item: "mysticalagriculture:stone_seeds", },
            R: {item: "mysticalagriculture:fiery_ingot_seeds", },
            S: {item: "mysticalagriculture:invar_seeds", },
            T: {item: "mysticalagriculture:electrum_seeds", },
            U: {item: "extendedcrafting:ultimate_singularity", },
            V: {item: "mysticalagriculture:squid_seeds", },
            W: {item: "mysticalagriculture:starmetal_seeds", },
            X: {item: "mysticalagriculture:wither_skeleton_seeds", },
            Y: {item: "mysticalagriculture:refined_obsidian_seeds", },
            Z: {item: "mysticalagriculture:earth_seeds", },
            1: {item: "mysticalagriculture:master_infusion_crystal", },
            2: {item: "mysticalagriculture:fire_seeds", },
            3: {item: "mysticalagriculture:terrasteel_seeds", },
            4: {item: "mysticalagriculture:netherite_seeds", },
            5: {item: "mysticalagriculture:manyullyn_seeds", },
            6: {item: "mysticalagriculture:water_seeds", },
            7: {item: "mysticalagriculture:uranium_seeds", },
            a: {item: "mysticalagriculture:signalum_seeds", },
            s: {item: "mysticalagriculture:nether_star_seeds", },
            d: {item: "mysticalagriculture:pink_slime_seeds", },
            f: {item: "mysticalagriculture:dragon_egg_seeds", },
            g: {item: "mysticalagriculture:cobalt_seeds", },
            h: {item: "mysticalagriculture:enderman_seeds", },
            j: {item: "mysticalagriculture:refined_glowstone_seeds", },
            k: {item: "mysticalagriculture:enderium_seeds", },
            l: {item: "mysticalagriculture:fluorite_seeds", },
            q: {item: "mysticalagriculture:steel_seeds", },
            w: {item: "mysticalagriculture:bronze_seeds", },
            e: {item: "mysticalagriculture:osmium_seeds", },
            r: {item: "mysticalagriculture:lapis_lazuli_seeds", },
            t: {item: "mysticalagriculture:blaze_seeds", },
            y: {item: "mysticalagriculture:emerald_seeds", },
            u: {item: "mysticalagriculture:gold_seeds", },
            i: {item: "mysticalagriculture:rose_gold_seeds", },
            o: {item: "mysticalagriculture:end_seeds", },
        },
        result: {item: "mysticalagradditions:creative_essence", },
    }).id(`kubejs:mysticalagradditions/creative_essence`)

    //Mekanism Creative Gas Tank
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABABABABA",
            "BABABABAB",
            "ABDBABEBA",
            "BABCDCBAB",
            "ABAEFGABA",
            "BABCHCBAB",
            "ABHBABGBA",
            "BABABABAB",
            "ABABABABA",
        ],
        key: {
            A: {item: "mekanism:alloy_atomic", },
            B: {item: "alltheores:osmium_ingot", },
            C: {item: "mysticalagradditions:creative_essence", },
            D: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:ethene",amount:512000L}}]}}',
            },
            E: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanismgenerators:fusion_fuel",amount:512000L}}]}}',
            },
            F: {item: "mekanism:creative_fluid_tank", },
            G: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:nutritional_paste",amount:512000L}}]}}',
            },
            H: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:uranium_hexafluoride",amount:512000L}}]}}',
            },
        },
        result: {item: "mekanism:creative_chemical_tank", },
    }).id(`kubejs:mekanism/creative_chemical_tank`)

    //Creative Functional Storage Vending Upgrade
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCBBBA",
            "BDBBEBBDB",
            "BBFGHGFBB",
            "BBGIJIGBB",
            "CEHJKJHEC",
            "BBGIJIGBB",
            "BBFGHGFBB",
            "BDBBEBBDB",
            "ABBBCBBBA",
        ],
        key: {
            A: {item: "allthecompressed:nether_star_block_2x", },
            B: {item: "extendedcrafting:flux_star", },
            C: {item: "allthecompressed:oak_log_block_9x", },
            D: {item: "mekanism:laser", },
            E: {item: "rftoolscontrol:programmer", },
            F: {item: "mysticalagriculture:infusion_pedestal", },
            G: {item: "extendedcrafting:crafting_core", },
            H: {item: "botania:gaia_ingot", },
            I: {item: "mysticalagradditions:creative_essence", },
            J: {item: "mekanism:personal_chest", },
            K: {item: "kubejs:personal_id", },
        },
        result: {item: "functionalstorage:creative_vending_upgrade", },
    }).id(`kubejs:functionalstorage/creative_vending_upgrade`)

    //Iron Jetpacks Creative Jetpack
    event.shaped(Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(), [' A ', 'BCB', ' D '], {
        A: Item.of('extendedcrafting:singularity', { Id:"extendedcrafting:redstone"}),
        B: 'allthemodium:unobtainium_block',
        C: 'powah:battery_nitro',
        D: 'immersiveengineering:rs_engineering'    
    }).id('kubejs:ironjetpacks/creative_cell')
    
    event.shaped(Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT(), ['ABA', 'BCB', 'ADA'], {
        A: 'allthemodium:unobtainium_block',
        B: 'powah:nitro_crystal_block',
        C: Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(),
        D: 'ironfurnaces:unobtainium_furnace'
    }).id('kubejs:ironjetpacks_creative_thruster')
    
    event.shaped(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }), ['ACA', 'BDB', 'AEA'], {
        A: 'allthemodium:unobtainium_block',
        B: 'mekanism:sps_casing',
        C: 'powah:reactor_nitro',
        D: 'mekanism:ultimate_induction_cell',
        E: 'powah:reactor_nitro'
    }).id('kubejs:ironjetpacks_creative_capacator')
    
    event.shaped(Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:creative" }).strongNBT(), ['ACA', 'BFB', 'DED'], {
        A: 'mysticalagradditions:creative_essence',
        B: 'extendedcrafting:ultimate_singularity',
        C: Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),
        D: Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT(),
        E: 'extendedcrafting:the_ultimate_block',
        F: Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:emerald" }).strongNBT()
    }).id('kubejs:ironjetpacks_creative_jetpack')

    //Ars Nouveau Creative Source Jar
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCCDCCBA',
            'BMFCACFMB',
            'CFEGHGEFC',
            'CCGIJIGCC',
            'KAHJLJHAK',
            'CCGIJIGCC',
            'CFEGHGEFC',
            'BMFCACFMB',
            'ABCCDCCBA',
        ],
        key: {
            A: {item: 'ars_nouveau:summon_focus', },
            B: {item: 'ars_nouveau:source_gem_block', },
            C: {item: 'ars_nouveau:ring_of_lesser_discount', },
            D: {item: 'ars_nouveau:jar_of_light', },
            E: {item: 'botania:gaia_spreader', },
            F: {item: 'botania:lens_flare', },
            G: {item: 'tombstone:impregnated_diamond', },
            H: {item: 'nourished_nether:nether_reactor_core', },
            I: {item: 'mythicbotany:mana_infuser', },
            J: {item: 'mysticalagradditions:creative_essence', },
            K: {item: 'mythicbotany:mana_collector', },
            L: {item: 'ars_nouveau:source_jar',},
            M: {item: 'botania:elven_spreader',},
        },
        result: {item: 'ars_nouveau:creative_source_jar', },
    }).id(`kubejs:ars_nouveau/creative_source_jar`)

    //Ars Nouveau Creative Spell Book
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCCDCCBA',
            'BMFCACFMB',
            'CFEGHGEFC',
            'CCGIJIGCC',
            'KAHJLJHAK',
            'CCGIJIGCC',
            'CFEGHGEFC',
            'BMFCACFMB',
            'ABCCDCCBA',
        ],
        key: {
            A: {item: 'ars_nouveau:spell_prism', },
            B: {item: 'reliquary:alkahestry_tome', },
            C: {item: 'cyclic:ender_book', },
            D: {item: 'extendedcrafting:ultimate_singularity', },
            E: {item: 'mythicbotany:fire_ring', },
            F: {item: 'enlightened_end:refined_magnetite', },
            G: {item: 'ars_nouveau:ring_of_greater_discount', },
            H: {item: 'thermal_extra:dragonsteel_block', },
            I: {item: 'cyclic:crafter', },
            J: {item: 'mysticalagradditions:creative_essence', },
            K: {item: 'ftbic:ev_transformer', },
            L: {item: 'ars_nouveau:archmage_spell_book',},
            M: {item: 'mythicbotany:andwari_ring',},
        },
        result: {item: 'ars_nouveau:creative_spell_book', },
    }).id(`kubejs:ars_nouveau/creative_spell_book`)

    //Mekanism Creative Energy Cube
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABIBABIBA',
            'BICACACIB',
            'ICDAEADCI',
            'BAEFGFEAB',
            'ACDGHGDCA',
            'BAEFGFEAB',
            'ICDAEADCI',
            'BICACACIB',
            'ABIBABIBA',
        ],
        key: {
            A: {item: 'mekanism:alloy_atomic', },
            B: {item: 'extendedcrafting:flux_star', },
            C: {item: 'mekanism:pellet_antimatter', },
            D: {item: 'mekanism:pellet_polonium', },
            E: {item: 'mekanism:ultimate_induction_provider', },
            F: {item: 'extendedcrafting:ultimate_singularity', },
            G: {item: 'mekanism:ultimate_induction_cell', },
            H: {type: "forge:nbt",
                item: "mekanism:ultimate_energy_cube",
                count: 1,
                nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}',
            },
            I: {type: "forge:nbt",
                item: "powah:battery_nitro",
                count: 1,
                nbt:   '{powah_tile_data:{energy_stored_main_energy:2000000000L}}',
            },
        },
        result: {
            type: "forge:nbt",
            item: "mekanism:creative_energy_cube",
            count: 1,
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
        },
    }).id(`kubejs:mekanis/creative_energy_cube`)

    //Mekanism Creative Bin
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('mekanism:ultimate_bin').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('mekanism:ultimate_bin').toJson(),
            Ingredient.of('kubejs:personal_id').toJson(),
            Ingredient.of('mekanism:ultimate_bin').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson()
        ],
        energy: '15800000',
        result: Item.of('mekanism:creative_bin').toJson()
    }).id(`kubejs:mekanism/creative_bin`)

    //Create Creative Motor
    event.custom({
        type: "create:mechanical_crafting",
        pattern: ['CLC', 'HSH', 'LGL'],
        key: {
            C: Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            L: Ingredient.of('extendedcrafting:the_ultimate_ingot').toJson(),
            H: Ingredient.of('kubejs:personal_id').toJson(),
            S: Ingredient.of('extendedcrafting:the_ultimate_catalyst').toJson(),
            G: Ingredient.of('create:gearbox').toJson()
        },
        result: Ingredient.of('create:creative_motor').toJson(),
        acceptMirrored: false
    }).id('kubejs:create/creative_motor')

    //Create Creative Blaze Cake
    event.custom({
        type: 'create:mixing',
        ingredients: [
            Ingredient.of('create:blaze_cake').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('allthemodium:unobtainium_block').toJson()
        ],
        results: [Ingredient.of('create:creative_blaze_cake').toJson()],
        heatRequirement: 'superheated'
    })

    //Create Additions Creative Generator
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),).toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('create:creative_blaze_cake',).toJson()
        ],
        energy: '2150000000',
        result: Item.of('createaddition:creative_energy').toJson()
    }).id(`kubejs:energizing/createaddition_creative_energy`)

    //RS Creative Crafter
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('extendedcrafting:ultimate_singularity').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('allthecompressed:nether_star_block_3x').toJson(),
            Ingredient.of('mekanism:ultimate_induction_cell').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_ingot').toJson(),
            Ingredient.of('extrastorage:netherite_crafter').toJson()
        ],
        energy: '178000000',
        result: Item.of('creativecrafter:creative_crafter').toJson()
    }).id(`kubejs:creativecrafter/creative_crafter`)

    //RS Creative Transmitter
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('extendedcrafting:ultimate_singularity').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('allthecompressed:nether_star_block_3x').toJson(),
            Ingredient.of('mekanism:ultimate_induction_cell').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_ingot').toJson(),
            Ingredient.of('refinedstorage:wireless_transmitter').toJson()
        ],
        energy: '178000000',
        result: Item.of('creativewirelesstransmitter:creative_wireless_transmitter').toJson()
    }).id(`kubejs:creativewirelesstransmitter/creative_wireless_transmitter`)

    //Integrated Dynamics
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('integrateddynamics:energy_battery').toJson(),
            Ingredient.of('mekanism:ultimate_induction_cell').toJson(),
            Ingredient.of('extendedcrafting:ultimate_singularity').toJson(),
            Ingredient.of('kubejs:personal_id').toJson(),
            Ingredient.of('ftbic:ev_battery').toJson(),
        ],
        energy: '2000000000',
        result: Item.of('integrateddynamics:energy_battery_creative').toJson()
    }).id(`kubejs:energizing/integrateddynamics_energy_battery_creative`)

    //Powah Creative Energy Cell
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('powah:energy_cell_nitro').toJson(),
            Ingredient.of('mekanism:ultimate_induction_cell').toJson(),
            Ingredient.of('kubejs:personal_id').toJson(),
            Ingredient.of('extendedcrafting:ultimate_singularity').toJson(),
            Ingredient.of(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),).toJson(),
        ],
        energy: '2147483647',
        result: Item.of('powah:energy_cell_creative').toJson()
    }).id(`kubejs:energizing/powah_energy_cell_creative`)

    //Pneumatic Craft Creative Compressor
    pressure([
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_pressure_tube', 'count': 64 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:electrostatic_compressor', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:flux_compressor', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'kubejs:personal_id', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_air_compressor', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_liquid_compressor', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_pressure_tube', 'count': 64 }
    ], 'pneumaticcraft:creative_compressor', 1, 4.9)

    //Pneumatic Craft Creative Compressed Iron Block
    pressure([
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:nether_star_block_5x', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'kubejs:personal_id', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthemodium:unobtainium_block', 'count': 3 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 }
    ], 'pneumaticcraft:creative_compressed_iron_block', 1, 4.9)

    //Refined Storage Creative Wireless Grid
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:wireless_grid').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2100000000',
        result: Item.of('refinedstorage:creative_wireless_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_grid`)

    //Refined Storage Creative Wireless Fluid Grid
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:wireless_fluid_grid').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2100000000',
        result: Item.of('refinedstorage:creative_wireless_fluid_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_fluid_grid`)

    //Refined Storage Creative Wireless Crafting Monitor
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:wireless_crafting_monitor').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2100000000',
        result: Item.of('refinedstorage:creative_wireless_crafting_monitor').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_crafting_monitor`)

    //Refined Storage Creative Wireless Crafting Grid
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorageaddons:wireless_crafting_grid').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2100000000',
        result: Item.of('refinedstorageaddons:creative_wireless_crafting_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_wireless_crafting_grid`)

    //Refined Storage Creative Portable Grid
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:portable_grid').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2100000000',
        result: Item.of('refinedstorage:creative_portable_grid').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_portable_grid`)

    //Refined Storage Creative Controller
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('refinedstorage:controller').toJson(),
            Ingredient.of('mysticalagradditions:creative_essence').toJson(),
            Ingredient.of(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),).toJson(),
            Ingredient.of('kubejs:personal_id').toJson()
        ],
        energy: '2100000000',
        result: Item.of('refinedstorage:creative_controller').toJson()
    }).id(`kubejs:energizing/refinedstorage_creative_controller`)

    //Creative Wireless Universal Grid
    pressure([
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:nether_star_block', 'count': 2 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'refinedstorage:creative_wireless_fluid_grid', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'refinedstorage:creative_wireless_grid', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:the_ultimate_block', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'mysticalagradditions:creative_essence', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'refinedstorageaddons:creative_wireless_crafting_grid', 'count': 1 },
        { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:nether_star_block', 'count': 2 }
    ], 'universalgrid:creative_wireless_universal_grid', 1, 4.9)

    removeRecipeByID(event, [
        'creativecrafter:creative_crafter',
        'creativewirelesstransmitter:creative_wireless_transmitter'
    ])

})
