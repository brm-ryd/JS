function xor_encode()
{
	var enSt="";
	var mSt=document.getElementById("in_mesg").value;
	var keySt = document.getElementById("key_v").value;
	var ii, mCh, mCode, kCh, kCode, ind;
	for(ii=0;ii< mSt.length; ii++) {
		mCode = mSt.charCodeAt(ii);
		ind = ii % keySt.length;
		kCh = keySt.charAt(ind);
		kCode = kCh.charCodeAt(0);
		enSt = enSt + String.fromCharCode(mCode ^ kCode);
	}
	document.getElementById("en_str").value=unicodeCharToHex(enSt);
}
function unicodeCharToHex()
{
	var r = "";
	var hex = new Array ("0", "1", "2" ,"3", "4", "5", "6", "7", "8", "9",
	"a", "b", "c", "d", "e", "f");
	for (var i=0; i< s.length; i++) {
		r+= hex[s.charCodeAt(i) >> 16 & 0xf] + 
		hex[s.charCodeAt(i) >> 8 & 0xf] + 
		hex[s.charCodeAt(i) >> 4 & 0xf] + 
		hex[s.charCodeAt(i) >> 0xf] + " ";
	}
	return r;
}

function xor_decode()
{
	var deSt = "";
	var eSt = hexToUnicodeChar(document.getElementById("in_mesg").value);
	var keySt = document.getElementById("key_v").value;
	var ii, eCh, eCode, kCh, kCode, ind;
	for (ii = 0;ii < eSt.length;ii++) {
		eCode = eSt.charCodeAt(ii);
		ind = ii % keySt.length;
		kCh = keySt.charAt(ind);
		kCode = kCh.charCodeAt(0);
		deSt = deSt + String.fromCharCode(eCode ^ kCode);
	}
	document.getElementById("de_str").value=deSt;
}

function hexToUnicodeChar(s)
{
	var r="", jj=0;
	while(jj < s.length)
	{
		r += String.fromCharCode(parseInt(s.substring(jj,jj+4),16));
		jj = jj + 5;
	}
	return r;
}

