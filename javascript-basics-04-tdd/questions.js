
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace('e',' ');
}
const concatString = (text1, text2) => {
    return text1.concat(text2);

}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.slice(0,9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();

}
const IsString = (text) => {
    if(typeof text ==="string"){
        return true;
    }
    return false;

}

const getExtension = (text) => {
    const parts = text.split('.');
  
    const extension = parts[parts.length - 1];
    
    return extension; 

}
const countSpaces = (text) => {
    return text.split(' ').length - 1;

}
const InverseString = (text) => {
    return text.split('').reverse().join('');

}

const power = (x, y) => {
return Math.pow(x,y);
}
const absoluteValue = (num) => {
    return Math.abs(num);

}
const absoluteValueArray = (array) => {
    return array.map((number) => Math.abs(number));
}
const circleSurface = (radius) => {
    const surfaceArea = Math.round(Math.PI * Math.pow(radius, 2));
    return surfaceArea;

}
const hypothenuse = (ab, ac) => {
    const result=ab*ab + ac*ac;
return Math.sqrt(result);

}
const BMI = (weight, height) => {
    const result=weight/(height*height);
return parseFloat(result.toFixed(2));

}

const createLanguagesArray = () => {
    const array=["Html","CSS","Java","PHP"];
return array;

}

const createNumbersArray = () => {
    const array=[0,1,2,3,4,5];
return array;

}

const replaceElement = (languages) => {
    languages[2]="Javascript";
return languages;

}

const addElement = (languages) => {
    languages.push("Ruby","Python");
return languages;

}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1);
return numbers;

}

const removeFirst = (languages) => {
    languages.shift();
 return languages;

}

const removeLast = (languages) => {
    languages.pop();
  return languages;

}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",");

}

const convertArrToStr = (languages) => {
    return languages.join();

}

const sortArr = (social_arr) => {
    return social_arr.sort();

}

const invertArr = (social_arr) => {
    return social_arr.reverse();

}