/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw
*/

function game(input1, input2){
    if(input1 == input2){
        return 0;
    }else{
        if(input1 == 'Paper'){
            if(input2 == 'Rock'){
                return 1;
            }
            return 2;
        }
        if(input1 == 'Scissors'){
            if(input2 == 'Paper'){
                return 1;
            }
            return 2;
        }
        if(input1 == 'Rock'){
            if(input2 == 'Scissors'){
                return 1;
            }
            return 2;
        }
    }
    return input1
};

export { game };