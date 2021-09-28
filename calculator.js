let disp = document.getElementById('disp');
let total = 0;
let state = 'start';//・start→初期値　・calBtn→演算子入力後　・calculation→数字を入力している　・finish→計算直後（＝押した後）
let mode = 'integer_mode';//integer_mode→整数入力モード　・decimal_mode→小数点入力モード
let state4 = 'standard2';   //startの０の状態
let state3 = 'standard';　　//state3 = calAfter → 演算子押した後に０入力した状態


// 1-9の数字ボタンを押した時
function number (btn) {
 if(state4 === 'startZero'){
  total = total.slice(0, -1)
 }
 if(state3 === 'calAfter'){
    total = total.slice(0, -1)
   }
 if(state === 'start'){
    total = btn.value;
   }else if(state === 'finish'){
    reset();
    total = btn.value;
   }else if(state === 'calculation'){
    total += btn.value;
   }else if(state === 'calBtn'){
   total += btn.value;
   }
 disp.value = total;
 state = 'calculation';
 state3 = 'standard';
 state4 = 'standard2';
}
 
 //リセットを行う関数
  function reset() {
   total = ""; 
   disp.value = 0;
  }
  
 // 0の数字ボタンを押した時
function zero(btn){
 if(state==='start'||state==='finish'||state==='calBtn'){
   if(disp.value.slice(-1) === '0') {
    return;
     }
  }
 if(state==='start') {
   total = btn.value; 
   state4 = 'startZero';
  }else{
   total += btn.value;
 }
 if(state ==='calBtn'){
  state3 = 'calAfter';
 }
 disp.value = total;
 state = 'calculation';
}

//00押した時
 function wZero (btn){
  if(state === 'start'||state ==='finish'||state === 'calBtn'){
   if(disp.value.slice(-1) === '0'){
    return;
    }
  }
  if(state ==='calBtn'){
   return;
  }
  total += btn.value;
  disp.value = total;
  state = 'calculation'
 }


 // 「.」小数点ボタンを押した時
 function point (btn){
  if(mode === 'decimal_mode'){
   return;
  }
  if(state ==='start'||state ==='finish'){
   total ='0'+btn.value;
  }else if(state === 'calBtn'){
   total += '0'+btn.value;
  }else{
   total += btn.value;
  }
 
  disp.value = total;
  mode = 'decimal_mode';
  state = 'calculation';
  state3 ='standard';
  state4 ='standard2';
 }
 
 //「＋　÷　－　×」ボタンを押した時
 function calc (btn){
  if(state === 'start'){
   if(btn.value == "-"){
    total = btn.value;
   }else{
   return;
   }
  }
  if(state === 'calculation'){
   total += btn.value;
  }else if(state === 'finish'){
   total = disp.value;
   total += btn.value;
   disp.value = 0;
  }else if(state === 'calBtn'){
   total = total.slice(0, -1)
   total += btn.value;
  }
  disp.value = total;
  state = 'calBtn';
  mode = 'integer_mode';
 }

 //イコールを押した時
 function result (btn){
  disp.value = eval(total);
  state = 'finish';
 }
 
 //クリアボタンを押した時
 function resetClear (btn){
  reset();
  mode = 'integer_mode';
  state = 'start';
  state3 = 'standard';
  state4 = 'standard2';
  }
  