function() {
	var elem = $(this);
	command=elem.text();
	$db=$$(this).app.db;
	switch(command){
		
		case "hide":
			docId=elem.parents("dl").attr("item_id");
			$db.openDoc( docId, {
		        success: function( document ) {
                // Then use the opened doc as reference to remove.
                $db.removeDoc( document, {
                    success: function() {
                    },
                    error: function() {
                        alert( "Could not remove document with id: " + docId );
                    }
                });
            },
            error: function() {
                alert( "Could not find document with id: " + docId );
            }
		    });
			break;
		case "juggle":
			elem.parents("li.listItem").find(".view").hide();
			elem.parents("li.listItem").find(".juggleView").show();
			break;
		case "overview":
			elem.parents("li.listItem").find(".view").hide();
			elem.parents("li.listItem").find(".overview").show();
			break;
		default:
			alert(command);
			break;

	}
	
    return false;
}