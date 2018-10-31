$(document).ready(function(){


  $('#new-task-btn').click(function(){

      let theNewTask = $('.task-input').val()


      $('#the-list').append
      
      `<li> ${theNewTask} 
      <button class="delete">Delete Task</button>
      </li>`


      // backticks allow it to be written without strings and ++'s
    //  ` ${theNewTask}` instead of ' "newtask" ++ " "
// append - add to the bottom 0, 1, 2
// prepend - add from the top 3, 2, 1

    $('.task-input').val('')


    $('.delete').click(function(){
        $(this).parent.remove();
    }) //end delete button click function

s

      $('.complete').click(function(){
        $(this).parent().find('div').addClass('strikethough');
      })
  })
  



})

// end task button function

// CRUD - create, read, update and delete