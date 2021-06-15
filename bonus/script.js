
		
		var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var n = 1;
		var x = 0;
        
		function AddRow(){

			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("fname").value;
			list2[x] = document.getElementById("lname").value;
			list3[x] = document.getElementById("email").value;
			list4[x] = document.getElementById("age").value;
            
            
            var regxEmail = /([a-zA-Z0-9>_-])+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(list3[x]);
    			
            
            if(isFinite(list4[x])==true &&list4[x]>10 &&list4[x]<50 && regxEmail==true){
                var cel1 = NewRow.insertCell(0);
                var cel2 = NewRow.insertCell(1);
                var cel3 = NewRow.insertCell(2);
                var cel4 = NewRow.insertCell(3);
                cel1.innerHTML = list1[x];
                cel2.innerHTML = list2[x];
                cel3.innerHTML = list3[x];
                cel4.innerHTML = list4[x];
			    n++;
			    x++;
            }else{
                alert("sorry! error age or email !");
            }
        }
            
		
        function reset(){
            document.getElementById("fname").value="";
            document.getElementById("lname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("age").value ="";

        }
