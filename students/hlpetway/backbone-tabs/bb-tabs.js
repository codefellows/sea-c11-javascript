$(function () {

    var TabModel = Backbone.Model.extend({
        defaults: {
            name: '',
            content: ''
        }
    });

    var TabsCollection = Backbone.Collection.extend({
        model: TabModel,
        url: 'http://rs.hankyates.com:3000/v2/content'
    });

    var TabView = Backbone.View.extend({

        template: _.template($('#tabTemplate').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    var AppView = Backbone.View.extend({

        el: '#tabs-app',

        events: {
            'click .tab-name': 'clickTab'
        },

        initialize: function () {
            var self = this;
            this.$tabsList = this.$('.tab-list');
            this.$activeTabContent = this.$('.active-tab-content');
            this.tabs = new TabsCollection;
            this.listenTo(this.tabs, 'add', this.addTab);
            this.tabs.fetch({
                success: function () {
                    self.render();
                }
            });
        },

        render: function () {
            var $homeTab = $('.tab').eq(0);
            this.activateTab($homeTab);
        },

        addTab: function (tab) {
            var tabView = new TabView({
                model: tab
            });
            this.$tabsList.append(tabView.el);
        },

        clickTab: function (e) {
            e.preventDefault();
            this.activateTab($(e.target).parents('.tab'));
        },
        
        activateTab: function ($tab) {
            var tabContent = $tab.find('.tab-content').html(),
                $allTabs = this.$el.find('.tab');

            this.$activeTabContent.html(tabContent);

            $allTabs.removeClass('active');

            $tab.addClass('active');
        }

    });

    new AppView();

});

