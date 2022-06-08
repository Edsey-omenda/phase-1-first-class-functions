function receivesAFunction( callback){
    let name = 'James Omenda'
    console.log(`Hello, ${name}`);
    callback();
}
receivesAFunction(function disp(){
    console.log('Nice to meet you.');
    });

    function returnsANamedFunction(){
      
        function multiply(){
            let num1 = 2;
            let num2 = 4;
            console.log(num1*num2);
        }

        return multiply;
    }

    function returnsAnAnonymousFunction(){
        
        /*console.log(function(){
       
        })*/
       return function(){
       
        }
    }  