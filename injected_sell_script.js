function quicksell(quicksellprice) {
	$J.ajax( {
			url: 'https://steamcommunity.com/market/sellitem/',
			type: 'POST',
			data: {
				sessionid: g_sessionID,
				appid: g_ActiveInventory.selectedItem.appid,
				contextid: g_ActiveInventory.selectedItem.contextid,
				assetid: g_ActiveInventory.selectedItem.id,
				amount: 1,
				price: quicksellprice
			},
			crossDomain: true,
			xhrFields: { withCredentials: true }
		} ).done( function ( data ) {
			//SellItemDialog.OnSuccess( { responseJSON: data } );
		} ).fail( function( jqxhr ) {
			// jquery doesn't parse json on fail
			// var data = $J.parseJSON( jqxhr.responseText );
			// SellItemDialog.OnFailure( { responseJSON: data } );
		} );
}