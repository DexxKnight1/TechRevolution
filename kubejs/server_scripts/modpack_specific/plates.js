ServerEvents.recipes(event => {

    const metalThermal = [
        'rose_gold',
        'netherite'
    ]
    metalThermal.forEach((metalThermal) => {
        modifyShapeless(event, `thermal:${metalThermal}_plate`, 1, ['#forge:all_hammers', `2x #forge:ingots/${metalThermal}`])
    })

    const metalAlltheores = [
        'aluminum',
        'iridium',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'steel',
        'invar',
        'electrum',
        'bronze',
        'iron',
        'gold',
        'copper',
        'enderium',
        'lumium',
        'signalum',
        'constantan',
        'brass'
    ]
    metalAlltheores.forEach((metalAlltheores) => {
        modifyShapeless(event, `alltheores:${metalAlltheores}_plate`, 1, ['#forge:all_hammers', `2x #forge:ingots/${metalAlltheores}`])
        removeRecipeByID(event, [`alltheores:${metalAlltheores}_plate`])
    })

    const metalAllthemodium = [
        'allthemodium',
        'vibranium',
        'unobtainium'
    ]
    metalAllthemodium.forEach((metalAllthemodium) => {
        modifyShapeless(event, `allthemodium:${metalAllthemodium}_plate`, 1, ['#forge:all_hammers', `2x #forge:ingots/${metalAllthemodium}`])
    })

    const metalThermalExtra = [
        'soul_infused',
        'shellite',
        'twinite',
        'dragonsteel'
    ]
    metalThermalExtra.forEach((metalThermalExtra) => {
        modifyShapeless(event, `thermal_extra:${metalThermalExtra}_plate`, 1, ['#forge:all_hammers', `2x #forge:ingots/${metalThermalExtra}`])
    })

    const metalAdAstra = [
        'calorite',
        'ostrum',
        'desh'
    ]
    metalAdAstra.forEach((metalAdAstra) => {
        modifyShapeless(event, `ad_astra:${metalAdAstra}_plate`, 1, ['#forge:all_hammers', `2x #forge:ingots/${metalAdAstra}`])
    })

    modifyShapeless(event, 'alltheores:diamond_plate', 1, ['#forge:all_hammers','2x #forge:gems/diamond'])


    removeRecipeByID(event, [
        'ad_astra:hammering/steel_plate',
        'ad_astra:hammering/iron_plate',
        'ad_astra:hammering/calorite_plate',
        'ad_astra:hammering/ostrum_plate',
        'ad_astra:hammering/desh_plate',
        'alltheores:diamond_plate',
        'allthemodium:allthemodium_plate',
        'allthemodium:vibranium_plate',
        'allthemodium:unobtainium_plate'
    ])

})
