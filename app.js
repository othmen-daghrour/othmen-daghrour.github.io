import data from './Content.json' assert {type:'json'};

let Cuurent_Language = document.getElementById('language');
let Supported_Language = document.getElementById('supported-languages');
let Summary_Content = document.getElementById('summary-content'); 

let Display_two = document.getElementById('Display_two');
let Display_four = document.getElementById('Display_four');
let Display_six = document.getElementById('Display_six');

Display_two.addEventListener('click',()=>{
    document.getElementById('tools').style.gridTemplateColumns=`repeat(2,190px)`;
});
Display_four.addEventListener('click',()=>{
    document.getElementById('tools').style.gridTemplateColumns=`repeat(4,190px)`;
});
Display_six.addEventListener('click',()=>{
    document.getElementById('tools').style.gridTemplateColumns=`repeat(6,190px)`;
});

let ArrayOfTools=[];
let ArrayOfreferences=[];

ArrayOfTools=document.getElementById('tools').children;

for(let i=0; i<ArrayOfTools.length;i++)
{
  switch  (ArrayOfTools[i].children[0].alt)
  {
    case 'React':
      ArrayOfreferences[i]={ref:'front',element:ArrayOfTools[i].children}
    case 'Redux':
      ArrayOfreferences[i]={ref:'front',element:ArrayOfTools[i].children}
    case 'TailwindCSS':
      ArrayOfreferences[i]={ref:'front',element:ArrayOfTools[i].children}
    case 'Material UI':
      ArrayOfreferences[i]={ref:'front',element:ArrayOfTools[i].children}
    case 'SASS':
      ArrayOfreferences[i]={ref:'front',element:ArrayOfTools[i].children}
    case 'Nodejs':
      ArrayOfreferences[i]={ref:'back',element:ArrayOfTools[i].children}
    case 'Django':
      ArrayOfreferences[i]={ref:'back',element:ArrayOfTools[i].children}
    case 'Laravel':
      ArrayOfreferences[i]={ref:'back',element:ArrayOfTools[i].children}
    case 'MongoDB':
      ArrayOfreferences[i]={ref:'database',element:ArrayOfTools[i].children}
    case 'Redis':
      ArrayOfreferences[i]={ref:'database',element:ArrayOfTools[i].children}
    case 'PostgreSQL':
      ArrayOfreferences[i]={ref:'database',element:ArrayOfTools[i].children}
    case 'Cypress':
      ArrayOfreferences[i]={ref:'front',element:ArrayOfTools[i].children}
    default:null;
  }
};

console.log(ArrayOfreferences);



Summary_Content.textContent=data.FR.summary
Cuurent_Language.addEventListener('change',(e)=>{
   Supported_Language.setAttribute('src',`flags/${e.target.value}_flag.png`)
});


