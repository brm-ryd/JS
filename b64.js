var b64Char= 
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890+/!@#$%^&*()-_=<>,.?~";

function base64_en(inStr)
{
	var bitV, twoChar, strLength, outStr="";
	var ii = 0;
	inStr = escape(inStr);
	strLength = inStr.length;
	while (strLength >= ii+ 3)
	{
		bitV = (inStr.charCodeAt(ii++) & 0xff) << 16 | 
		(inStr.charCodeAt(ii++) & 0xff) << 8 |
		inStr.charCodeAt(ii++) & 0xff;
		
		outStr += b64Char.charAt((bitV & 0x00fc0000) >> 18) +
		b64Char.charAt((bitV & 0x0003f000) >> 12 ) +
		b64Char.charAt((bitV & 0x00000fc0) >> 6) +
		b64Char.charAt((bitV & 0x0000003f));
	}
	if (strLength -ii > 0 && strLength -ii < 3)
	{
		twoChar = Boolean(strLength -ii-1);
		bitV = ((inStr.charCodeAt(ii++) & 0xff) << 16) | 
		(twoChar ? (inStr.charCodeAt(ii) & 0xff) << 8 : 0);
		
		outStr += b64Char.charAt((bitV & 0x00fc0000) >> 18) +
		b64Char.charAt((bitV & 0x0003f000) >> 12 ) +
		(twoChar ? b64Char.charAt((bitV & 0x0000fc0) >> 6) : "=") + "=";
	}
	return outStr;
}
function base64_de(inStr)
{
	var bitV, outStr="", tmpStr="";
	var strLength = inStr.length;
	for(ii=0; ii< strLength; ii+=4)
	{
		bitV = (b64Char.indexOf(inStr.charAt(ii)) & 0xff) <<18 |
		(b64Char.indexOf(inStr.charAt(ii+1)) & 0xff) <<12 |
		(b64Char.indexOf(inStr.charAt(ii+2)) & 0xff) << 6 |
		b64Char.indexOf(inStr.charAt(ii+3)) & 0xff;
		
		tmpStr += String.fromCharCode((bitV & 0xff0000) >>16,
		(bitV & 0xff00) >>8,bitV & 0xff);
	}
	if(inStr.charCodeAt(ii-2) == 0x3d)
	{
		outStr=tmpStr.substring(0, tmpStr.length -2);
	}
	else if(inStr.charCodeAt(ii-1) == 0x3d)
	{
		outStr=tmpStr.substring(0, tmpStr.length -1);
	}
	else outStr=tmpStr;
	return unescape(outStr);
}
