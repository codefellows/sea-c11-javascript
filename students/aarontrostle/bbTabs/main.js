$(function(){

  var Tab = Backbone.Model.extend({
    defaults: {
      active: false
    },

    toggle: function() {
      this.set({
        active: !this.get('active')
      });
    }
  });

  var TabsCollection = Backbone.Collection.extend({
    model: Tab,

    url: 'http://rs.hankyates.com:3000/v2/content',

    disableActiveTab: function(tab) {
      if (tab = this.findWhere({active: true})) {
        tab.set({active: false});
      }
    }
  });

  var TabView = Backbone.View.extend({
    tagName: 'li',

    template: _.template('<a><%= name %></a>'),

    events: {
      'click': 'selectTab'
    },

    initialize: function() {
      this.listenTo(this.model, 'change:active', this.render);
    },

    render: function() {
      if (this.model.get('active') === true) {
        this.$el.addClass('active');
      } else {
        this.$el.removeClass('active');
      }

      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    selectTab: function() {
      this.model.collection.disableActiveTab();
      this.model.toggle();
    }
  });

  var TabPaneView = Backbone.View.extend({
    className: 'tab-pane',

    template: _.template('<%= content %>'),

    initialize: function() {
      this.listenTo(this.model, 'change:active', this.render);
    },

    render: function() {
      if (this.model.get('active') === true) {
        this.$el.addClass('active');
      } else {
        this.$el.removeClass('active');
      }

      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  var AppView = Backbone.View.extend({

    initialize: function() {
      var self = this;
      this.$tabs = $('#menu');
      this.$panes = $('#content');
      this.collection = new TabsCollection();
      this.listenTo(this.collection, 'add', this.addTab);
      this.collection.fetch({
        success: function() {
          self.render();
        }
      });
    },

    render: function() {
      this.collection.models[0].toggle();
    },

    addTab: function(tab) {
      var tabView = new TabView({ model: tab });
      var tabPaneView = new TabPaneView({ model: tab });
      this.$tabs.append(tabView.render().el);
      this.$panes.append(tabPaneView.render().el);
    }
  });

  new AppView();

});
