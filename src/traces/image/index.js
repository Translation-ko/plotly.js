/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

module.exports = {
    attributes: require('./attributes'),
    supplyDefaults: require('./defaults'),
    calc: require('./calc'),
    plot: require('./plot').plot,
    style: require('./style'),
    hoverPoints: require('./hover'),
    eventData: require('./event_data'),

    moduleType: 'trace',
    name: 'image',
    basePlotModule: require('../../plots/cartesian'),
    categories: ['cartesian', 'svg', '2dMap', 'noSortingByValue'],
    animatable: false,
    meta: {
        description: [
            'Display an image, i.e. data on a 2D regular raster.',
            'By default, when an image is displayed in a subplot,',
            'its y axis will be reversed (ie. `autorange: \'reversed\'`),',
            'constrained to the domain (ie. `constrain: \'domain\'`)',
            'and it will have the same scale as its x axis (ie. `scaleanchor: \'x\,`)',
            'in order for pixels to be rendered as squares.'
        ].join(' ')
    }
};
