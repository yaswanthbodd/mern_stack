exports.findBigNumber = (first,second) =>{
	if(first>second)
		return first;
	else
		return second;
};

exports.addNumber = (first,second) => {
	return first+second;
};

exports.subtract = (first,second) => {
	if(first>second)
		return first-second;
	else
		return second-first;
};