export function bubbleSort(arr:number[]):number[]{
    const result = [...arr];
    let swapped = false;

    for(let i = 0; i < result.length; i++){
        swapped = false;
        for(let j = 0; j < result.length - 1 -i;j++){
            if(result[j]>result[j+1]){
                const temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return result;
};