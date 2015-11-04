'use strict';

app.controller('ServicesCtrl',['$state',function ($state) {
	var Me = this;

	Me.woodVarieties = [{name:"Maple",description:"A creamy white hardwood.  Takes dark stain well.",img:"views/tables/img/maple.jpg"},
	{name:"Cherry",description:"A fine, straight grain. Unstained, it has a rich, beautiful color.",img:"views/tables/img/cherry.jpg"},
	{name:"Oak",description:"Distinctive wavy grain. A clear finish nicely highlights the grain.",img:"views/tables/img/oak.jpg"},
	{name:"Walnut",description:"A straight-grained wood. Very strong and stable; can take intricate carving." ,img:"views/tables/img/walnut.jpg"},
	{name:"Teak",description:"Texture is hard and ring porous. Extremely durable and water resistant.  Can be used outdoors without protective finish." ,img:"views/tables/img/teak.jpg"}]
 }]);