var diffLoger = require('../lib/diff-logger');

require('colors');

describe('\'diffHtml\'', function () {

    it('must return an empty string', function () {

        var inp = [ {
                value: 'text',
                added: undefined,
                removed: undefined
            } ];

        diffLoger.getDiffText(inp).must.be.equal('');
    });

    it('must return a diff string', function () {

        var inp = [ {
                value: 'texttexttexttexttexttexttexttexttexttexttext',
                added: undefined,
                removed: undefined
            }, {
                value: '!',
                added: true,
                removed: undefined
            }, {
                value: 'Text',
                added: undefined,
                removed: undefined
            }, {
                value: '!',
                added: true,
                removed: undefined
            }, {
                value: 'texttexttexttext',
                added: undefined,
                removed: undefined
            } ],

            out = '\n...\n' + 'texttexttexttexttext'.grey + '!'.green + 'Text'.grey + '!'.green + 'texttexttexttext'.grey;

        diffLoger.getDiffText(inp).must.be.eql(out);
    });

    it('must consider negative value of \'charsAroundDiff\' option', function () {
        var inp = [ {
                value: 'text',
                added: undefined,
                removed: undefined
            } ];

        diffLoger.getDiffText(inp, { charsAroundDiff: -5 } ).must.be.equal('');
    });



    it('must return a diff when there is nothing else in the input', function () {

        var inp = [ {
                value: 'texttexttexttexttexttexttexttexttexttexttext',
                added: true,
                removed: undefined
            }, {
                value: 'ololoololoololoololoololoololoololoololoolol',
                added: false,
                removed: true
            } ],

            out = '\n' + 'texttexttexttexttexttexttexttexttexttexttext'.green + 'ololoololoololoololoololoololoololoololoolol'.red;

        diffLoger.getDiffText(inp).must.be.eql(out);
    });

    it('must return a diff on the beginning of the input', function () {

        var inp = [ {
                value: 'texttexttext',
                added: undefined,
                removed: undefined
            }, {
                value: 'text',
                added: undefined,
                removed: true
            }, {
                value: 'texttexttexttext',
                added: undefined,
                removed: undefined
            } ],

            out = '\n' + 'texttexttext'.grey + 'text'.red + 'texttexttexttext'.grey;

        diffLoger.getDiffText(inp).must.be.eql(out);
    });

    it('must return several diffs', function () {

        var inp = [ {
                value: 'texttexttexttexttexttexttexttexttexttexttext',
                added: undefined,
                removed: undefined
            }, {
                value: 'text',
                added: undefined,
                removed: true
            }, {
                value: 'texttexttexttexttexttexttexttexttexttexttext',
                added: undefined,
                removed: undefined
            }, {
                value: '!',
                added: true,
                removed: false
            }, {
                value: 'text',
                added: undefined,
                removed: undefined
            }, {
                value: '!',
                added: true,
                removed: false
            }, {
                value: 'texttexttexttexttext',
                added: undefined,
                removed: undefined
            } ],

            out = '\n...\n' + 'texttexttexttexttext'.grey + 'text'.red + 'texttexttexttexttext'.grey + '\n...\n' + 'texttexttexttexttext'.grey + '!'.green + 'text'.grey + '!'.green + 'texttexttexttexttext'.grey;

        diffLoger.getDiffText(inp).must.be.eql(out);
    });

});
