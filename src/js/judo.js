import {
    get
} from 'getall';
import {
    getAll
} from 'getall';
import {
    getId
} from 'getall';
$.holdReady(true);
$.getScript('getall.js', function () {
    $.holdReady(false);
    console.log($.holdReady(false));
})
