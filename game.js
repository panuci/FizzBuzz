function fizzBuzz(value)
{
	if (value % 15 === 0)
    return 'Fizz Buzz';
  
  if (value % 3 === 0)
    return 'Fizz';

  if (value % 5 === 0)
    return 'Buzz';

  return value;
}

function game(s, e)
{
	if(s > e){
  	console.log('error');
    return false;
  }

	for(s; s <= e; s++){
  	console.log(fizzBuzz(s));
  }
}


game(1,36);
