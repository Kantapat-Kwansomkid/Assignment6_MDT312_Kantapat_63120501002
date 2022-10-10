const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const UsernameFromRegis = urlParams.get('username');
	console.log(UsernameFromRegis)
	const passwordFromRegis = urlParams.get('password');
	console.log(passwordFromRegis)

window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	
	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];
	if(username.value != UsernameFromRegis || password.value != passwordFromRegis)
	{
		alert("You have entered an invalid username or password, Please try again");

		return false;
	}
	else
	{
		alert("Log in Success!")
	}
}
		