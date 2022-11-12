// 向上移动
function moveTop() {}

// 向下移动
function moveDown() {

}

// 向左移动
function moveLeft() {

}

// 向右移动
function moveRight() {
	// 获取玩家照片
	let killer = document.getElementById("killer");
	// 获取当前所在TD
	let currentTD = killer.parentElement;
	// 获取向右一个td的id
	let prefix = currentTD.id.split("-")[0]
	let suffix = parseInt(currentTD.id.split("-")[1]);
	if (suffix === 16) {
		prefix++;
		suffix = 1;
	} else {
		suffix++;
	}
	// 拼接向右一个td的id
	let nextTD_ID = prefix + "-" + suffix;
	// 获取向右一个TD
	let nextTD = document.getElementById(nextTD_ID);
	// 移动杀手图片
	nextTD.appendChild(currentTD.firstChild)
	// 设置移动之后的路径颜色
	currentTD.style.backgroundColor = "#ff8989";
}

//开火
function fire() {

}
