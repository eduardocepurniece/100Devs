document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value
  day = day.toLowerCase();
  //Conditionals go here

  if(day === 'monday' || day === 'wednesday' || day === 'friday'){
    document.querySelector('#placeToSee').innerHTML = 'Boring.';
  }else if(day === 'tuesday' || day === 'thursday'){
    document.querySelector('#placeToSee').innerHTML = 'Class Day!';
  }else if(day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerHTML = 'Weekendddaaaa'
  }else{
    document.querySelector('#placeToSee').innerHTML = 'Is that even a day bro?'
  }

}
