origArray = [2,3,4];

addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("box1").value = origArray[0];//onclick
    document.getElementById("box2").value = origArray[1];//anonymous funtion
    document.getElementById("box3").value = origArray[2];//call funtion by name
});

//Using the OnClick to call function that squares values from OrigArray
function squaredArray () {
    //let squaredArray = origArray.map(x => x * x);
    let squaredArray = origArray.map(squaredFunction)

    document.getElementById("box1").value = squaredArray[0];
    document.getElementById("box2").value = squaredArray[1];
    document.getElementById("box3").value = squaredArray[2];

};

//Anonymous function  that cubes values from origArray

document.getElementById("button2").addEventListener("click", function(){
        let cubedArray = origArray.map(cubedFunction)

        document.getElementById("box1").value = cubedArray[0];
        document.getElementById("box2").value = cubedArray[1];
        document.getElementById("box3").value = cubedArray[2];
    
    });
//call function directly
document.getElementById("button3").addEventListener("click", fourthpArray);



function fourthpArray(){
        let fourthpArray = origArray.map(fourthpFunction)

        document.getElementById("box1").value = fourthpArray[0];
        document.getElementById("box2").value = fourthpArray[1];
        document.getElementById("box3").value = fourthpArray[2];
    }

    function squaredFunction(x){
        x = x*x;
        return x

    }
    
    function cubedFunction(x){
        x = x*x*x;
        return x

    }

    
    function fourthpFunction(x){
        x = x*x*x*x;
        return x

    }
