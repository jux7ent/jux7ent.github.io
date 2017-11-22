$(document).ready(function() {
	$("#root").append(
		'<ul></ul>'+
		'<input id="add_task_input" type="text">'+
		'<button id="add_task">Добавить</button>'
	);

	add_task = function(task_title) {
		$('#root ul').append(
			'<li><span>' + task_title + '</span><button>Удалить</button></li>'
		);
		$('ul button:last').click(function() {
			$(this).parent().remove();
		});
	}

	$('#add_task').click(function() {
		add_task($('#add_task_input').val());
		$('#add_task_input').val('');
	});

	add_task('Сделать задание #3 по web-программированию');
});
