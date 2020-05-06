let obj = JSON.parse($request.body);
if($request.method == "PUT") {
	obj.elapsed = randomNum(120, 180);
	obj.result = 100;
}
$done({body: JSON.stringify(obj)});

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}  