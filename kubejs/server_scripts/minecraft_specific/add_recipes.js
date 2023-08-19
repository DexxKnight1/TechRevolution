ServerEvents.recipes(event => {

    event.shaped('minecraft:furnace', ['ABA', 'B B', 'ABA'], {
        A: 'allthecompressed:cobblestone_block_1x',
        B: '#forge:cobblestone'
    }).id(`kubejs:minecraft/furnace`)

    event.shaped('minecraft:crafting_table', ['AB ', 'BA '], {
        A: '#minecraft:planks',
        B: '#minecraft:logs'
    }).id(`kubejs:minecraft/crafting/table`)

    event.shaped('4x minecraft:chest', ['AAA', 'A A', 'AAA'], {
        A: '#minecraft:logs'
    }).id(`kubejs:minecraft/chest_from_logs`)

    event.shaped('minecraft:chest', ['AAA', 'A A', 'AAA'], {
        A: '#minecraft:planks'
    }).id(`kubejs:minecraft/chest_from_planks`)

    event.shaped('minecraft:trapped_chest', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:planks',
        B: 'minecraft:tripwire_hook'
    }).id(`kubejs:minecraft/trapped_chest`)

    event.shaped('minecraft:comparator', [' A ', 'ABA', 'CCC'], {
        A: 'minecraft:redstone_torch',
        B: '#ae2:all_quartz',
        C: 'minecraft:stone'
    }).id(`kubejs:minecraft/comparator`)

    event.shaped('minecraft:name_tag', ['  A', ' B ', 'B  '], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:paper'
    }).id(`kubejs:minecraft/name_tag`)

    event.shaped('minecraft:gravel', ['AA ', 'AA '], {
        A: 'minecraft:flint'
    }).id(`kubejs:minecraft/gravel`)

    event.shaped('16x minecraft:stick', ['A', 'A'], {
        A: '#minecraft:logs'
    }).id(`kubejs:minecraft/stick`)

    event.shaped('minecraft:sponge', ['CAC', 'ABA', 'CAC'], {
        A: 'minecraft:bucket',
        B: '#forge:dyes/yellow',
        C: '#minecraft:wool'
    }).id(`kubejs:minecraft/sponge`)

    event.shaped('minecraft:dragon_breath', [' D ', 'ABA', ' D '], {
        B: 'minecraft:glass_bottle',
        A: 'mysticalagriculture:air_essence',
        D: 'mysticalagriculture:dragon_egg_essence'
    }).id(`kubejs:minecraft/dragon_breath`)

    event.shaped('minecraft:bell', ['AAA', 'BBB', ' C '], {
        A: 'minecraft:stick',
        B: 'minecraft:gold_ingot',
        C: 'minecraft:gold_block'
    }).id(`kubejs:minecraft/bell`)

    event.shaped('2x minecraft:phantom_membrane', ['  A', ' AB', 'ABC'], {
        A: 'minecraft:feather',
        B: 'minecraft:cobweb',
        C: 'silentgear:fine_silk'
    }).id(`kubejs:minecraft/phantom/membrane`)

    event.shaped('minecraft:elytra', ['ABA', 'CDC', 'E E'], {
        A: 'darkutils:slowfall_plate',
        B: 'minecraft:nether_star',
        C: 'botania:mana_string',
        D: 'mekanism:jetpack',
        E: 'silentgear:fluffy_feather'
    }).id(`kubejs:minecraft/elytra`)

    event.shaped('minecraft:totem_of_undying', ['ABA', 'BCB', 'EBE'], {
        A: '#forge:storage_blocks/emerald',
        B: 'tombstone:grave_dust',
        C: 'quark:soul_bead',
        E: 'tombstone:ankh_of_pray'
    }).id(`kubejs:minecraft/totem_of_undying`)

    event.shaped('minecraft:hopper', ['ABA', 'ABA', ' A '], {
        A: 'minecraft:iron_ingot',
        B: '#minecraft:logs'
    }).id(`kubejs:minecraft/hopper`)

    event.shaped('12x minecraft:grass', [' E ', 'E E'], {
        E: 'mysticalagriculture:nature_essence' 
    }).id('kubejs:minecraft/grass')

    event.shaped('minecraft:saddle', ['AAA', 'BCB', 'D D'], {
        A: '#forge:leather',
        B: '#forge:rope',
        C: '#forge:wool',
        D: '#forge:ingots/iron'
    }).id(`kubejs:minecraft/saddle`)

    event.shaped('minecraft:iron_horse_armor', ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:saddle',
        C: '#forge:rope'
    }).id(`kubejs:minecraft/iron_horse_armor`)

    event.shaped('minecraft:golden_horse_armor', ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:saddle',
        C: '#forge:rope'
    }).id(`kubejs:minecraft/golden_horse_armor`)

    event.shaped('minecraft:diamond_horse_armor', ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:diamond',
        B: 'minecraft:saddle',
        C: '#forge:rope'
    }).id(`kubejs:minecraft/diamond_horse_armor`)

    //Concrete Conversion
    event.shaped('8x minecraft:white_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:white_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/white_concrete`)

    event.shaped('8x minecraft:orange_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:orange_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/orange_concrete`)

    event.shaped('8x minecraft:magenta_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:magenta_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/magenta_concrete`)

    event.shaped('8x minecraft:light_blue_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:light_blue_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/light_blue_concrete`)

    event.shaped('8x minecraft:yellow_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:yellow_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/yellow_concrete`)

    event.shaped('8x minecraft:lime_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:lime_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/lime_concrete`)

    event.shaped('8x minecraft:pink_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:pink_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/pink_concrete`)

    event.shaped('8x minecraft:gray_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:gray_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/gray_concrete`)

    event.shaped('8x minecraft:light_gray_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:light_gray_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/light_gray_concrete`)

    event.shaped('8x minecraft:cyan_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:cyan_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/cyan_concrete`)

    event.shaped('8x minecraft:purple_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:purple_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/purple_concrete`)

    event.shaped('8x minecraft:blue_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:blue_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/blue_concrete`)

    event.shaped('8x minecraft:brown_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:brown_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/brown_concrete`)

    event.shaped('8x minecraft:green_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:green_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/green_concrete`)

    event.shaped('8x minecraft:red_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:red_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/red_concrete`)

    event.shaped('8x minecraft:black_concrete', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:black_concrete_powder',
        B: '#forge:water'
    }).id(`kubejs:minecraft/black_concrete`)

    //Concrete Powders
    event.shaped('8x minecraft:white_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/white',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/white_concrete_powder`)

    event.shaped('8x minecraft:orange_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/orange',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/orange_concrete_powder`)

    event.shaped('8x minecraft:magenta_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/magenta',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/magenta_concrete_powder`)

    event.shaped('8x minecraft:light_blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_blue',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/light_blue_concrete_powder`)

    event.shaped('8x minecraft:yellow_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/yellow',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/yellow_concrete_powder`)

    event.shaped('8x minecraft:lime_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/lime',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/lime_concrete_powder`)

    event.shaped('8x minecraft:pink_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/pink',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/pink_concrete_powder`)

    event.shaped('8x minecraft:gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/gray',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/gray_concrete_powder`)

    event.shaped('8x minecraft:light_gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_gray',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/light_gray_concrete_powder`)

    event.shaped('8x minecraft:cyan_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/cyan',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/cyan_concrete_powder`)

    event.shaped('8x minecraft:purple_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/purple',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/purple_concrete_powder`)

    event.shaped('8x minecraft:blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/blue',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/blue_concrete_powder`)

    event.shaped('8x minecraft:brown_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/brown',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/brown_concrete_powder`)

    event.shaped('8x minecraft:green_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/green',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/green_concrete_powder`)

    event.shaped('8x minecraft:red_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/red',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/red_concrete_powder`)

    event.shaped('8x minecraft:black_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/black',
        B: '#forge:sand',
        C: '#forge:gravel'
    }).id(`kubejs:minecraft/black_concrete_powder`)

    event.shaped('8x minecraft:white_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/white',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/white_concrete_powder_with_slag`)

    event.shaped('8x minecraft:orange_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/orange',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/orange_concrete_powder_with_slag`)

    event.shaped('8x minecraft:magenta_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/magenta',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/magenta_concrete_powder_with_slag`)

    event.shaped('8x minecraft:light_blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_blue',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/light_blue_concrete_powder_with_slag`)

    event.shaped('8x minecraft:yellow_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/yellow',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/yellow_concrete_powder_with_slag`)

    event.shaped('8x minecraft:lime_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/lime',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/lime_concrete_powder_with_slag`)

    event.shaped('8x minecraft:pink_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/pink',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/pink_concrete_powder_with_slag`)

    event.shaped('8x minecraft:gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/gray',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/gray_concrete_powder_with_slag`)

    event.shaped('8x minecraft:light_gray_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/light_gray',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/light_gray_concrete_powder_with_slag`)

    event.shaped('8x minecraft:cyan_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/cyan',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/cyan_concrete_powder_with_slag`)

    event.shaped('8x minecraft:purple_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/purple',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/purple_concrete_powder_with_slag`)

    event.shaped('8x minecraft:blue_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/blue',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/blue_concrete_powder_with_slag`)

    event.shaped('8x minecraft:brown_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/brown',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/brown_concrete_powder_with_slag`)

    event.shaped('8x minecraft:green_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/green',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/green_concrete_powder_with_slag`)

    event.shaped('8x minecraft:red_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/red',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/red_concrete_powder_with_slag`)

    event.shaped('8x minecraft:black_concrete_powder', ['ABB', 'BBC', 'CCC'], {
        A: '#forge:dyes/black',
        B: '#forge:sand',
        C: '#forge:slag'
    }).id(`kubejs:minecraft/black_concrete_powder_with_slag`)

    //Stained Glass
    event.shaped('8x minecraft:white_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_stained_glass`)

    event.shaped('8x minecraft:orange_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_stained_glass`)

    event.shaped('8x minecraft:magenta_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_stained_glass`)

    event.shaped('8x minecraft:light_blue_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_stained_glass`)

    event.shaped('8x minecraft:yellow_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_stained_glass`)

    event.shaped('8x minecraft:lime_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_stained_glass`)

    event.shaped('8x minecraft:pink_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_stained_glass`)

    event.shaped('8x minecraft:gray_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_stained_glass`)

    event.shaped('8x minecraft:light_gray_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_stained_glass`)

    event.shaped('8x minecraft:cyan_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_stained_glass`)

    event.shaped('8x minecraft:purple_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_stained_glass`)

    event.shaped('8x minecraft:blue_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_stained_glass`)

    event.shaped('8x minecraft:brown_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_stained_glass`)

    event.shaped('8x minecraft:green_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_stained_glass`)

    event.shaped('8x minecraft:red_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_stained_glass`)

    event.shaped('8x minecraft:black_stained_glass', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_stained_glass`)

    //Stained Glass Pane
    event.shaped('8x minecraft:white_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_stained_glass_pane`)

    event.shaped('8x minecraft:orange_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_stained_glass_pane`)

    event.shaped('8x minecraft:magenta_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_stained_glass_pane`)

    event.shaped('8x minecraft:light_blue_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_stained_glass_pane`)

    event.shaped('8x minecraft:yellow_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_stained_glass_pane`)

    event.shaped('8x minecraft:lime_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_stained_glass_pane`)

    event.shaped('8x minecraft:pink_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_stained_glass_pane`)

    event.shaped('8x minecraft:gray_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_stained_glass_pane`)

    event.shaped('8x minecraft:light_gray_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_stained_glass_pane`)

    event.shaped('8x minecraft:cyan_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_stained_glass_pane`)

    event.shaped('8x minecraft:purple_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_stained_glass_pane`)

    event.shaped('8x minecraft:blue_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_stained_glass_pane`)

    event.shaped('8x minecraft:brown_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_stained_glass_pane`)

    event.shaped('8x minecraft:green_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_stained_glass_pane`)

    event.shaped('8x minecraft:red_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_stained_glass_pane`)

    event.shaped('8x minecraft:black_stained_glass_pane', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass_panes',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_stained_glass_pane`)

    //Terracotta
    event.shaped('8x minecraft:white_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_terracotta`)
    
    event.shaped('8x minecraft:orange_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_terracotta`)
    
    event.shaped('8x minecraft:magenta_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_terracotta`)
    
    event.shaped('8x minecraft:light_blue_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_terracotta`)
    
    event.shaped('8x minecraft:yellow_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_terracotta`)
    
    event.shaped('8x minecraft:lime_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_terracotta`)
    
    event.shaped('8x minecraft:pink_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_terracotta`)
    
    event.shaped('8x minecraft:gray_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_terracotta`)
    
    event.shaped('8x minecraft:light_gray_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_terracotta`)
    
    event.shaped('8x minecraft:cyan_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_terracotta`)
    
    event.shaped('8x minecraft:purple_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_terracotta`)
    
    event.shaped('8x minecraft:blue_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_terracotta`)
    
    event.shaped('8x minecraft:brown_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_terracotta`)
    
    event.shaped('8x minecraft:green_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_terracotta`)
    
    event.shaped('8x minecraft:red_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_terracotta`)
    
    event.shaped('8x minecraft:black_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:terracotta',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_terracotta`)

    //Glazed Terracotta
    event.shaped('8x minecraft:white_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_glazed_terracotta`)

    event.shaped('8x minecraft:orange_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_glazed_terracotta`)

    event.shaped('8x minecraft:magenta_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_glazed_terracotta`)

    event.shaped('8x minecraft:light_blue_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_glazed_terracotta`)

    event.shaped('8x minecraft:yellow_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_glazed_terracotta`)

    event.shaped('8x minecraft:lime_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_glazed_terracotta`)

    event.shaped('8x minecraft:pink_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_glazed_terracotta`)

    event.shaped('8x minecraft:gray_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_glazed_terracotta`)

    event.shaped('8x minecraft:light_gray_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_glazed_terracotta`)

    event.shaped('8x minecraft:cyan_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_glazed_terracotta`)

    event.shaped('8x minecraft:purple_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_glazed_terracotta`)

    event.shaped('8x minecraft:blue_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_glazed_terracotta`)

    event.shaped('8x minecraft:brown_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_glazed_terracotta`)

    event.shaped('8x minecraft:green_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_glazed_terracotta`)

    event.shaped('8x minecraft:red_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_glazed_terracotta`)

    event.shaped('8x minecraft:black_glazed_terracotta', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glazed_terracotta',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_glazed_terracotta`)

    //Wool
    event.shaped('8x minecraft:white_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_wool`)
        
    event.shaped('8x minecraft:orange_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_wool`)
        
    event.shaped('8x minecraft:magenta_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_wool`)
        
    event.shaped('8x minecraft:light_blue_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_wool`)
        
    event.shaped('8x minecraft:yellow_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_wool`)
        
    event.shaped('8x minecraft:lime_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_wool`)
        
    event.shaped('8x minecraft:pink_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_wool`)
        
    event.shaped('8x minecraft:gray_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_wool`)
        
    event.shaped('8x minecraft:light_gray_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_wool`)
        
    event.shaped('8x minecraft:cyan_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_wool`)
        
    event.shaped('8x minecraft:purple_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_wool`)
        
    event.shaped('8x minecraft:blue_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_wool`)
        
    event.shaped('8x minecraft:brown_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_wool`)
        
    event.shaped('8x minecraft:green_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_wool`)
        
    event.shaped('8x minecraft:red_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_wool`)
        
    event.shaped('8x minecraft:black_wool', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:wool',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_wool`)

    //Carpet
    event.shaped('8x minecraft:white_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/white'
    }).id(`kubejs:minecraft/white_carpet`)
        
    event.shaped('8x minecraft:orange_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/orange'
    }).id(`kubejs:minecraft/orange_carpet`)
        
    event.shaped('8x minecraft:magenta_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/magenta'
    }).id(`kubejs:minecraft/magenta_carpet`)
        
    event.shaped('8x minecraft:light_blue_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/light_blue'
    }).id(`kubejs:minecraft/light_blue_carpet`)
        
    event.shaped('8x minecraft:yellow_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/yellow'
    }).id(`kubejs:minecraft/yellow_carpet`)
        
    event.shaped('8x minecraft:lime_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/lime'
    }).id(`kubejs:minecraft/lime_carpet`)
        
    event.shaped('8x minecraft:pink_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/pink'
    }).id(`kubejs:minecraft/pink_carpet`)
        
    event.shaped('8x minecraft:gray_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/gray'
    }).id(`kubejs:minecraft/gray_carpet`)
        
    event.shaped('8x minecraft:light_gray_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/light_gray'
    }).id(`kubejs:minecraft/light_gray_carpet`)
        
    event.shaped('8x minecraft:cyan_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/cyan'
    }).id(`kubejs:minecraft/cyan_carpet`)
        
    event.shaped('8x minecraft:purple_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/purple'
    }).id(`kubejs:minecraft/purple_carpet`)
        
    event.shaped('8x minecraft:blue_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/blue'
    }).id(`kubejs:minecraft/blue_carpet`)
        
    event.shaped('8x minecraft:brown_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/brown'
    }).id(`kubejs:minecraft/brown_carpet`)
        
    event.shaped('8x minecraft:green_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/green'
    }).id(`kubejs:minecraft/green_carpet`)
        
    event.shaped('8x minecraft:red_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/red'
    }).id(`kubejs:minecraft/red_carpet`)
        
    event.shaped('8x minecraft:black_carpet', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:wool_carpets',
        B: '#forge:dyes/black'
    }).id(`kubejs:minecraft/black_carpet`)

    event.shaped('minecraft:candle', ['A', 'B', 'B'], {
        A: '#forge:string',
        B: '#forge:honeycombs'
    }).id(`kubejs:minecraft/candle`)

    event.shapeless('3x minecraft:bone', 'minecraft:bone_block').id(`kubejs:minecraft/bone`)
    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/clay_ball`)
    event.shapeless('4x minecraft:string', '#minecraft:wool').id(`kubejs:minecraft/string`)
    event.shapeless('4x minecraft:glowstone_dust', 'minecraft:glowstone').id(`kubejs:minecraft/glowstone_dust`)
    event.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/quartz`)
    event.shapeless('4x minecraft:snowball', 'minecraft:snow_block').id(`kubejs:minecraft/snowball`)
    event.shapeless('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id(`kubejs:minecraft/nether_wart`)
    event.shapeless('9x minecraft:ice', 'minecraft:packed_ice').id(`kubejs:minecraft/ice`)
    event.shapeless('9x minecraft:packed_ice', 'minecraft:blue_ice').id(`kubejs:minecraft/packed_ice`)
    event.shapeless('minecraft:blaze_rod', ['minecraft:blaze_powder', 'minecraft:blaze_powder']).id(`kubejs:minecraft/blaze_rod`)
    event.shapeless('minecraft:crying_obsidian', ['minecraft:obsidian', 'minecraft:ghast_tear']).id(`kubejs:minecraft/crying_obsidian`)
    event.shapeless('minecraft:experience_bottle', ['minecraft:lapis_lazuli', 'minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:quartz', 'minecraft:glass_bottle']).id(`kubejs:minecraft/experience_bottle`)
    event.shapeless('minecraft:experience_bottle', ['minecraft:golden_apple', 'minecraft:glass_bottle']).id(`kubejs:minecraft/experience/bottle`)
    
    //Beds
    event.shapeless('minecraft:white_bed', ['#minecraft:beds', '#forge:dyes/white']).id(`kubejs:minecraft/white/bed`)
    event.shapeless('minecraft:orange_bed', ['#minecraft:beds', '#forge:dyes/orange']).id(`kubejs:minecraft/orange/bed`)
    event.shapeless('minecraft:magenta_bed', ['#minecraft:beds', '#forge:dyes/magenta']).id(`kubejs:minecraft/magenta/bed`)
    event.shapeless('minecraft:light_blue_bed', ['#minecraft:beds', '#forge:dyes/light_blue']).id(`kubejs:minecraft/light_blue/bed`)
    event.shapeless('minecraft:yellow_bed', ['#minecraft:beds', '#forge:dyes/yellow']).id(`kubejs:minecraft/yellow/bed`)
    event.shapeless('minecraft:lime_bed', ['#minecraft:beds', '#forge:dyes/lime']).id(`kubejs:minecraft/lime/bed`)
    event.shapeless('minecraft:pink_bed', ['#minecraft:beds', '#forge:dyes/pink']).id(`kubejs:minecraft/pink/bed`)
    event.shapeless('minecraft:gray_bed', ['#minecraft:beds', '#forge:dyes/gray']).id(`kubejs:minecraft/gray/bed`)
    event.shapeless('minecraft:light_gray_bed', ['#minecraft:beds', '#forge:dyes/light_gray']).id(`kubejs:minecraft/light_gray/bed`)
    event.shapeless('minecraft:cyan_bed', ['#minecraft:beds', '#forge:dyes/cyan']).id(`kubejs:minecraft/cyan/bed`)
    event.shapeless('minecraft:purple_bed', ['#minecraft:beds', '#forge:dyes/purple']).id(`kubejs:minecraft/purple/bed`)
    event.shapeless('minecraft:blue_bed', ['#minecraft:beds', '#forge:dyes/blue']).id(`kubejs:minecraft/blue/bed`)
    event.shapeless('minecraft:brown_bed', ['#minecraft:beds', '#forge:dyes/brown']).id(`kubejs:minecraft/brown/bed`)
    event.shapeless('minecraft:green_bed', ['#minecraft:beds', '#forge:dyes/green']).id(`kubejs:minecraft/green/bed`)
    event.shapeless('minecraft:red_bed', ['#minecraft:beds', '#forge:dyes/red']).id(`kubejs:minecraft/red/bed`)
    event.shapeless('minecraft:black_bed', ['#minecraft:beds', '#forge:dyes/black']).id(`kubejs:minecraft/black/bed`)

    //Candles
    event.shapeless('minecraft:white_candle', ['#minecraft:candles', '#forge:dyes/white']).id(`kubejs:minecraft/white/candle`)
    event.shapeless('minecraft:orange_candle', ['#minecraft:candles', '#forge:dyes/orange']).id(`kubejs:minecraft/orange/candle`)
    event.shapeless('minecraft:magenta_candle', ['#minecraft:candles', '#forge:dyes/magenta']).id(`kubejs:minecraft/magenta/candle`)
    event.shapeless('minecraft:light_blue_candle', ['#minecraft:candles', '#forge:dyes/light_blue']).id(`kubejs:minecraft/light_blue/candle`)
    event.shapeless('minecraft:yellow_candle', ['#minecraft:candles', '#forge:dyes/yellow']).id(`kubejs:minecraft/yellow/candle`)
    event.shapeless('minecraft:lime_candle', ['#minecraft:candles', '#forge:dyes/lime']).id(`kubejs:minecraft/lime/candle`)
    event.shapeless('minecraft:pink_candle', ['#minecraft:candles', '#forge:dyes/pink']).id(`kubejs:minecraft/pink/candle`)
    event.shapeless('minecraft:gray_candle', ['#minecraft:candles', '#forge:dyes/gray']).id(`kubejs:minecraft/gray/candle`)
    event.shapeless('minecraft:light_gray_candle', ['#minecraft:candles', '#forge:dyes/light_gray']).id(`kubejs:minecraft/light_gray/candle`)
    event.shapeless('minecraft:cyan_candle', ['#minecraft:candles', '#forge:dyes/cyan']).id(`kubejs:minecraft/cyan/candle`)
    event.shapeless('minecraft:purple_candle', ['#minecraft:candles', '#forge:dyes/purple']).id(`kubejs:minecraft/purple/candle`)
    event.shapeless('minecraft:blue_candle', ['#minecraft:candles', '#forge:dyes/blue']).id(`kubejs:minecraft/blue/candle`)
    event.shapeless('minecraft:brown_candle', ['#minecraft:candles', '#forge:dyes/brown']).id(`kubejs:minecraft/brown/candle`)
    event.shapeless('minecraft:green_candle', ['#minecraft:candles', '#forge:dyes/green']).id(`kubejs:minecraft/green/candle`)
    event.shapeless('minecraft:red_candle', ['#minecraft:candles', '#forge:dyes/red']).id(`kubejs:minecraft/red/candle`)
    event.shapeless('minecraft:black_candle', ['#minecraft:candles', '#forge:dyes/black']).id(`kubejs:minecraft/black/candle`)

    //Shulker Boxes
    modifyShapeless(event, 'minecraft:white_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/white'])
    modifyShapeless(event, 'minecraft:orange_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/orange'])
    modifyShapeless(event, 'minecraft:magenta_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/magenta'])
    modifyShapeless(event, 'minecraft:light_blue_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/light_blue'])
    modifyShapeless(event, 'minecraft:yellow_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/yellow'])
    modifyShapeless(event, 'minecraft:lime_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/lime'])
    modifyShapeless(event, 'minecraft:pink_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/pink'])
    modifyShapeless(event, 'minecraft:gray_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/gray'])
    modifyShapeless(event, 'minecraft:light_gray_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/light_gray'])
    modifyShapeless(event, 'minecraft:cyan_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/cyan'])
    modifyShapeless(event, 'minecraft:purple_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/purple'])
    modifyShapeless(event, 'minecraft:blue_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/blue'])
    modifyShapeless(event, 'minecraft:brown_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/brown'])
    modifyShapeless(event, 'minecraft:green_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/green'])
    modifyShapeless(event, 'minecraft:red_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/red'])
    modifyShapeless(event, 'minecraft:black_shulker_box', 1, ['#minecraft:shulker_boxes', '#forge:dyes/black'])

    //Banners
    event.shapeless('minecraft:white_banner', ['#minecraft:banners', '#forge:dyes/white']).id(`kubejs:minecraft/white/banner`)
    event.shapeless('minecraft:orange_banner', ['#minecraft:banners', '#forge:dyes/orange']).id(`kubejs:minecraft/orange/banner`)
    event.shapeless('minecraft:magenta_banner', ['#minecraft:banners', '#forge:dyes/magenta']).id(`kubejs:minecraft/magenta/banner`)
    event.shapeless('minecraft:light_blue_banner', ['#minecraft:banners', '#forge:dyes/light_blue']).id(`kubejs:minecraft/light_blue/banner`)
    event.shapeless('minecraft:yellow_banner', ['#minecraft:banners', '#forge:dyes/yellow']).id(`kubejs:minecraft/yellow/banner`)
    event.shapeless('minecraft:lime_banner', ['#minecraft:banners', '#forge:dyes/lime']).id(`kubejs:minecraft/lime/banner`)
    event.shapeless('minecraft:pink_banner', ['#minecraft:banners', '#forge:dyes/pink']).id(`kubejs:minecraft/pink/banner`)
    event.shapeless('minecraft:gray_banner', ['#minecraft:banners', '#forge:dyes/gray']).id(`kubejs:minecraft/gray/banner`)
    event.shapeless('minecraft:light_gray_banner', ['#minecraft:banners', '#forge:dyes/light_gray']).id(`kubejs:minecraft/light_gray/banner`)
    event.shapeless('minecraft:cyan_banner', ['#minecraft:banners', '#forge:dyes/cyan']).id(`kubejs:minecraft/cyan/banner`)
    event.shapeless('minecraft:purple_banner', ['#minecraft:banners', '#forge:dyes/purple']).id(`kubejs:minecraft/purple/banner`)
    event.shapeless('minecraft:blue_banner', ['#minecraft:banners', '#forge:dyes/blue']).id(`kubejs:minecraft/blue/banner`)
    event.shapeless('minecraft:brown_banner', ['#minecraft:banners', '#forge:dyes/brown']).id(`kubejs:minecraft/brown/banner`)
    event.shapeless('minecraft:green_banner', ['#minecraft:banners', '#forge:dyes/green']).id(`kubejs:minecraft/green/banner`)
    event.shapeless('minecraft:red_banner', ['#minecraft:banners', '#forge:dyes/red']).id(`kubejs:minecraft/red/banner`)
    event.shapeless('minecraft:black_banner', ['#minecraft:banners', '#forge:dyes/black']).id(`kubejs:minecraft/black/banner`)

    modifyShaped(event, 'minecraft:book', 1, ['AA ', 'AB '], {
        A: '#forge:paper',
        B: '#forge:leather'
    })

    modifyShaped(event, 'minecraft:cake', 1, ['AAA', 'BCB', 'DDD'], {
        A: '#forge:milk',
        B: '#forge:sugar',
        C: '#forge:eggs',
        D: '#forge:grain'
    })

    modifyShaped(event, 'minecraft:cookie', 1, ['   ', 'ABA', '   '], {
        A: '#forge:grain',
        B: 'minecraft:cocoa_beans'
    })

    modifyShaped(event, 'minecraft:brewing_stand', 1, ['   ', ' A ', 'BBB'], {
        A: '#forge:rods/blaze',
        B: '#forge:cobblestone'
    })

    modifyShaped(event, 'minecraft:map', 1, ['AAA', 'ABA', 'AAA'], {
        A: '#forge:paper',
        B: 'minecraft:compass'
    })

    modifyShaped(event, 'minecraft:pumpkin_pie', 1, ['AB ', 'C  '], {
        A: 'minecraft:pumpkin',
        B: '#forge:sugar',
        C: '#forge:eggs'
    })

    modifyShaped(event, 'minecraft:rabbit_stew', 1, ['ABC', 'DE ', '   '], {
        A: 'minecraft:baked_potato',
        B: 'minecraft:cooked_rabbit',
        C: 'minecraft:bowl',
        D: 'minecraft:carrot',
        E: '#forge:mushrooms'
    })

    modifyShaped(event, 'minecraft:leather_horse_armor', 1, ['  A', 'ABA', 'ACA'], {
        A: 'minecraft:leather',
        B: 'minecraft:saddle',
        C: '#forge:rope'
    })

    modifyShaped(event, 'minecraft:lead', 2, ['AA ', 'AB ', '  A'], {
        A: '#forge:string',
        B: '#forge:slimeballs'
    })

    modifyShaped(event, 'minecraft:bow', 1, [' AB', 'A B', ' AB'], {
        A: '#forge:rods/wooden',
        B: '#forge:string'
    })

    modifyShaped(event, 'minecraft:arrow', 8, [' A ', ' B ', ' C '], {
        A: '#forge:arrow_top',
        B: '#forge:rods/wooden',
        C: '#forge:feathers'
    })

    modifyShaped(event, 'minecraft:end_crystal', 1, ['AAA', 'ABA', 'ACA'], {
        A: '#forge:glass',
        B: 'minecraft:ender_eye',
        C: 'minecraft:ghast_tear'
    })

    modifyShaped(event, 'minecraft:torch', 4, [' A ', ' B ', '   '], {
        A: '#minecraft:coals',
        B: '#forge:rods/wooden'
    })

    modifyShaped(event, 'minecraft:soul_torch', 4, [' A ', ' B ', ' C '], {
        A: '#minecraft:coals',
        B: '#forge:rods/wooden',
        C: '#minecraft:soul_fire_base_blocks'
    })

    modifyShaped(event, 'minecraft:smoker', 1, [' A ', 'ABA', ' A '], {
        A: '#minecraft:logs',
        B: '#misctags:furnace'
    })

    modifyShaped(event, 'minecraft:blast_furnace', 1, ['AAA', 'ABA', 'CCC'], {
        A: '#forge:ingots/iron',
        B: '#misctags:furnace',
        C: '#misctags:smooth_stone'
    })

    modifyShaped(event, 'minecraft:piston', 1, ['AAA', 'BCB', 'BDB'], {
        A: '#minecraft:planks',
        B: '#forge:cobblestone',
        C: '#forge:ingots/iron',
        D: '#forge:dusts/redstone'
    })

    modifyShaped(event, 'minecraft:dispenser', 1, ['AAA', 'ABA', 'ACA'], {
        A: '#forge:cobblestone',
        B: 'minecraft:bow',
        C: '#forge:dusts/redstone'
    })

    modifyShaped(event, 'minecraft:dropper', 1, ['AAA', 'A A', 'ABA'], {
        A: '#forge:cobblestone',
        B: '#forge:dusts/redstone'
    })

    modifyShaped(event, 'minecraft:observer', 1, ['AAA', 'BBC', 'AAA'], {
        A: '#forge:cobblestone',
        B: '#forge:dusts/redstone',
        C: '#ae2:all_quartz'
    })

    modifyShaped(event, 'minecraft:daylight_detector', 1, ['AAA', 'BBB', 'CCC'], {
        A: '#forge:glass',
        B: '#ae2:all_quartz',
        C: '#minecraft:wooden_slabs'
    })

    modifyShaped(event, 'minecraft:mushroom_stew', 1, ['AA ', 'B  '], {
        A: '#forge:mushrooms',
        B: 'minecraft:bowl'
    })

    modifyShaped(event, 'minecraft:lever', 1, ['   ', ' A ', ' B '], {
        A: '#forge:rods/wooden',
        B: '#forge:cobblestone'
    })

    modifyShaped(event, 'minecraft:redstone_lamp', 1, ['ABA', 'BCB', 'ABA'], { 
        A: '#forge:nuggets/copper',
        B: '#forge:dusts/redstone',
        C: 'minecraft:glowstone'
    })

})
