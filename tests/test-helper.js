import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import setupSinon from 'ember-sinon-qunit';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

setupSinon();

start();
