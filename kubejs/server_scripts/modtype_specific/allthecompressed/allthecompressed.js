ServerEvents.recipes(event => {

    //Ender Pearl Block
    //Compressed
    event.shaped('kubejs:ender_pearl_block_1x', ['AAA', 'AAA', 'AAA'], {
        A: 'cyclic:eye_teleport'
    }).id(`kubejs:block/ender_pearl/compress/1x`)

    event.shaped('kubejs:ender_pearl_block_2x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_1x'
    }).id(`kubejs:block/ender_pearl/compress/2x`)

    event.shaped('kubejs:ender_pearl_block_3x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_2x'
    }).id(`kubejs:block/ender_pearl/compress/3x`)

    event.shaped('kubejs:ender_pearl_block_4x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_3x'
    }).id(`kubejs:block/ender_pearl/compress/4x`)

    event.shaped('kubejs:ender_pearl_block_5x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_4x'
    }).id(`kubejs:block/ender_pearl/compress/5x`)

    event.shaped('kubejs:ender_pearl_block_6x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_5x'
    }).id(`kubejs:block/ender_pearl/compress/6x`)

    event.shaped('kubejs:ender_pearl_block_7x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_6x'
    }).id(`kubejs:block/ender_pearl/compress/7x`)

    event.shaped('kubejs:ender_pearl_block_8x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_7x'
    }).id(`kubejs:block/ender_pearl/compress/8x`)

    event.shaped('kubejs:ender_pearl_block_9x', ['AAA', 'AAA', 'AAA'], {
        A: 'kubejs:ender_pearl_block_8x'
    }).id(`kubejs:block/ender_pearl/compress/9x`)

    //Decompress
    event.shapeless('9x cyclic:eye_teleport', ['kubejs:ender_pearl_block_1x']).id(`kubejs:block/ender_pearl/decompress/1x`)
    event.shapeless('9x kubejs:ender_pearl_block_1x', ['kubejs:ender_pearl_block_2x']).id(`kubejs:block/ender_pearl/decompress/2x`)
    event.shapeless('9x kubejs:ender_pearl_block_2x', ['kubejs:ender_pearl_block_3x']).id(`kubejs:block/ender_pearl/decompress/3x`)
    event.shapeless('9x kubejs:ender_pearl_block_3x', ['kubejs:ender_pearl_block_4x']).id(`kubejs:block/ender_pearl/decompress/4x`)
    event.shapeless('9x kubejs:ender_pearl_block_4x', ['kubejs:ender_pearl_block_5x']).id(`kubejs:block/ender_pearl/decompress/5x`)
    event.shapeless('9x kubejs:ender_pearl_block_5x', ['kubejs:ender_pearl_block_6x']).id(`kubejs:block/ender_pearl/decompress/6x`)
    event.shapeless('9x kubejs:ender_pearl_block_6x', ['kubejs:ender_pearl_block_7x']).id(`kubejs:block/ender_pearl/decompress/7x`)
    event.shapeless('9x kubejs:ender_pearl_block_7x', ['kubejs:ender_pearl_block_8x']).id(`kubejs:block/ender_pearl/decompress/8x`)
    event.shapeless('9x kubejs:ender_pearl_block_8x', ['kubejs:ender_pearl_block_9x']).id(`kubejs:block/ender_pearl/decompress/9x`)

})
