// JavaScript Document

//Change Display
function d(val)	{
	document.getElementById("d").value	=	val;
}

//	Type numbers 	and 	operators
function v(val)		{
	if( val == "π" ) {
		val = Math.PI;
	}
	if( val == "x^2" ) {
		eval = Math.pow(x,2);
	}
	document.getElementById("d").value	+=	val;
}

//	Evaluate the equation
function e( )	{
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err)		{
		d("Error");
	}
}
