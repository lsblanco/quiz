//Get /quizes/question
exports.question = funtion(req, res){
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

//Get /quizes/answer
exports.answer = funtion(req, res){
	if(req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else{
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};