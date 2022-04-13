/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2022, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/
import {
    createOpenMct,
    resetApplicationState
} from 'utils/testing';

describe('Gaugue plugin', () => {
    let openmct;
    let element;

    beforeEach((done) => {
        element = document.createElement('div');
        element.style.display = 'block';
        element.style.width = '1920px';
        element.style.height = '1080px';

        openmct = createOpenMct();
        openmct.on('start', done);
        openmct.startHeadless(element);

    });

    afterEach(() => {
        return resetApplicationState(openmct);
    });

    it('Plugin installed by default', () => {
        const gaugueType = openmct.types.get('gauge');

        expect(gaugueType).not.toBeNull();
        expect(gaugueType.definition.name).toEqual('Gauge');
    });

    it('Gaugue plugin is creatable', () => {
        const gaugueType = openmct.types.get('gauge');

        expect(gaugueType.definition.creatable).toBeTrue();
    });
});