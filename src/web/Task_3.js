'use strict'

/**
*Функция отечающая за удаление указанной задачи.
*Требуется:
*	1.Указать такой REST API URL предоставляемый RESTForms, чтобы
*	  получить удалить указанную задачу.
*	2.Указать тип запроса.
*/

function deleteTaskAJAX(id)
{
	/*id - id удаляемой задачи*/	
	$.ajax({
        url: '', /*Сюда введите URL запроса*/
        type: '', /*Сюда введите тип запроса*/










//===================Код не относящийся к заданию==========================================
        complete: function(data) {
          	$('li#'+id).hide(400, function() {
            	$(this).remove();
        	});
        },
        dataType: 'json'   
    });
}
//===========================================================================================

