function login(form){
	if (form.usuario.value === "Hiromi") {
		if (form.contraseña.value === 'helloworld') {
			location = "cajero.html";
			
		} else {
			alert("el usuario y/o contraseña incorectos")
		}
		
	} 
	}


    function formula() {
        let cantidadT = parseInt(document.getElementById("cant").value);
        let cantidad1 = parseInt(document.getElementById("c1").value);
        let cantidad2 = parseInt(document.getElementById("c2").value);
        document.getElementById("c1").value = (cantidad1 - cantidadT);
        document.getElementById("c2").value = (cantidad2 + cantidadT);
    }

    function formula2() {
        let cantidadT = parseInt(document.getElementById("cant").value);
        let cantidad1 = parseInt(document.getElementById("c1").value);
        let cantidad2 = parseInt(document.getElementById("c2").value);
        document.getElementById("c1").value = (cantidad1 + cantidadT);
        document.getElementById("c2").value = (cantidad2 - cantidadT);
    }

    function formula3() {
        let cantidadT = parseInt(document.getElementById("cant").value);
        let cantidad1 = parseInt(document.getElementById("c1").value);
        let cantidad2 = parseInt(document.getElementById("c2").value);
        document.getElementById("c1").value = (cantidad1 + cantidadT);
        
    }

    function formula4() {
        let cantidadT = parseInt(document.getElementById("cant").value);
        let cantidad1 = parseInt(document.getElementById("c1").value);
        let cantidad2 = parseInt(document.getElementById("c2").value);
        document.getElementById("c2").value = (cantidad2 + cantidadT);
        
    }

    function formula5() {
        let cantidadT = parseInt(document.getElementById("cant").value);
        let cantidad1 = parseInt(document.getElementById("c1").value);
        let cantidad2 = parseInt(document.getElementById("c2").value);
        document.getElementById("c1").value = (cantidad1 - cantidadT);
        
    }

    function formula6() {
        let cantidadT = parseInt(document.getElementById("cant").value);
        let cantidad1 = parseInt(document.getElementById("c1").value);
        let cantidad2 = parseInt(document.getElementById("c2").value);
        document.getElementById("c2").value = (cantidad2 - cantidadT);
        
    }