function(data) {
   $.log(data)
  var p;
  return {
    items : data.rows.map(function(r) {
      p = (r.value && r.value.profile) || {};
	  p.title = r.value && r.value.title;
	  p._id = r.value && r.value._id;
	  p.team = r.value && r.value.team;
	  p.description = r.value && r.value.description;
	  p.teamMembers = r.value && r.value.teamMembers;
	  if(!p.teamMembers)p.teamMembers=["Team: me"];
	  p.complexity = r.value && r.value.complexity;
	  if(!p.complexity)p.complexity=3;
		
	  passing=p.teamMembers.length>1?"p":"";
	  juggleSiteswap="<"+p.complexity+passing;
	  for(var i=1;i<p.teamMembers.length;i++){
		juggleSiteswap+="|"+p.complexity+passing;
	  }
	  juggleSiteswap +=">";
	  p.juggleSiteswap=juggleSiteswap;
	  return p;
    })
  }
};