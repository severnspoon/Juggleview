function() {
  var form = $(this);
  var fdoc = form.serializeObject();
  fdoc.created_at = new Date();
  fdoc.profile = $$("#profile").profile;
  fdoc.teamMembers=form[0].team.value.split(",");
  fdoc.complexity = (fdoc.teamMembers.length-2>0)?fdoc.teamMembers.length+1:3;
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
    }
  });
  return false;
};
