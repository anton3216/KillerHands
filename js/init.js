export function initjs() {
	let isBegin = false;
	// 遮罩
	let mask = document.getElementById("mask");
	// 进度条
	let load = document.getElementById('load');
	// 数值
	let result = document.getElementById('result');
	// 进度条和数值的父div
	let div_box = document.getElementById('div_box');
	// 开启遮罩
	mask.style.display = "block";
	// 变量i 
	// 作用1 进度条数值
	// 作用2 进度条内容宽度
	let i = 0;
	// 定时器 75执行一次
	let timer = setInterval(function() {


		if (i < 101) {
			i += 1;
			// 设置进度条内容宽度
			load.style.width = i * 9 + 'px';
			// 更改进度数值
			result.innerText = i + '%';
		}
		if (i >= 101) {
			// 停止定时器
			clearInterval(timer);
			// 隐藏进度条
			load.style.display = "none";
			// 隐藏父窗口
			div_box.style.display = "none";
			// 替换文字 100% => play
			result.innerText = 'PLAY';
			// 更改文字颜色
			// 设置鼠标样式为手状
			result.onmouseover = function() {
				result.style.color = "orangered";
				result.style.cursor = "pointer"
			}
			// 恢复文字颜色
			result.onmouseout = function() {
				result.style.color = "#d1d1d1";
			}
			// 点击之后 关闭文字和遮罩
			result.onclick = function() {
				result.style.display = "none";
				mask.style.display = "none";
				isBegin = true;
			}
		}
	}, 10);
	// 75
}
