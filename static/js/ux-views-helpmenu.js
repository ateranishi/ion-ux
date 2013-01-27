// INTERACTIONS_OBJECT = {};
INTERACTIONS_OBJECT.help_interactions = ["Help Contents", "Version Info"]

IONUX.Views.HelpMenu = Backbone.View.extend({
  el: "#topbar #help",
  events: {
    "click #helpmenu-version": "version_clicked"
  },
  modal_template: '<div id="version-overlay" class="modal-ooi modal hide"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h1>Version Information</h1></div><div class="modal-body"><dl><% _.each(version, function(v, k, l) { %><dt><%= k %></dt><dd><%= v %></dd><% }) %></dl></div></div>',
  version_clicked: function() {
    var modal_html = _.template(this.modal_template)(this.model.attributes);
    $(modal_html).modal()
      .on('hidden', function() {
        $('#version-overlay').remove();
      });
  }

});