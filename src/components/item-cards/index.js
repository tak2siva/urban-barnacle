module.exports = require('marko-widgets').defineComponent({

    template: require('./template.marko'),

    getInitialProps: function(input){
        var items = require('./items.js');
        return items;
    },

    getInitialState: function(input) {
        return input;
    },

    getTemplateData: function(state, input) {
        var items = input ? input : state;
        return {
            items: items.elements[0].browseGuidanceItem,
            containerClassName: "item-cards-container",
            className: "item-card"
        };
    },

    handleDecrementClick: function() {
        // Change the internal state (triggers a rerender)
        this.setState('value', this.state.value - 1);
    },
    handleIncrementClick: function() {
        // Change the internal state (triggers a rerender)
        this.setState('value', this.state.value + 1);
    }
});
