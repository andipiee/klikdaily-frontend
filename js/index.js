// fetch('http://dummy.restapiexample.com/api/v1/employees')
//     .then(response => response.json())
//     .then(console.log(data))

let dropdown = document.getElementById('name');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Your Name Below';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'http://dummy.restapiexample.com/api/v1/employees';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].employee_name;
      	  option.value = data[i].employee_name;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });