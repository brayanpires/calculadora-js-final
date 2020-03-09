

		function calcular() {
        
   var valor1 = document.getElementById("valor1").value;
   
   var valor2 = document.getElementById("valor2").value;
   
         oper = document.getElementById("oper").value;
   if (oper == "somar") {

      var res = parseInt(valor1) + parseInt(valor2);
      document.getElementById("resa").innerHTML="resposta da soma é:"+(res);
   } else {
      if (oper == "subtrair") {
         var res = valor1-valor2;
         document.getElementById("resa").innerHTML="resposta da subtração é:"+(res);
      } else {
         if (oper == "multiplicar") {
            var res = valor1*valor2;
            document.getElementById("resa").innerHTML="resposta da multiplicação é:"+(res);
         } else {
            var res = valor1/valor2;
            document.getElementById("resa").innerHTML="resposta da divisão:"+(res);
            if (valor2 == 0){
        
               document.getElementById("resa").innerHTML="resposta impossivel";
           }
           
            console.log(oper);
         }
      }
   }


  
   ;
   

}

		
	
		